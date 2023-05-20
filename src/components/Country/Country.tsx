import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from 'react';

import AppContext from "../../context/AppContext";
import { ICountry } from "../../interfaces/ICountry";
import { CountryContainer } from "./CountryStyle";

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
                        <section>
                            {
                                flag && (
                                    <div>
                                        <img src={`${flag}`} />
                                        <p>{countryName}</p>
                                        <p>
                                            <span>Isso está certo?</span>
                                        </p>
                                    </div>

                                )
                            }
                        </section>

                        <button
                            type="button"
                            disabled={!isDisable}
                            onClick={nextScreen}>
                            Próximo
                        </button>
                    </section>
                </CountryContainer>
            </>
        )
    }

Country.propTypes = {
    country: PropTypes.any.isRequired,
}

export default Country