import { Gql } from 'src/common/gql/graphql-zeus';
import { decodeChannel, emptyEncodedChannel } from 'src/common/lib/channelHash';

export class PaymentService {
  async getPayments(account: string) {
    const result = await Gql.query({
      account: [
        {
          code: account,
        },
        {
          leads: {
            channel: true,
            payments: {
              amount: true,
            },
          },
        },
      ],
    });

    const channelData = {};
    result.account.leads.forEach((lead) => {
      let leadChannelData = channelData[lead.channel];

      let channelOrigin;
      if (!leadChannelData) {
        if (lead.channel !== emptyEncodedChannel) {
          let { source, medium, campaign, content, referer } = decodeChannel(
            lead.channel
          );
          channelOrigin = [source, medium, campaign, content, referer]
            .filter(Boolean)
            .join(' / ');
        } else {
          channelOrigin = '[empty]';
        }

        leadChannelData = {
          channel: channelOrigin,
          count: 0,
          buyers: 0,
          payments: 0,
          revenue: 0,
        };
        channelData[lead.channel] = leadChannelData;
      }

      leadChannelData.count++;
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

export default new PaymentService();
