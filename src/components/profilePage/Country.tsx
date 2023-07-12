import { useState } from 'react';
import countries from 'i18n-iso-countries';
import ruLocale from 'i18n-iso-countries/langs/ru.json';
import CustomSelect from '../inputs/select';

function Countries() {
  const [selectedCountry, setSelectedCountry] = useState({ label: 'Страна', value: '' });

  // const selectCountryHandler = (value) => setSelectedCountry(value);

  countries.registerLocale(ruLocale);

  const countryObj = countries.getNames('ru', { select: 'official' });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key
    };
  });

  return (
    <CustomSelect
      option={selectedCountry}
      setOption={setSelectedCountry}
      selectArray={countryArr}
    />
  );
}

export default Countries;
