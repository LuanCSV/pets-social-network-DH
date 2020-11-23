import React from 'react';

import './Input.css';

const Input = (props) => {

    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                className="inputLayout" 
                id={props.id} 
                type={props.type} 
                required
            />
            <small>{props.errorMsg}</small>
        </div>
    )
}

export default Input