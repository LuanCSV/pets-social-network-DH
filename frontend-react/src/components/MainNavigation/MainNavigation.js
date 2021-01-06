
import './MainNavigation.css'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../shared/Logo/Logo'

const getWidthWindow = () => window.innerWidth;

function MainNavigation() {

    const [windowWidth, setWindowWidth] = useState(getWidthWindow);

    useEffect(() => {
        const handleWidth = () => setWindowWidth(getWidthWindow)
        window.addEventListener('resize', handleWidth);
        return () => window.removeEventListener('resize', handleWidth);
    }, []);

    let menu;
    if (windowWidth < 768) {
        menu = (
            <>
                <Logo icon size="40" padding="0" />

                <div className="currentPage">
                    Pagina atual
                </div>

                <div className="userMenuBox">
                    <button className="buttonUser">
                        <img src="https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png" alt="" />
                    </button>
                </div>
            </>
        )
    } else {
        menu = (
            <>
                <Logo size="25" padding="0" />

                <div className="navLinksGroup">
                    <Link to="/profile/123" className="navLinks">
                        Admin
                    </Link>
                    <Link to="/admin" className="navLinks">
                        Feed
                    </Link>
                    <Link to="/admin" className="navLinks">
                        Explorar
                    </Link>
                </div>

                <div className="userMenuBox">
                    <button className="buttonUser desktop">
                        <p>Luan Carlos da Silva Vasconcelos</p>
                        <img src="https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png" alt="" />
                    </button>
                </div>
            </>
        )
    }

    return (
        <header className="mainHeader">
            {menu}
        </header>
    )
}

export default MainNavigation
