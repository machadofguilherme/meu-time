interface Season {
    coverage: {
        fixtures: {
            events: boolean;
            lineups: boolean;
            statistics_fixtures: boolean;
            statistics_players: boolean;
        },
        standings: boolean;
        players: boolean;
        top_scorers: boolean;
        top_assists: boolean;
        top_cards: boolean;
        injuries: boolean;
        predictions: boolean;
        odds: boolean;
        current: boolean;
        end: string;
        start: string;
        year: number;
    }
}

export default interface ILeague {
    code: {
        code: string;
        flag: string;
        name: string;
    }
    league: {
        id: number;
        logo: string;
        type: string;
        name: string;
    }
    seasons: Season[]
}