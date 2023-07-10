import { useState } from 'react';
import countries from 'i18n-iso-countries';
import ruLocale from 'i18n-iso-countries/langs/ru.json';

function Countries() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const selectCountryHandler = (value) => setSelectedCountry(value);

  countries.registerLocale(ruLocale);

  const countryObj = countries.getNames('ru', { select: 'official' });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key
    };
  });

  return (
    <div className='w-full border-solid border-2 p-4 rounded-2xl bg-transparent mt-4 outline-none'>
      <select
        required
        className='w-full border-solid bg-transparent outline-none border-r-8 border-transparent overflow-auto relative'
        value={selectedCountry}
        onChange={(e) => selectCountryHandler(e.target.value)}
      >
        {/* сделать пропсы */}
        <option value='' disabled selected hidden className=''>
          Страна
        </option>
        {!!countryArr?.length &&
          countryArr.map(({ label, value }) => (
            <option key={value} value={value} className=''>
              {label}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Countries;
