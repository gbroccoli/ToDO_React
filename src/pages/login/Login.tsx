import { useState } from "react"
import "./style.css"

const Login = () => {

    const [login, setLogin] = useState<string>("")
    const [passwd, setPasswd] = useState<string>("")
    const [rememberMe, setRememberMe] = useState<boolean>(false)


    return (
        <>
            <div className="full-container">
                
            </div>
        </>
    )

}

export default Login;