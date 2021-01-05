
import './MainNavigation.css'

import React from 'react'
import Logo from '../../shared/Logo/Logo'

function MainNavigation() {

    let menu;
    if (true) {
        menu = (
            <>
                <Logo icon size="40" padding="0" />

                <div className="currentPage">
                    Pagina atual
                </div>

                <div className="imageUser">
                    <img src="https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png" alt="" />
                </div>
            </>
        )
    } else {
        menu = (
            <>
                <Logo size="40" padding="0" />

                <div className="currentPage">
                    Pagina atual
                </div>

                <div className="imageUser">
                    <img src="https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png" alt="" />
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
