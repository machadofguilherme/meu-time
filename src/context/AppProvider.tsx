import React, { useState } from 'react'

import AppContext from './AppContext';
import IPRoute from '../interfaces/IPRoute'
import IContext from '../interfaces/IContext';

const AppProvider: React.FC<IPRoute> = ({ children }) => {
    const [key, setKey] = useState('');
    const [dataTransport, setDataTransport] = useState({});
    const [step, setStep] = useState('country');

    const populateInfo = (country: string, flag: string) => {
      const object = {
        country,
        flag
      }

      setDataTransport(object);
    }

    const data: IContext = {
        key,
        step,
        dataTransport,
        setKey,
        setStep,
        populateInfo,
    }

  return (
    <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider