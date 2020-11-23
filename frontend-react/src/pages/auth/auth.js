import React from 'react';

import CarouselLogin from '../../components/AuthComponents/CarouselLogin';
import FormLogin from '../../components/AuthComponents/FormLogin';
import FormRegister from '../../components/AuthComponents/FormRegister';
import Logo from '../../shared/Logo/Logo';

import './auth.css';

const AuthPage = () => {
    return (
        <>
            <header className="headerAuth">
                <Logo size={'30'} />
            </header>

            <main className="mainLogin">

                <CarouselLogin />

                <div className="authComponent">
                    <h2>Login</h2>
                    {/* <FormLogin/> */}
                    <FormRegister />
                </div>
            </main>

            <footer className="footerLogin">
                <ul>
                    <a>Sobre</a>
                    <a>Ajuda</a>
                    <a>Termos</a>
                    <a>Contato</a>
                    <div class="footerCopyright">
                        <small>© 2020 PetBook</small>
                    </div>
                </ul>
            </footer>
        </>
    )
}

export default AuthPage;
