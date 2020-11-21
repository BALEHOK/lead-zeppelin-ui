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
        },
      ],
    });

    const channelData: { [channel: string]: ChannelAnalyticsData } = {};
    result.account.leads.forEach((lead) => {
      let leadChannelData = channelData[lead.channel];

      let channelOrigin;
      if (!leadChannelData) {
        if (lead.channel !== emptyEncodedChannel) {
          let { source, medium, campaign, content } = decodeChannel(
            lead.channel
          );
          channelOrigin = [source, medium, campaign, content]
            .filter(Boolean)
            .join(' / ');
        } else {
          channelOrigin = '[empty]';
        }

        leadChannelData = {
          channel: channelOrigin,
          ua: 0,
          buyers: 0,
          payments: 0,
          revenue: 0,
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
}

export default new AnalyticsService();
