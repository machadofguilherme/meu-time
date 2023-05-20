import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { requestData } from "../../utils/fetchApi";
import Country from "../../components/Country/Country";
import { ICountry } from "../../interfaces/ICountry";
import AppContext from "../../context/AppContext";
import { DashboardContainer, SectionDashboard } from "./DashboardStyle";
import Season from "../../components/Season/Season";
// import { validKeyResponse } from "../../data/validKeyResponse";

interface Props {
  country: ICountry[];
  dataTransport: object;
}

const Dashboard: React.FC<Props> = () => {
  const [isLogout, setIsLogout] = useState(false);
  const [country, setCountry] = useState<ICountry[]>([]);

  const navigate = useNavigate();
  const { key, step} = useContext(AppContext);

  useEffect(() => {
    if (isLogout) {
      localStorage.clear();
      navigate('/');
    }
  }, [isLogout, navigate]);

  useEffect(() => {
    const apiKey = localStorage
      .getItem('key');

    if (!apiKey) {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    const request = async () => {
      const response = await requestData('/countries', key);
      setCountry(response.data.response as ICountry[]);
      // setCountry(validKeyResponse.data.response as ICountry[]);
    }

    request();
  }, [key]);

  const logout = () => setIsLogout(true);

  return (
    <DashboardContainer>
      <SectionDashboard>
        <h1>Dashboard</h1>
        <button onClick={logout}>Sair</button>
      </SectionDashboard>
      <form>
        { step === 'country' && <Country country={country} /> }
        { step === 'season' && <Season />}
      </form>
    </DashboardContainer>
  )
}

export default Dashboard