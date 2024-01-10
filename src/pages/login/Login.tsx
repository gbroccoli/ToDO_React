import { useState } from "react"
import Button from "@/components/button/Buttom"
import "./style.css"
import $api from "@/server/server"
import Notifications from "@/components/notifications/Notifications"

interface msg {
	error?: string,
	success?: string
}

interface user_json {
	login: string,
	password: string,
	remember: boolean
}

const Login = () => {

	const [login, setLogin] = useState<string>("")
	const [passwd, setPasswd] = useState<string>("")
	const [rememberMe, setRememberMe] = useState<boolean>(false)
	const [errors, setErrors] = useState<boolean>(false)
	const [errorMsg, setErrorMsg] = useState<string>("")
	const [success, setSuccess] = useState<boolean>(false)

	const isError = () => {
		setErrors(false)
	}

	const isSuccess = () => {
		setSuccess(false)
	}

	/* errors */
	const [msg, setMsg] = useState<msg>({})

	/* logical */
	const auth = () => {

		if (!login) {
			setMsg({ error: "Логин не должен быть пустым!" })
			return
		}

		if (!passwd) {
			setMsg({ error: "Пароль не должен быть пустым!" })
			return
		}

		const user: user_json = {
			login: login,
			password: passwd,
			remember: rememberMe,
		}

		$api.post("/auth/login", user, {
			headers: {
				'Content-Type': 'application/json',
			},
			withCredentials: true
		})
			.then(res => {
				const {data} = res

				if (data.success === "Logged in successfully") {

					setSuccess(true)

					window.location.replace("/dash")
				}
			})
			.catch((err) => {
				setErrorMsg(err.response.data.error)
				setErrors(true)
			})
	}


	/* main */
	return (
		<>
			<div className="flex items-center">
				<div className="w-full img"></div>
				<div className="block-login w-[40%] p-6 h-full flex flex-col bg-white">
					<form className="flex flex-col p-4">
						{msg.error ? msg.error : ""}
						<label htmlFor="login" className="mb-4 flex flex-col">
							<span className="1 font-medium mb-[0.25rem]">Login</span>
							<input className="border border-[2px] rounded-md px-2 py-1" type="text" id="login" value={login} onChange={(e) => setLogin(e.target.value)} />
						</label>
						<label htmlFor="password" className="flex flex-col">
							<span className="1 font-medium mb-[0.25rem]">Password</span>
							<input className="border border-[2px] rounded-md px-2 py-1" type="password" id="password" value={passwd} onChange={(e) => setPasswd(e.target.value)} />
						</label>
						<label htmlFor="remember" className="mt-2">
							<input type="checkbox" id="remember" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="mr-1 " />
							Запомниить меня на 30 дней
						</label>
						<Button types="button" text="Sing in" style="btn-sing-in w-[70px] bg-blue-600 text-white rounded-md px-2 py-1 mt-4" onClicks={auth}/>

						{success ? <Notifications type="success" text="Авторизация прошла успешно" title="Успешно!" show={success} func={isSuccess} /> : null}
						{errors ? <Notifications type="error" text={errorMsg} title="Ошибка!" show={errors} func={isError} /> : null}
					</form>
				</div>
			</div>
		</>
	)
}

export default Login;