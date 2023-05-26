export interface IGames {
    fixtures: {
        played: {
            home: number;
            away: number;
            total: number;
        },
        wins: {
            home: number;
            away: number;
            total: number;
        },
        draws: {
            home: number;
            away: number;
            total: number;
        },
        loses: {
            home: number;
            away: number;
            total: number;
        }
    }
}