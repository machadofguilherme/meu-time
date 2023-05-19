import React, { useState } from 'react'

import AppContext from './AppContext';
import IPRoute from '../interfaces/IPRoute'
import IContext from '../interfaces/IContext';

const AppProvider: React.FC<IPRoute> = ({ children }) => {
    const [key, setKey] = useState('');
    const [renderSeason, setRenderSeason] = useState(false);
    const [dataTransport, setDataTransport] = useState({});

    const populateInfo = (country: string, flag: string) => {
      const object = {
        country,
        flag
      }

      setDataTransport(object);
    }

    const data: IContext = {
        key,
        renderSeason,
        dataTransport,
        setKey,
        setRenderSeason,
        populateInfo,
    }

  return (
    <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider