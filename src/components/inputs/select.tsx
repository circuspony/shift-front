import { useState, Dispatch, SetStateAction } from 'react';
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
          <div onClick={() => setDropDownOpen(!dropDownOpen)} className='w-full p-4'>
            {option.label}
          </div>
          <div
            className={`dropdown-scroll absolute border-solid border-2 rounded-lg top-14 h-48 overflow-scroll w-full py-4 px-2 left-0 overflow-x-hidden bg-white z-50 ${
              dropDownOpen ? 'flex flex-col' : 'hidden'
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
