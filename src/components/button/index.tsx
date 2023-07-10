import React from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
    icon?: React.ReactNode;
    addonClass?: string
}

const Button: React.FC<ButtonProps> = ({ children, onClick, icon, type, addonClass = "" }) => (
    <button type={type} onClick={onClick} className={`flex rounded-md font-semibold transition-colors duration-300 ease-linear bg-light-green text-normal-text ` + addonClass}>
        {icon && <span>{icon}</span>}
        {children}
    </button>
);

export default Button;
