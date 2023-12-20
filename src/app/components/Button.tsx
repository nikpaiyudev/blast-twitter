import { DOMAttributes, FC, MouseEventHandler } from "react";

interface ButtonProps {
    name: string;
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = ({ name, onClick }) => {
    return (<button onClick={onClick} className="disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md font-bold [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] bg-yellow-300 group-focus-visible:bg-white hover:bg-white text-black">{name}</button>);
};

export default Button;