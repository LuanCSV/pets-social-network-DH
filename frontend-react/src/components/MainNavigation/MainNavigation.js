import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../shared/context/AuthContext';

import Logo from '../../shared/Logo/Logo'

import './MainNavigation.css'
import NavLinks from './NavLinks';
import SideNav from './SideNav';

const getWidthWindow = () => window.innerWidth;

function MainNavigation() {

    const auth = useContext(AuthContext);
    const [windowWidth, setWindowWidth] = useState(getWidthWindow);
    const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const user = {
        userName: "Luan Carlos Silva Vasconcelos",
        userPhoto: "https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png",
        userAdmin: auth.admin
    }

    useEffect(() => {
        const handleWidth = () => {
            setWindowWidth(getWidthWindow);
            if (windowWidth < 768) {
                setSideMenuIsOpen(false);
            } else {
                setMenuIsOpen(false);
            }

        }

        window.addEventListener('resize', handleWidth);
        return () => window.removeEventListener('resize', handleWidth);
    }, [windowWidth]);

    let navFormat;
    if (windowWidth < 768) {
        // setSideMenuIsOpen(false);
        navFormat = (
            <>
                <Logo icon size="35" padding="0" />

                <div className="currentPage">
                    Pagina atual
                </div>

                <div className="userMenuBox">
                    <button className="buttonUser" onClick={() => setSideMenuIsOpen(true)}>
                        <img src="https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1" alt="" />
                    </button>
                </div>
            </>
        )
    } else {
        navFormat = (
            <>
                <Logo size="25" padding="0" />

                <NavLinks admin={user.userAdmin} />

                <div className="userMenuBox">
                    <button onClick={() => setMenuIsOpen(!menuIsOpen)} className="buttonUser desktop">
                        <p>{user.userName}</p>
                        <img src={user.userPhoto} alt="Foto do usuario logado" />
                    </button>
                </div>
            </>
        )
    }

    return (
        <>
            <header className="mainHeader card">
                {navFormat}
            </header>
            {windowWidth < 768 && sideMenuIsOpen &&

                <SideNav
                    onClose={() => setSideMenuIsOpen(false)}
                    userName={user.userName}
                    userPhoto={user.userPhoto}
                    admin={user.userAdmin}
                    logout={() => auth.logout()}
                />

            }
            {windowWidth > 768 && menuIsOpen &&
                <div className="menuDesktop">
                    <div className="headerSideMenu">
                        <img src={user.userPhoto} alt="Foto do usuario" />
                        <p>{user.userName}</p>
                    </div>
                    <hr />
                    <Logo bold size="17"></Logo>
                    <button
                        onClick={() => auth.logout()}
                        className="botaoClose Logout">Logout</button>
                </div>
            }
        </>
    )
}

export default MainNavigation
