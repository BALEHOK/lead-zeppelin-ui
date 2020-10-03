import { api } from 'src/common/lib/api';
import { IClient } from 'src/common/state/appContext';

export class ClientService {
  async getClients(account: string) {
    const result = await api.post('', {
      query: `query Accounts($code: String!) {
                account(code: $code) {
                  clients {
                    id
                    leads {
                      payments {
                        amount
                      }
                    }
                  }
                }
              }`,
      variables: { code: account },
    });

    return (result.data?.data?.account?.clients || []) as IClient[];
  }
}

export default new ClientService();
