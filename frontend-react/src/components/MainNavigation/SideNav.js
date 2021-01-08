import React from 'react'
import Backdrop from '../../shared/Backdrop/Backdrop'
import Logo from '../../shared/Logo/Logo'
import NavLinks from './NavLinks'

import "./SideNav.css"

function SideNav(props) {
    return (
        <>
            <Backdrop onClose={props.onClose} />

            <div className="sideMenu card">
                <div className="headerSideMenu">
                    <img src={props.userPhoto} alt="Foto do usuario" />
                    <p>{props.userName}</p>
                </div>
                <hr />

                <Logo bold size="25" padding="20" />


                <NavLinks mobile admin={true} />

                <button onClick={props.logout} className="botaoClose Logout">Logout</button>

            </div>
        </>
    )
}

export default SideNav;
