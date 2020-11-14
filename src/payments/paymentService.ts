import { Gql } from 'src/common/gql/graphql-zeus';
import { decodeChannel } from 'src/common/lib/channelHash';

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

    const channelPayments = {};
    result.account.leads.forEach((lead) => {
      const { source, medium, campaign, content, referer } = decodeChannel(
        lead.channel
      );
      const channelOrigin = [source, medium, campaign, content, referer]
        .filter(Boolean)
        .join(' / ');
      channelPayments[lead.channel] = channelPayments[lead.channel] || {
        channel: channelOrigin,
        count: 0,
        amount: 0,
      };
      lead.payments.forEach((payment) => {
        channelPayments[lead.channel].count++;
        channelPayments[lead.channel].amount += payment.amount;
      });
    });

    return Object.values(channelPayments);
  }
}

export default new PaymentService();
