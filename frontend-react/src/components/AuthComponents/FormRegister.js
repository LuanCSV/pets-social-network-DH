import React, { useEffect, useState } from 'react';
import Input from '../../shared/FormElements/Input';

import './FormRegister.css';

const FormRegister = () => {
    const inputsRegister = [
        {
            name: "Nome",
            type: "text",
            label: "Nome completo",
            errorMsg: "Insira um nome",
            required: true,
            validator: true
        },
        {
            name: "Email",
            type: "email",
            label: "E-mail",
            errorMsg: "Insira um e-mail valido",
            required: true,
            validator: true
        },
        {
            name: "Senha",
            type: "password",
            label: "Senha",
            errorMsg: "Sua senha deve conter 8+ digitos",
            required: true,
            validator: true
        },
        {
            name: "ConfirmSenha",
            type: "password",
            label: "Confirmar Senha",
            errorMsg: "As senhas devem coincidir",
            required: true,
            validator: true
        }
    ];

    const [formRegisterState, setFormRegisterState] = useState({});
    // Validade dos inputs para estilo
    const [validInputState, setvalidInputState] = useState({
        Nome: true,
        Email: true,
        Senha: true,
        ConfirmSenha: true
    });

    // Validacao dos inputs
    const validation = (name, value, formValue) => {
        let lastInputValid = validInputState;
        switch (name) {
            case "Nome":
                value.length <= 0 ?
                    lastInputValid[name] = false : lastInputValid[name] = true;
                break;
            case "Email":
                value.length <= 0 ?
                    lastInputValid[name] = false : lastInputValid[name] = true;
                break;
            case "Senha":
                value.length < 8 ?
                    lastInputValid[name] = false : lastInputValid[name] = true;
                break;
            case "ConfirmSenha":
                formValue["Senha"] !== formValue["ConfirmSenha"] ?
                    lastInputValid[name] = false : lastInputValid[name] = true;
                break;
            default:
                lastInputValid[name] = true;
                break;
        }
        // Retorna o objeto copiado dos inputs depois das alteracoes do switch
        return lastInputValid;
    }

    // Atualizacao dos inputs
    const inputHandlerUpdate = (e) => {
        let lastInputsValues = formRegisterState,
            { name: inputName, value: inputValue } = e.target;

        if (inputValue.length > 0) {
            lastInputsValues[inputName] = inputValue;
            setFormRegisterState(lastInputsValues);
        } else {
            delete lastInputsValues[inputName];
            setFormRegisterState(lastInputsValues);
        }

        // Atribue o valor retornado a uma variavel
        const inputsValidated = validation(inputName, inputValue, formRegisterState);

        // Seta as validacoes de cada input no objeto original
        setvalidInputState({
                Nome: inputsValidated["Nome"],
                Email: inputsValidated["Email"],
                Senha: inputsValidated["Senha"],
                ConfirmSenha: inputsValidated["ConfirmSenha"]
            }
        )

    }

    // Submit do Form
    const registerSubmitHandler = (event) => {
        event.preventDefault();
        console.table(formRegisterState);
        console.table(validInputState);
    }

    return (
        <form onSubmit={registerSubmitHandler} method="POST" className="formRegister">
            {inputsRegister.map((input) => {
                const { name, type, label, required, errorMsg } = input;
                return (
                    <Input
                        key={name}
                        name={name}
                        type={type}
                        label={label}
                        errorMsg={errorMsg}
                        required={required}
                        // Pega o item do objeto atraves do name
                        valid={validInputState[name]}
                        onBlurValue={inputHandlerUpdate}
                    />
                )
            })}

            <div className="actionRegister">
                <span className="checkboxSpan">
                    <input type="checkbox" class="checkboxInput" id="checkboxTermos" required />
                    <label className="" htmlFor="checkboxTermos">
                        Concordo com os <button className="botaoLink">Termos de Uso</button>
                    </label>
                </span>
                <button type="submit" className="card botaoLayout">Criar conta</button> <br />
                <hr />
                {/* <button className="botaoLink">Ja tem uma conta?</button> */}
            </div>
        </form>
    )

}

export default FormRegister;