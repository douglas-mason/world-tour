import './country-card.styles.scss';
import React from 'react';
import { TextField } from '../text-field/text-field.component';
import { useTheme } from '../../hooks/useTheme';

interface Props {
  country: Country;
}

export const CountryCard: React.FC<Props> = ({ country }) => {
  const theme = useTheme();
  return (
    <section className={`country-card country-card__${theme.name}`}>
      <div className="country-card__flag">
        <img alt={`Flag of ${country.name}`} src={country.flag} width="245" />
      </div>
      <div className="country-card__info">
        <Header text={country.name}></Header>
        <TextField
          label="Population"
          value={new Intl.NumberFormat().format(country.population)}
        ></TextField>
        <TextField label="Region" value={country.region}></TextField>
        <TextField label="Capital" value={country.capital}></TextField>
      </div>
    </section>
  );
};

const Header: React.FC<{ text: string }> = ({ text }) => {
  return <h3>{text}</h3>;
};
