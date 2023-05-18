import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [isLogout, setIsLogout] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
      if (isLogout) {
        localStorage.clear();
        navigate('/');
      }
    }, [isLogout, navigate]);

    useEffect(() => {
      const key = localStorage
          .getItem('key');
      
     if (!key) {
      navigate('/');
     }
  }, [navigate]);

    const logout = () => setIsLogout(true);

    return (
      <>
        <div>Dashboard</div>
        <button onClick={logout}>Sair</button>
      </>
    )
}

export default Dashboard