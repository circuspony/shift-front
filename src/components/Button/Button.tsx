import React from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, icon }) => (
  <button
    className='py-4 px-8 border-solid border-2 rounded-2xl text-lg cursor-pointer ease-in hover:bg-sky-200'
    onClick={onClick}
  >
    {icon && <span>{icon}</span>}
    {children}
  </button>
);

export default Button;
