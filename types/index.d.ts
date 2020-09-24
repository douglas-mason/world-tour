interface Country {
  name: string;
  population: number;
  capital: string;
  flag: string;
  region: string;
  subregion: string;
  borders: string[];
  nativeName: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Language[];
  alpha3Code: string;
}

type Currency = {
  code: string;
  name: string;
  symbol: string;
};

type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};
