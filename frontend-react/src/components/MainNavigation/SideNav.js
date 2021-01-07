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

                <Logo size="25" padding="10" />


                <NavLinks mobile admin={true} />

                <button className="botaoClose Logout">Logout</button>

            </div>
        </>
    )
}

export default SideNav;
