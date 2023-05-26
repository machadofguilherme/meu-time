export const getKeys = () => {
    const season = localStorage.getItem('season') as string;
    const leagueString = localStorage.getItem('league');
    const league = leagueString ? JSON.parse(leagueString) : null;
    const key = localStorage.getItem('key') as string;
    
    const data = {
        season,
        league: league.id,
        key,
    }

    return data;
}