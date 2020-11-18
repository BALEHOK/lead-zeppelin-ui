import { gqlApi } from 'src/common/api/clients';

export class AccountService {
  async getAccount(account: string) {
    const result = await gqlApi.query({
      account: [
        { code: account },
        {
          name: true,
          code: true,
        },
      ],
    });

    return result.account;
  }
}

export default new AccountService();
