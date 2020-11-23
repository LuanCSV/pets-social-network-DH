import React from 'react';
import Input from '../../shared/FormElements/Input';

import './FormLogin.css';

const FormLogin = () => {

    const loginSubmitHandler = (event) => {
        event.preventDefault();
        console.log(event.target);
    }

    return (
        <form onSubmit={loginSubmitHandler} className="formLogin">
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
            <div className="actionLogin">
                <button className="botaoLink">Esqueceu a senha?</button> <br/>
                <button type="submit" className="botaoLayout">Entrar</button> <br/>
                <hr/>
                {/* <button className="botaoLink">Ainda nao tem uma conta?</button> */}
            </div>
        </form>
    )

}

export default FormLogin;