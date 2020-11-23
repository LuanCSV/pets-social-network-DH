import React from 'react';
import Input from '../../shared/FormElements/Input';

const FormLogin = () => {

    const loginSubmitHandler = () => {
        console.log('Ok');
    }

    return (
        <form onSubmit={loginSubmitHandler}>
            <Input type="email" label="E-mail" errorMsg="Digite um email valido"/>
            <Input type="password" label="Senha" errorMsg="Digite uma senha valida"/>
        </form>
    )

}

export default FormLogin;