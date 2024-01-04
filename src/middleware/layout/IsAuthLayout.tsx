import { useEffect, FC } from "react"
import { useNavigate } from "react-router-dom"
import { isAuth } from "@/middleware/isAuth"
import { Outlet } from "react-router-dom"

const IsAuthLayout: FC = () => {

    const navigate = useNavigate()

    const checkAuth = () => {

        const user = async () => {
            const auth = await isAuth()

            if (!auth) {
                navigate("/")
            }
        }
        user()
    }

    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <>
            <Outlet />
        </>
    )
}

export default IsAuthLayout;