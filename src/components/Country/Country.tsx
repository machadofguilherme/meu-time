import React, { useContext, useEffect, useState } from 'react';

import AppContext from "../../context/AppContext";
import { ICountry } from "../../interfaces/ICountry";
import { CountryContainer } from "./CountryStyle";
import Image from '../Image/Image';
import NextButton from '../NextButton/NextButton';

interface Props {
    country: ICountry[]
}

const Country: React
    .FC<Props> = ({ country }) => {
        const [flag, setFlag] = useState('');
        const [countryName, setCountryName] = useState('');
        const [isDisable, setIsDisable] = useState(false);

        const { populateInfo, setStep } = useContext(AppContext);

        useEffect(() => {
            if (countryName.length > 0) {
                const findByName = country
                    .filter((item) => item?.name === countryName);

                setFlag(findByName[0].flag);
                setIsDisable(true);

                localStorage.setItem('country', countryName);
            } else {
                setFlag('');
            }
        }, [country, countryName]);

        const nextScreen = () => {
            populateInfo(countryName, flag);
            setStep('season');
        }

        return (
            <>
                <CountryContainer>
                    <section>
                        <h3>Faça sua escolha:</h3>
                    </section>

                    <section>
                        <select
                            onChange={({ target }) => setCountryName(target.value)}
                        >
                            {
                                country?.map((item: ICountry, index: number) => (
                                    <option key={index} value={item?.name}>
                                        {item.name}
                                    </option>
                                ))
                            }
                        </select>

                        <Image
                            image={flag}
                            title={countryName}
                        />

                        <NextButton
                            isDisable={isDisable}
                            next={nextScreen}
                        />
                    </section>
                </CountryContainer>
            </>
        )
    }

export default Country