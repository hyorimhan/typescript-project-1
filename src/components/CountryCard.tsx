import { CountriesType } from '../type/type';

interface CountriesProps {
  country: CountriesType;
  selectedCountry: (country: CountriesType) => void;
}

const CountryCard = ({ country, selectedCountry }: CountriesProps) => {
  return (
    <>
      <div
        className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform"
        onClick={() => selectedCountry(country)}
      >
        <img
          src={country.flags.png}
          alt="국기"
          className="w-20 h-auto mx-auto mb-4"
        />
        <div className="text-2xl font-bold">{country.name.common}</div>
        <div>{country.capital}</div>
      </div>
    </>
  );
};

export default CountryCard;
