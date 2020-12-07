import { gqlApi } from 'src/common/api/clients';

export class AccountService {
  async getAccounts() {
    const result = await gqlApi.query({
      accounts: {
        id: true,
        name: true,
        code: true,
      },
    });

    return result.accounts;
  }
}

export default new AccountService();
