import { useContext, useEffect, useState } from "react"

import { requestTeams } from "../../utils/fetchApi";
import AppContext from "../../context/AppContext";
import NextButton from "../NextButton/NextButton";
import { TeamContainer } from "./TeamStyle";
import Image from "../Image/Image";
import { ILocalLeague } from "../../interfaces/ILocalLeague";
import { ITeam } from "../../interfaces/ITeam";

const Team = () => {
    const [logo, setLogo] = useState<string>('');
    const [team, setTeam] = useState<ITeam[]>([]);
    const [teamName, setTeamName] = useState<string>('');
    const [isDisable, setIsDisable] = useState<boolean>(false);

    const { setStep } = useContext(AppContext);

    useEffect(() => {
        const key = String(localStorage.getItem('key'));
        const country = String(localStorage.getItem('country'));
        const season = Number(localStorage.getItem('season'));

        const league: ILocalLeague = JSON
            .parse(localStorage.getItem('league') as string);

        const request = async () => {
            const response = await requestTeams('/teams', country, season, league.id, key);
            setTeam(response.data.response as ITeam[]);
        }

        request();
    }, []);

    useEffect(() => {
        if (teamName.length > 0) {
            const findByName = team
                .filter((item) => item.team.name === teamName);

            setLogo(findByName[0].team.logo);
            setIsDisable(true);

            const data = {
                id: findByName[0].team.id,
                teamName,
                img: logo
            }

            localStorage.setItem('team', JSON.stringify(data));
        } else {
            setLogo('');
        }
    }, [team, teamName, logo]);

    const nextScreen = () => setStep('info');

    return (
        <TeamContainer>
            <section>
                <h3>Escolha um time:</h3>
            </section>

            <form>
                <select
                    onChange={({ target }) => setTeamName(target.value)}
                >
                    {
                        team.map((item, index) => (
                            <option
                                key={index}
                                value={item.team.name}
                            >
                                {item.team.name}
                            </option>
                        ))
                    }
                </select>

                <Image
                    image={logo}
                    title={teamName}
                />

                <NextButton
                    isDisable={isDisable}
                    next={nextScreen}
                />
            </form>
        </TeamContainer>
    )
}

export default Team