import React from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
    icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick, icon, type }) => (
    <button type={type} onClick={onClick} className={`flex rounded-md font-semibold transition-colors duration-300 ease-linear bg-light-green text-normal-text ` + className}>
        {icon && <span>{icon}</span>}
        {children}
    </button>
);

export default Button;
