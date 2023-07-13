import { useState, Dispatch, SetStateAction } from 'react';
import Arrow from '../svg/downarrow.svg';

interface SelectOption {
  label: string;
  value: string;
}

const CustomSelect = ({
  option,
  setOption,
  selectArray
}: {
  option: SelectOption;
  setOption: Dispatch<SetStateAction<SelectOption>>;
  selectArray: SelectOption[];
}) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  return (
    <>
      <div className='w-full relative cursor-pointer border-solid border-2 rounded-2xl bg-transparent mt-4 outline-none'>
        <div className='w-full'>
          <div
            onClick={() => setDropDownOpen(!dropDownOpen)}
            className='w-full p-4 grid grid-cols-2'
          >
            {option.label}
            <div className='flex items-center justify-end'>
              <img src={Arrow} alt='Arrow' className='w-4 h-4 top-0 left-0' />
            </div>
          </div>

          <div
            className={`dropdown-scroll absolute border-solid border-2 rounded-lg top-14 max-h-48 overflow-scroll w-full py-4 px-2 left-0 overflow-x-hidden bg-white z-50 ${dropDownOpen ? 'flex flex-col' : 'hidden'
              }`}
          >
            {!!selectArray?.length &&
              selectArray.map((selectObject, i) => (
                <div
                  onClick={() => {
                    setOption(selectObject);
                    setDropDownOpen(false);
                  }}
                  key={i}
                  className='cursor-pointer py-1 px-2 transition-all duration-300 rounded-md hover:bg-gray-200'
                >
                  {selectObject.label}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomSelect;
