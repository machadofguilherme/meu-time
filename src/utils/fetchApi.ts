import axios from 'axios';
import IResponse from '../interfaces/IResponse';

export const requestData = async (endpoint: string, key: string): Promise<IResponse> => {
    const config = {
        method: 'get',
        url: `https://v3.football.api-sports.io/${endpoint}`,
        headers: {
          'x-rapidapi-key': `${key}`,
          'x-rapidapi-host': 'v3.football.api-sports.io'
        }
      };
      
    const response = await axios.request(config);
    return response;
}
