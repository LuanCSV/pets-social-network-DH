import React from 'react';
import Input from '../../shared/FormElements/Input';

import './FormRegister.css';

const FormRegister = () => {

    const registerSubmitHandler = (event) => {
        event.preventDefault();
        console.dir(event.target);
    }

    return (
        <form onSubmit={registerSubmitHandler} className="formRegister">
            <Input
                type="text"
                label="Nome"
                errorMsg="Insira seu nome"
            />
            <Input
                type="email"
                label="E-mail"
                errorMsg="Insira um email valido"
            />
            <Input
                type="password"
                label="Senha"
                errorMsg="Insira uma senha valida"
            />
            <Input
                type="password"
                label="Confirmar senha"
                errorMsg="As senhas devem ser iguais"
            />

            <div className="actionRegister">
                <span className="checkboxSpan">
                    <input type="checkbox" class="checkboxInput" id="checkboxTermos" required />
                    <label className="" htmlFor="checkboxTermos">
                        Concordo com os <button className="botaoLink">Termos de Uso</button>
                    </label>
                </span>
                <button type="submit" className="botaoLayout">Criar conta</button> <br />
                <hr />
                <button className="botaoLink">Ja tem uma conta?</button>
            </div>
        </form>
    )

}

export default FormRegister;