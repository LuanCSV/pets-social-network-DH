import React, { useState } from 'react';
import Input from '../../shared/FormElements/Input';

import './FormLogin.css';

const FormLogin = () => {

    const inputsLogin = [
        {
            name: "Email",
            type: "email",
            label: "E-mail",
            errorMsg: "E-mail incorreto ou não cadastrado",
            required: true
        },
        {
            name: "Senha",
            type: "password",
            label: "Senha",
            errorMsg: "Senha incorreta",
            required: true
        }
    ]

    const [formLoginState, setFormLoginState] = useState({});

    const loginInputHandler = (e) => {
        let lastInputLogin = formLoginState,
            { name: inputName, value: inputValue } = e.target;

        if (inputValue.length > 0) {
            lastInputLogin[inputName] = inputValue;
            setFormLoginState(lastInputLogin);
        } else {
            delete lastInputLogin[inputName];
            setFormLoginState(lastInputLogin);
        }
    }

    const loginSubmitHandler = async (event) => {
        event.preventDefault();
        console.table(formLoginState);
        let valuesFormCopy = formLoginState;

        let body = JSON.stringify({
            email: valuesFormCopy.Email,
            password: valuesFormCopy.Senha
        })

        try {
            const response = await fetch(
                `http://localhost:5000/users/login`,
                {
                    method: 'POST',
                    body: body,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            const responseData = await response.json()
            alert(responseData.error || responseData.message)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={loginSubmitHandler} className="formLogin">

            {inputsLogin.map((input) => {
                const { name, type, label, required, errorMsg } = input;
                return (
                    <Input
                        key={name}
                        name={name}
                        type={type}
                        label={label}
                        errorMsg={errorMsg}
                        required={required}
                        valid={true}
                        onBlurValue={loginInputHandler}
                    />
                )
            })}

            <div className="actionLogin">
                <button className="botaoLink">Esqueceu a senha?</button> <br />
                <button type="submit" className="card botaoLayout">Entrar</button> <br />
                <hr />
                {/* <button className="botaoLink">Ainda nao tem uma conta?</button> */}
            </div>
        </form>
    )

}

export default FormLogin;