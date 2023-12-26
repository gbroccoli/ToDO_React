import { useState } from "react"
import Button from "../../components/button/Buttom"
import "./style.css"
import $api from "../../server/server"

interface Users {
    login: string,
    password: string,
    rememberMe: boolean
}

const Login = () => {

    const [login, setLogin] = useState<string>("")
    const [passwd, setPasswd] = useState<string>("")
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    
    /* errors */
    const [msg, setMsg] = useState<object>({})

    /* logical */
    const auth = () => {
        
        if (!login) {
            setMsg({error: "Логин не должен быть пустым!"})
        }

        $api.get("/auth/login", {data: {login: login, passwd: passwd, rememberMe: rememberMe}})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }


    /* main */
    return (
        <>
            <div className="flex items-center">
                <div className="w-full img"></div>
                <div className="block-login w-[40%] h-full flex flex-col bg-white">

                    <form className="flex flex-col p-4">

                        <label htmlFor="login" className="mb-4 flex flex-col">
                            Login
                            <input className="border border-[2px] rounded-md px-2 py-1" type="text" id="login" value={login} onChange={(e)=>setLogin(e.target.value)} />
                        </label>

                        <label htmlFor="password" className="flex flex-col">
                            Password
                            <input className="border border-[2px] rounded-md px-2 py-1" type="password"  id="password" value={passwd} onChange={(e)=>setPasswd(e.target.value)}/>
                        </label>

                        <label htmlFor="remember">
                            <input type="checkbox" id="remember" checked={rememberMe} onChange={(e)=>setRememberMe(e.target.checked)} className="mr-1 "/>
                            Запомниить меня на 30 дней
                        </label>

                        <Button types="button" text="Sing in" style="w-[70px] bg-blue-600 text-white rounded-md px-2 py-1 mt-4" onClicks={auth}/>

                    </form>

                </div>
            </div>
        </>
    )

}

export default Login;