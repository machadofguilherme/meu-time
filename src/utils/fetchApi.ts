import axios from 'axios';

export const requestData = async (endpoint: string, key: string): Promise<[]> => {
    const config = {
        method: 'get',
        url: `https://v3.football.api-sports.io/${endpoint}`,
        headers: {
          'x-rapidapi-key': `${key}`,
          'x-rapidapi-host': 'v3.football.api-sports.io'
        }
      };
      
    const { data } = await axios.request(config);
    return data.response;
}
