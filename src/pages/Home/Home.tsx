import { useState } from "react"

const Home = () => {
    const [key, setKey] = useState('');
    
    console.log(key);
    
    return (
        <main>
            <header>
                <h1>Meu Time</h1>
            </header>
            <form>
                <input
                    type="text"
                    placeholder="Digite a sua API Key."
                    onChange={({target}) => setKey(target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
        </main>
    )
}

export default Home