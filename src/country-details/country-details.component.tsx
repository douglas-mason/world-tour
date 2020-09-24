import React, { useEffect, useState } from 'react';
import './country-details.scss';
import { useHistory, useParams } from 'react-router';
import { TextField } from '../_shared/components/text-field/text-field.component';
import { getCountryByCode } from '../_shared/countries-api.services';
import { Link } from 'react-router-dom';
import { useTheme } from '../_shared/hooks/useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CountryDetails = () => {
  const [country, setCountry] = useState<Country>();
  const { code } = useParams<{ code: string }>();
  const { goBack } = useHistory();
  const theme = useTheme();
  useEffect(() => {
    if (!code) {
      return;
    }
    getCountryByCode(code).then((results) => setCountry(results));
  }, [code]);
  if (!country) {
    return null;
  }
  return (
    <section className="country-details">
      <button
        onClick={goBack}
        className={`country-details__back-button country-details__button-${theme.name}`}
      >
        <FontAwesomeIcon icon="arrow-left"></FontAwesomeIcon> Back
      </button>
      <div className="country-details__main">
        <div>
          <figure className="country-details__flag">
            <img alt={`Flag of ${country.name}`} src={country.flag}></img>
          </figure>
        </div>
        <div className="country-details__container">
          <h2>{country.name}</h2>
          <div className="country-details__fields">
            <div>
              <TextField label="Native Name" value={country.nativeName} />
              <TextField
                label="Population"
                value={new Intl.NumberFormat().format(country.population)}
              />
              <TextField label="Region" value={country.region} />
              <TextField label="Sub Region" value={country.subregion} />
              <TextField label="Capital" value={country.capital} />
            </div>
            <div>
              <TextField
                label="Top Level Domain"
                value={country.topLevelDomain.join(', ')}
              />
              <TextField
                label="Currencies"
                value={country.currencies
                  .map((currency) => currency.name)
                  .join(', ')}
              />
              <TextField
                label="Languages"
                value={country.languages
                  .map((language) => language.name)
                  .join(', ')}
              />
            </div>
          </div>
          {!!(country.borders && country.borders.length) && (
            <div className="country-details__borders">
              <span>Border Countries: </span>
              {country.borders.map((border) => (
                <Link
                  to={`/country/${border}`}
                  className={`country-details__button-${theme.name}`}
                >
                  {border}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
