import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { SyntheticEvent, useState } from 'react';
import { searchCountries } from '../../countries-api.services';
import { useCountryContext } from '../../hooks/useCountryContext';
import { useTheme } from '../../hooks/useTheme';
import './search-form.styles.scss';

export const SearchForm: React.FC = () => {
  const [query, setQuery] = useState<string | undefined>('');
  const { setCountries } = useCountryContext();
  const theme = useTheme();
  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!query) {
      return;
    }
    const results = await searchCountries(query);
    setCountries(results);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        <div className={`search-form search-form__${theme.name}`}>
          <FontAwesomeIcon icon="search" style={{ cursor: 'pointer' }} />
          <input
            placeholder="Search for a country..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </label>
    </form>
  );
};
