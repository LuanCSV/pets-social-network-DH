import React from 'react';

import CarouselLogin from '../../components/AuthComponents/CarouselLogin';
import FormLogin from '../../components/AuthComponents/FormLogin';
import Logo from '../../shared/Logo/Logo';

import './auth.css';

const AuthPage = () => {
    return (
        <>
            <header className="headerAuth"> 
                <Logo size={'30'}/> 
            </header>

            <main className="mainLogin">

                <CarouselLogin/>

                <div className="authComponent">
                    <h2>Login</h2>
                    <FormLogin/>
                </div>
            </main>

            <footer className="footerLogin">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </footer>
        </>
    )
}

export default AuthPage;
