import { useCallback, useEffect, useState } from "react"


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

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));

        if (storedData && storedData.token) {
            login(storedData.userId, storedData.token, storedData.admin);
        }
    }, [login]);

    return { token, login, logout, userId, admin }
}