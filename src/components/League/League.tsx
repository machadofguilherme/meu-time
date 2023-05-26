import { useContext, useEffect, useState } from "react"

import { requestData } from "../../utils/fetchApi";
import AppContext from "../../context/AppContext";
import NextButton from "../NextButton/NextButton";
import { LeagueContainer } from "./LeagueStyle";
import ILeague from "../../interfaces/ILeague";
import Image from "../Image/Image";

const League = () => {
    const [logo, setLogo] = useState<string>('');
    const [league, setLeague] = useState<ILeague[]>([]);
    const [leagueName, setLeagueName] = useState<string>('');
    const [isDisable, setIsDisable] = useState<boolean>(false);

    const { setStep } = useContext(AppContext);

    useEffect(() => {
        const key = String(localStorage.getItem('key'));
        const country = String(localStorage.getItem('country'));
        const season = String(localStorage.getItem('season'));

        const request = async () => {
            const response = await requestData(
                `/leagues?country=${country}&season=${season}`,
                key
            );

            setLeague(response.data.response as ILeague[]);
        }

        request();
    }, []);

    useEffect(() => {
        if (leagueName.length > 0) {
            const findByName = league
                .filter((item) => item?.league.name === leagueName);

            setLogo(findByName[0].league.logo);
            setIsDisable(true);

            const id = findByName[0].league.id;

            const data = {
                id,
                leagueName
            }

            localStorage.setItem('league', JSON.stringify(data));
        } else {
            setLogo('');
        }
    }, [league, leagueName]);

    const nextScreen = () => setStep('team');

    return (
        <LeagueContainer>
            <section>
                <h3>Escolha uma copa/liga/campeonato:</h3>
            </section>
            
            <form>
                <select
                    onChange={({ target }) => setLeagueName(target.value)}
                >
                    {
                        league.map((item, index) => (
                            <option
                                key={index}
                                value={item.league.name}
                            >
                                {item.league.name}
                            </option>
                        ))
                    }
                </select>

                <Image
                    image={logo}
                    title={leagueName}
                />

                <NextButton
                    isDisable={isDisable}
                    next={nextScreen}
                />
            </form>
        </LeagueContainer>
    )
}

export default League