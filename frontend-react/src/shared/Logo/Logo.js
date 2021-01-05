import React from 'react';

import logo from './icon.png'
import './Logo.css';

const Logo = (props) => {
    return (
        <span className="logo" style={{ padding: props.padding + 'px'}}>
            {!props.icon && <h1 style={{ fontSize: props.size + 'px' }}>PetBook</h1> }
            <img src={logo} width={`${props.size}px`} height={`${props.size}px`} alt="Logo do Petbook" />
        </span>
    )

}

export default Logo;