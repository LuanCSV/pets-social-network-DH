import React from 'react';
import './Backdrop.css';

function Backdrop(props) {
    return (
        <div className="backdrop" onClick={props.onClose}></div>
    )
}

export default Backdrop;
