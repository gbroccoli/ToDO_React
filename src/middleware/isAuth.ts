import $api from "@/server/server"

export const isAuth = () => {

    const auth = $api.get("/auth/authorization")
        .then((res) => {
            return res.data.authorization
        })

    return auth
}

