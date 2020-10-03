import { api } from 'src/common/lib/api';
import { IAccount } from 'src/common/state/appContext';

export class AccountService {
  async getAccount(account: string) {
    const result = await api.post('', {
      query: `query Accounts($code: String!) {
                account(code: $code) {
                  name
                  code
                }
              }`,
      variables: { code: account },
    });

    return result.data?.data?.account as IAccount;
  }
}

export default new AccountService();
