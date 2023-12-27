import { FC, KeyboardEvent } from "react";

type BtnType = "button" | "submit" | "reset";

interface BtnProps {
    types: BtnType;
    text?: string;
    onClicks?: () => void;
    style?: string;
}

const Button: FC<BtnProps> = ({ types, text, onClicks, style }) => {

    return (
        <>
            <button
                type={types}
                onClick={onClicks}
                className={style}
            >
                {text}
            </button>
        </>
    );
};

export default Button;
