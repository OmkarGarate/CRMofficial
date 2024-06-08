import React, { createContext, useState, useContext } from 'react';

const UrlIdContext = createContext();

export const UrlIdProvider = ({ children }) => {
  const [urlIdNew, setUrlIdNew] = useState('');

  return (
    <UrlIdContext.Provider value={{ urlIdNew, setUrlIdNew }}>
      {children}
    </UrlIdContext.Provider>
  );
};

export const useUrlIdNew = () => useContext(UrlIdContext);
