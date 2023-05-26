import { FormEvent, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { BiFootball } from 'react-icons/bi'

import { MainContainer, FormContainer } from "./HomeStyle";
import { requestData } from "../../utils/fetchApi";
import IResponse from '../../interfaces/IResponse';

const Home = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [key, setKey] = useState('');

    useEffect(() => {
        const apiKey = localStorage
            .getItem('key');

        if (apiKey) {
            navigate('/app');
        }
    }, [navigate]);

    const requisitionOperation = async () => {
        const response: IResponse = await requestData('/countries', key);

        if (response.data.errors.token) {
            setError(true);
        } else {
            setError(false);
            JSON.stringify(localStorage.setItem('key', key));
            navigate('/app');
        }
    }

    const getData = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        requisitionOperation();
    };

    const login = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            requisitionOperation();
        }
    }
    
    return (
        <MainContainer>
            <header>
                <i data-testid="logo">
                    <BiFootball />
                </i>
                
                <h1>
                    Meu Time
                </h1>
            </header>

            <FormContainer onSubmit={(e) => getData(e)}>
                <input
                    type="text"
                    placeholder="Digite a sua API Key."
                    onChange={({ target }) => setKey(target.value)}
                    onKeyDown={() => login}
                />
                {
                    error && (
                        <p>Chave inválida</p>
                    )
                }

                <button type="submit">Entrar</button>
            </FormContainer>
        </MainContainer>
    )
}

export default Home