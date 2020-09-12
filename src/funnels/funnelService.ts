import { api } from 'src/common/lib/api';
import { IFunnel } from 'src/common/state/appContext';

export class FunnelService {
  async getFunnels(account: string) {
    const result = await api.post('', {
      query: `query Accounts($code: String!) {
                account(code: $code) {
                  funnels {
                    id
                    name
                    steps {
                      id
                      code
                      name
                    }
                  }
                }
              }`,
      variables: { code: account },
    });

    return (result.data?.data?.account?.funnels || []) as IFunnel[];
  }
}

export default new FunnelService();
