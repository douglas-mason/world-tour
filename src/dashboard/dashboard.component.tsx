import React from 'react';
import { CountryCard } from '../_shared/components/country-card/country-card.component';
import { SearchForm } from '../_shared/components/search-form/search-form.component';
import { useCountryContext } from '../_shared/hooks/useCountryContext';

export const Dashboard = () => {
  const { countries } = useCountryContext();
  return (
    <section>
      <SearchForm />
      {countries.map((country) => (
        <CountryCard country={country} />
      ))}
    </section>
  );
};
