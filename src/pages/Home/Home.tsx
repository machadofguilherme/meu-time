import { useState } from "react"
import { BiFootball } from 'react-icons/bi'

import { MainContainer, FormContainer } from "./HomeStyle";

const Home = () => {
    const [key, setKey] = useState('');
    
    console.log(key);
    
    return (
        <MainContainer>
            <header>
                <i>
                    <BiFootball />
                </i>
                <h1>Meu Time</h1>
            </header>
            <FormContainer>
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