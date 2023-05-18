import { FormEvent, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { BiFootball } from 'react-icons/bi'

import { MainContainer, FormContainer } from "./HomeStyle";
import { requestData } from "../../utils/fetchApi";

const Home = () => {
    const [key, setKey] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const key = localStorage
            .getItem('key');
        
       if (key) {
        navigate('/app');
       }
    }, [navigate]);

    const getData = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            await requestData('/countries', key);
            JSON.stringify(localStorage.setItem('key', key));
            navigate('/app');
        } catch (error) {
            return error
        }
    };
    
    return (
        <MainContainer>
            <header>
                <i>
                    <BiFootball />
                </i>
                <h1>Meu Time</h1>
            </header>
            <FormContainer onSubmit={(e) => getData(e)}>
                <input
                    type="text"
                    placeholder="Digite a sua API Key."
                    onChange={({target}) => setKey(target.value)}
                />
                <button type="submit">Entrar</button>
            </FormContainer>
        </MainContainer>
    )
}

export default Home