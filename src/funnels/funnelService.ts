import { restApi } from 'src/common/api/clients';
import { IFunnel } from 'src/common/state/appContext';

export class FunnelService {
  async getFunnels(account: string) {
    const result = await restApi.post('', {
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
