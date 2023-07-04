import { MouseEventHandler } from 'react';

const ButtonWrapper = ({ children, addonClass = "", type = "button", onClick = () => { } }: {
    children: React.ReactNode,
    addonClass?: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: MouseEventHandler<HTMLButtonElement>
}) => {
    return (
        <button type={type} onClick={onClick} className={`flex rounded-md font-semibold transition-colors duration-300 ease-linear bg-button-green text-normal-green-text ` + addonClass}>
            {children}
        </button>
    )
}

export default ButtonWrapper 