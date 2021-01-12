import { useCallback, useState } from "react"


export const useAuth = () => {

    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [admin, setAdmin] = useState(null);

    const login = () => {

    }
    const logout = () => {

    }

    return {token, login, logout, userId, admin}
}