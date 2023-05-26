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

export const requestTeams = async (
  endpoint: string,
  country: string,
  season: number,
  league: number,
  key: string,
): Promise<IResponse> => {
  const config = {
    method: 'get',
    url: `https://v3.football.api-sports.io/${endpoint}`,
    params: {
      country,
      season,
      league,
    },
    headers: {
      'x-rapidapi-key': `${key}`,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  };

  const response = await axios.request(config);
  return response;
}

export const requestPlayers = async (
  endpoint: string,
  team: number,
  league: number,
  season: number,
  key: string,
): Promise<IResponse> => {
  const config = {
    method: 'get',
    url: `https://v3.football.api-sports.io/${endpoint}`,
    params: {
      team,
      season,
      league,
    },
    headers: {
      'x-rapidapi-key': `${key}`,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  };

  const response = await axios.request(config);
  return response;
}

export const requestTeamData = async (
  endpoint: string,
  league: number,
  season: number,
  team: number,
  key: string,
): Promise<IResponse> => {
  const config = {
    method: 'get',
    url: `https://v3.football.api-sports.io/${endpoint}`,
    params: {
      league,
      season,
      team,
    },
    headers: {
      'x-rapidapi-key': `${key}`,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  };

  const response = await axios.request(config);
  return response;
}