import React, { useState, useEffect, useCallback } from 'react'

import AppContext from './AppContext';
import IPRoute from '../interfaces/IPRoute'
import IContext from '../interfaces/IContext';
import { useNavigate } from 'react-router-dom';

const AppProvider: React.FC<IPRoute> = ({ children }) => {
  const [isLogout, setIsLogout] = useState(false);
  const [dataTransport, setDataTransport] = useState({});
  const [step, setStep] = useState('country');

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogout) {
      localStorage.clear();
      navigate('/');
    }
  }, [isLogout, navigate]);

  const populateInfo = useCallback(() =>
    (country: string, flag: string) => {
      const object = {
        country,
        flag
      }

      setDataTransport(object);
    }, []);

  const data: IContext = {
    step,
    dataTransport,
    setStep,
    setIsLogout,
    populateInfo,
  }

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider