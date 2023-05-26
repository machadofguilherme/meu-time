import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { requestData } from "../../utils/fetchApi";
import Country from "../../components/Country/Country";
import { ICountry } from "../../interfaces/ICountry";
import AppContext from "../../context/AppContext";
import Season from "../../components/Season/Season";
import { DashboardContainer, SectionDashboard } from "./DashboardStyle";
import League from "../../components/League/League";
import Team from "../../components/Team/Team";
import Info from "../../components/Info/Info";

interface Props {
  country: ICountry[];
  dataTransport: object;
}

const Dashboard: React.FC<Props> = () => {
  const [country, setCountry] = useState<ICountry[]>([]);

  const navigate = useNavigate();
  const { setIsLogout, step } = useContext(AppContext);

  useEffect(() => {
    const apiKey = localStorage.getItem('key');

    if (!apiKey) {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    const apiKey = String(localStorage.getItem('key'));

    const request = async () => {
      const response = await requestData('/countries', apiKey);
      setCountry(response.data.response as ICountry[]);
    }

    request();
  }, []);

  const logout = () => setIsLogout(true);

  return (
    <DashboardContainer>
      <SectionDashboard>
        <h1>Dashboard</h1>
        <button onClick={logout}>Sair</button>
      </SectionDashboard>
      <form>
        {step === 'country' && <Country country={country} />}
        {step === 'season' && <Season />}
        {step === 'league' && <League />}
        {step === 'team' && <Team />}
        {step === 'info' && <Info />}
      </form>
    </DashboardContainer>
  )
}

export default Dashboard