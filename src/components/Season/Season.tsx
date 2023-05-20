import { useContext, useEffect, useState } from "react"

import { requestData } from "../../utils/fetchApi";
import IResponse from "../../interfaces/IResponse";
import AppContext from "../../context/AppContext";
import { SeasonContainer } from "./SeasonStyle";
import NextButton from "../NextButton/NextButton";

type Season = number;

const Season = () => {
  const { setStep } = useContext(AppContext);

  const [season, setSeason] = useState<number[]>([]);
  const [seasonValue, setSeasonValue] = useState<number>(0);
  const [isDisable, setIsDisable] = useState(false);

  useEffect(() => {
    const key = (localStorage.getItem('key'));

    const request = async () => {
      const seasonPerLeague: IResponse =
        await requestData('leagues/seasons', String(key));

      setSeason(seasonPerLeague.data.response as number[]);
    }

    request();
  }, []);

  useEffect(() => {
    localStorage.setItem('season', JSON.stringify(seasonValue));
  }, [seasonValue]);

  useEffect(() => {
    if (seasonValue > 0) {
      setIsDisable(true);
    }
  }, [seasonValue]);

  const nextScreen = () => setStep('league');

  return (
    <SeasonContainer>
      <section>
        <h3>Selecione uma temporada:</h3>
      </section>
      
      <form>
        <select
          onChange={({ target }) => setSeasonValue(Number(target.value))}
        >
          {
            season?.map((item: Season, index: number) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          }
        </select>

        <NextButton
          isDisable={isDisable}
          next={nextScreen}
        />
      </form>
    </SeasonContainer>
  )
}

export default Season