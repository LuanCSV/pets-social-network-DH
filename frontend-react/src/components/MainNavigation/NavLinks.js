import React from 'react'
import { Link } from 'react-router-dom';

import './NavLinks.css';

function NavLinks(props) {
    return (
        <nav className={!props.mobile ? `navLinksGroup` : `sideMenuLinkGroup`}>
            
            <Link to={props.userProfile ? `/profile/${props.userProfile}` : `/profile/not-found`} className="navLinks">
                Meu Perfil
            </Link>
            <Link to="/feed" className="navLinks">
                Feed
            </Link>
            <Link to="/explorar" className="navLinks">
                Explorar
            </Link>
            <Link to="/termos-de-uso" className="navLinks">
                Termos de uso
            </Link>
            {props.admin && 
                <Link to="/admin" className="navLinks">
                    Admin*
                </Link>
            }
        </nav>
    )
}

export default NavLinks
