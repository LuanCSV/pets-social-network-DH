import { useCallback, useState } from "react"


export const useAuth = () => {

    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [admin, setAdmin] = useState(null);

    const login = useCallback((userId, token, admin) => {
        setUserId(userId);
        setToken(token);
        setAdmin(admin);

        localStorage.setItem('userData',
            JSON.stringify({
                userId: userId,
                token: token,
                admin: admin
            })
        )
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setAdmin(null);

        localStorage.removeItem('userData');
    }, []);

    return { token, login, logout, userId, admin }
}