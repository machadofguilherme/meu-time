import IResponse from "../interfaces/IResponse";

export const validKeyResponse: IResponse = {
    data: {
      get: 'countries',
      parameters: [],
      errors: [],
      results: 167,
      paging: {
        current: 1,
        total: 1,
      },
      response: [
        {
          name: 'Albania',
          code: 'AL',
          flag: 'https://media-3.api-sports.io/flags/al.svg',
        },
      ],
    },
    status: 200,
  };