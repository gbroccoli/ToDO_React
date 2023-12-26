import { FC } from "react"

type bnt_type = "button" | "submit" | "reset"

interface BntProps {
    types: bnt_type,
    text?: string,
    onClicks?: () => void,
    style?: string 

}


const Button: FC<BntProps> = ({types, text, onClicks, style}) => {    

    return (
        <>
            <button type={types} onClick={onClicks} className={style}>{text}</button>
        </>
    )
}


export default Button