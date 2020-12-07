import { gqlApi } from 'src/common/api/clients';

export class FunnelService {
  async getFunnels(account: string) {
    const result = await gqlApi.query({
      account: [
        {
          code: account,
        },
        {
          funnels: {
            id: true,
            name: true,
            steps: {
              id: true,
              code: true,
              name: true,
            },
          },
        },
      ],
    });

    return result?.account?.funnels || [];
  }
}

export default new FunnelService();
