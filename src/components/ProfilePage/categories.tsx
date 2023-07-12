import { useState } from 'react';
import CustomSelect from '../inputs/select';
import categoriesList from './categorieslist';

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState({ label: 'Категория', value: '' });

  const categoryObj = categoriesList;

  const categoryArr = Object.entries(categoryObj).map(([key, value]) => {
    return {
      label: value,
      value: key
    };
  });

  return (
    <CustomSelect
      option={selectedCategory}
      setOption={setSelectedCategory}
      selectArray={categoryArr}
    />
  );
}

export default Categories;
