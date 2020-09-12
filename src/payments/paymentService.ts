import { api } from 'src/common/lib/api';
import { IPayment } from 'src/common/state/appContext';

export class PaymentService {
  async getPayments(account: string) {
    const result = await api.post('', {
      query: `query Accounts($code: String!) {
                account(code: $code) {
                  payments {
                    id
                    amount
                    created
                    lead {
                      source
                      medium
                      campaign
                      content
                      funnelStep {
                        name
                      }
                    }
                  }
                }
              }`,
      variables: { code: account },
    });

    return (result.data?.data?.account?.payments?.map(this.fromGqlObject) ||
      []) as IPayment[];
  }

  fromGqlObject(rawPayment: any) {
    rawPayment.created = new Date(+rawPayment.created);
    rawPayment?.lead?.created &&
      (rawPayment.lead.created = new Date(+rawPayment.lead.created));

    return rawPayment as IPayment;
  }
}

export default new PaymentService();
