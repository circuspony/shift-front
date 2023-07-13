import { useEffect, useState } from 'react';
import CustomSelect from '../inputs/select';
import { projectCategories } from '../project/constants';

function Categories({ setCategory }: { setCategory: Function }) {
  const [selectedCategory, setSelectedCategory] = useState({ label: 'Категория', value: '' });
  useEffect(() => {
    setCategory(selectedCategory)
  }, [selectedCategory])
  return (
    <CustomSelect
      option={selectedCategory}
      setOption={setSelectedCategory}
      selectArray={projectCategories.slice(1)}
    />
  );
}

export default Categories;
