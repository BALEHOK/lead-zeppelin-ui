import { gqlApi } from 'src/common/api/clients';
import { decodeChannel, emptyEncodedChannel } from 'src/common/lib/channelHash';
import { ChannelAnalyticsData } from './channelAnalyticsData';

export class AnalyticsService {
  async loadAnalytics(account: string) {
    const result = await gqlApi.query({
      account: [
        {
          code: account,
        },
        {
          leads: {
            channel: true,
            referer: true,
            payments: {
              amount: true,
            },
          },
          channels: {
            channel: true,
            spendings: true,
          },
        },
      ],
    });

    const channelSpendings = result.account.channels.reduce((total, cur) => {
      total[cur.channel] = cur;
      return total;
    }, {});

    const channelData: { [channel: string]: ChannelAnalyticsData } = {};
    result.account.leads.forEach((lead) => {
      let leadChannelData = channelData[lead.channel];

      let channelLabel;
      if (!leadChannelData) {
        if (lead.channel !== emptyEncodedChannel) {
          let { source, medium, campaign, content } = decodeChannel(
            lead.channel
          );
          channelLabel = [source, medium, campaign, content]
            .filter(Boolean)
            .join(' / ');
        } else {
          channelLabel = '[empty]';
        }

        leadChannelData = {
          channel: lead.channel,
          channelLabel,
          ua: 0,
          buyers: 0,
          payments: 0,
          revenue: 0,
          ac: channelSpendings[lead.channel]?.spendings || 0,
        } as ChannelAnalyticsData;
        channelData[lead.channel] = leadChannelData;
      }

      leadChannelData.ua++;
      if (lead.payments?.length) {
        leadChannelData.buyers++;
      }

      lead.payments.forEach((payment) => {
        leadChannelData.payments++;
        leadChannelData.revenue += payment.amount;
      });
    });

    return Object.values(channelData);
  }

  async updateChannelAc(accountId: string, channel: string, ac: number) {
    const result = await gqlApi.mutation({
      updateChannel: [
        {
          accountId,
          channelInfo: {
            channel,
            spendings: ac,
          },
        },
        {
          spendings: true,
        },
      ],
    });

    return result.updateChannel.spendings === ac;
  }
}

export default new AnalyticsService();
