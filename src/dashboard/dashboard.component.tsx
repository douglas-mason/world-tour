import React, { useEffect } from 'react';
import './dashboard.styles.scss';
import { CountryCard } from '../_shared/components/country-card/country-card.component';
import { SearchForm } from '../_shared/components/search-form/search-form.component';
import { useCountryContext } from '../_shared/hooks/useCountryContext';
import { Link } from 'react-router-dom';
import { RegionFilter } from '../_shared/components/region-filter/region-filter.component';
import { getAllCountries } from '../_shared/countries-api.services';

export const Dashboard = () => {
  const { countries, setCountries } = useCountryContext();
  useEffect(() => {
    if (countries.length < 1) {
      getAllCountries().then((results) => setCountries(results));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="dashboard">
      <div className="dashboard__search-controls">
        <SearchForm />
        <RegionFilter />
      </div>
      <div className="dashboard__results">
        {!countries.length && (
          <div className="dashboard__result-item">No Results</div>
        )}
        {countries.map((country) => (
          <Link
            to={`/country/${country.alpha3Code}`}
            className="dashboard__result-item"
            key={country.alpha3Code}
          >
            <CountryCard country={country} />
          </Link>
        ))}
      </div>
    </section>
  );
};
