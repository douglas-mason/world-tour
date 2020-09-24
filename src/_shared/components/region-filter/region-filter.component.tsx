import React, { SyntheticEvent } from 'react';
import { getCountriesByRegion } from '../../countries-api.services';
import { useCountryContext } from '../../hooks/useCountryContext';
import { useTheme } from '../../hooks/useTheme';
import './region-filter.styles.scss';

export const RegionFilter: React.FC = () => {
  const { setCountries } = useCountryContext();
  const theme = useTheme();
  const onSelect = async (e: SyntheticEvent<HTMLSelectElement>) => {
    const selectedRegion = e.currentTarget.value;
    if (!selectedRegion) {
      return;
    }
    const results = await getCountriesByRegion(selectedRegion);
    setCountries(results);
  };
  return (
    <select
      className={`region-filter region-filter__${theme.name}`}
      onChange={onSelect}
    >
      <option selected disabled>
        Filter by Region
      </option>
      {REGIONS.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
