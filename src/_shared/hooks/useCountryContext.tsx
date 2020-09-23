import React from 'react';
import { createContext, useContext, useState } from 'react';

type CountryContext = {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
};

const DEFAULT_COUNTRY_CONTEXT = {
  countries: [],
  setCountries: () => {},
};

const CountryContext = createContext<CountryContext>(DEFAULT_COUNTRY_CONTEXT);

export const useCountryContext = () => {
  return useContext(CountryContext);
};

export const CountryContextProvider: React.FC = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  return (
    <CountryContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountryContext.Provider>
  );
};
