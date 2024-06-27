import { useEffect, useState } from 'react';
import { CountriesType } from '../type/type';
import { countryApi } from '../api/api';
import { v4 as uuidv4 } from 'uuid';
import CountryCard from './CountryCard';

const CountryList = () => {
  const [countriesList, setCountriesList] = useState<CountriesType[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<CountriesType[]>(
    []
  );

  useEffect(() => {
    const getCountries = async () => {
      const getCountryData = await countryApi();
      setCountriesList(getCountryData);
    };
    getCountries();
  }, []);

  const selectedCountry = (country: CountriesType) => {
    setSelectedCountries((prev) => {
      if (prev.find((c) => c.name.common === country.name.common)) {
        return prev.filter((c) => c.name.common !== country.name.common);
      } else {
        return [...prev, country];
      }
    });
  };

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Favorite Countries
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5">
          {selectedCountries.map((country: CountriesType) => {
            return (
              <CountryCard
                key={uuidv4()}
                country={country}
                selectedCountry={selectedCountry}
              />
            );
          })}
        </div>

        <div>
          <h1 className="text-3xl font-bold text-center mb-8">Countries</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {countriesList.map((country: CountriesType) => {
              return (
                <CountryCard
                  key={uuidv4()}
                  country={country}
                  selectedCountry={selectedCountry}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryList;
