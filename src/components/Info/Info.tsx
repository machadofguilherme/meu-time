import { useEffect, useState } from 'react';

// import MockGame from '../../mocks/Game.json';
// import MockGoal from '../../mocks/Goals.json';
// import Players from '../../mocks/Players.json';
// import MockFormation from '../../mocks/Formation.json';

import { IGames } from '../../interfaces/IGames';
import { IPlayers } from '../../interfaces/IPlayers';
import { ITeamName } from '../../interfaces/ITeamName';
import { IFormation } from '../../interfaces/IFormation';

import TeamChart from '../TeamChart/TeamChart';
import GameTable from '../GameTable/GameTable';
import Formation from '../Formation/Formation';
import PlayersTable from '../PlayersTable/PlayersTable';

import { requestPlayers, requestTeamData } from '../../utils/fetchApi';
import { getKeys } from '../../utils/getKeys';
import { InfoContainer, TeamContainer } from './InfoStyle';
import { ITeamStatistics } from '../../interfaces/ITeamStatistics';

const Info = () => {
    const [team, setTeam] = useState<ITeamName>(Object);
    const [players, setPlayers] = useState<IPlayers[]>([]);
    const [formation, setFormation] = useState<IFormation[]>([]);
    const [game, setGame] = useState<IGames[]>([]);
    const [goal, setGoal] = useState<ApexAxisChartSeries>([]);
    const [statistics, setStatistics] = useState<ITeamStatistics>(Object);

    useEffect(() => {
        const teamData = JSON
            .parse(localStorage.getItem('team') as string);

        setTeam(teamData);
    }, []);

    useEffect(() => {
        const keys = getKeys();

        const request = async () => {
            const response = await requestPlayers(
                '/players',
                team.id,
                keys.league,
                parseInt(keys.season),
                keys.key,
            );

            setPlayers(response.data.response as IPlayers[]);
            // setPlayers(Players as []);
        }

        request();
    }, [team.id]);

    useEffect(() => {
        const keys = getKeys();

        const request = async () => {
            const response = await requestTeamData(
                '/teams/statistics',
                keys.league,
                parseInt(keys.season),
                team.id,
                keys.key,
            );

            setStatistics(response.data.response as unknown as ITeamStatistics);
            setFormation(statistics?.against?.lineups);
            setGame(statistics?.fixtures);
            setGoal(statistics?.goals?.for?.minute as unknown as ApexAxisChartSeries);
            // setFormation(MockFormation as []);
            // setGame(MockGame as IGames[]);
            // setGoal(MockGoal as []);
        }

        request();
    }, [
        team.id,
        statistics?.against?.lineups,
        statistics?.fixtures,
        statistics?.goals?.for?.minute,
    ]);

    return (
        <>
            <TeamContainer>
                <h3>
                    {team?.teamName}
                </h3>

                <img
                    src={team?.img}
                    alt={team?.teamName}
                />
            </TeamContainer>

            <InfoContainer>
                <h3>
                    Plantel de jogadores na temporada:
                </h3>
                {
                    players && (
                        <PlayersTable data={players} />
                    )
                }
            </InfoContainer>

            <InfoContainer>
                <h3>
                    Formações mais utilizadas pela equipe:
                </h3>
                {
                    formation && (
                        <Formation data={formation} />
                    )
                }
            </InfoContainer>

            <InfoContainer>
                <h3>
                    Dados sobre as partidas:
                </h3>
                {
                    game.length > 0 && (
                        <GameTable data={game} />
                    )
                }
            </InfoContainer>

            <InfoContainer>
                {
                    <TeamChart data={goal} />   
                }
            </InfoContainer>
        </>
    )
}

export default Info