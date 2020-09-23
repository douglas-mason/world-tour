import React from 'react';
import { SearchForm } from './search-form.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

export default {
  title: 'Search',
};

export const Form = () => {
  return <SearchForm />;
};
