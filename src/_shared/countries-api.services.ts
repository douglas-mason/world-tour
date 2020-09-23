export const getAllCountries = async (): Promise<Country[]> => {
  return apiClient<Country[]>('/all');
};

export const getCountriesByRegion = async (
  region: string
): Promise<Country[]> => {
  return apiClient(`/regionalbloc/${region}`);
};

export const getCountryByCode = async (code: string): Promise<Country[]> => {
  return apiClient(`/alpha/${code}`);
};

export const searchCountries = async (query: string): Promise<Country[]> => {
  return apiClient(`/name/${query}`);
};

async function apiClient<T = any>(
  url: string,
  requestInit: RequestInit = {}
): Promise<T> {
  const BASE_URL = 'https://restcountries.eu/rest/v2';
  requestInit.mode = 'cors';

  return fetch(`${BASE_URL}${url}`, requestInit).then(async (response) => {
    if (!response.ok) {
      const responseText = await response.text();
      try {
        const json = JSON.parse(responseText);
        throw new Error(json.error);
      } catch (error) {
        console.error(error);
      } finally {
        // - api returns 404 for queries with no results
        // - for now, returning empty array will do
        return [];
      }
    }
    return response.json();
  });
}
