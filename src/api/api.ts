import axios from 'axios';
import { CountriesType } from '../type/type';

export const countryApi = async (): Promise<CountriesType[]> => {
  const response = await axios.get<CountriesType[]>(
    'https://restcountries.com/v3.1/all'
  );
  return response.data;
};
