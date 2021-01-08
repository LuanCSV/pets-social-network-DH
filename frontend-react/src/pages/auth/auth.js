import React, { useState } from 'react';

import CarouselLogin from '../../components/AuthComponents/CarouselLogin';
import FormLogin from '../../components/AuthComponents/FormLogin';
import FormRegister from '../../components/AuthComponents/FormRegister';
import Logo from '../../shared/Logo/Logo';

import './auth.css';

const AuthPage = () => {

    const [isLogin, setIsLogin] = useState(false);

    const toggleComponent = () => {
        setIsLogin(!isLogin);
    }

    return (
        <>
            <header className="headerAuth card">
                <Logo size='30' />
            </header>

            <main className="mainLogin">

                <CarouselLogin />

                <div className="authComponent">
                    <button  className="toggleBotao botaoSecondary card" onClick={toggleComponent}>
                        {!isLogin? `Acesse ja` : `Criar conta`}
                    </button>

                    {isLogin? <h2>Conecte-se</h2> : <h2>Crie sua conta</h2>}
                    {isLogin? <FormLogin/> : <FormRegister />}
                    
                </div>
            </main>

            <footer className="footerLogin card">
                <ul>
                    <span>Sobre</span>
                    <span>Ajuda</span>
                    <span>Termos</span>
                    <span>Contato</span>
                    <div className="footerCopyright">
                        <small>© 2020 PetBook</small>
                    </div>
                </ul>
            </footer>
        </>
    )
}

export default AuthPage;
