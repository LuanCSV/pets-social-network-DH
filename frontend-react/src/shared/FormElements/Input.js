import React from 'react';

import './Input.css';

const Input = (props) => {

    // const [inputStateValid, setInputStateValid] = useState(false);

    const {name, label, type, onBlurValue, errorMsg, required, valid} = props;

    // const changeHandler = (event) => {
    //     !event.target.value? setInputStateValid(true) : setInputStateValid(false);
    // }

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label> 
            <input
                name={name}
                className={`inputLayout card ${!valid ? "inputLayout-invalid" : ""}`}
                id={name}
                type={type}
                onBlur={onBlurValue}
                required={required}
            />
            {!valid?  <small>{errorMsg}</small> : null}
            
        </div>
    )
}

export default Input