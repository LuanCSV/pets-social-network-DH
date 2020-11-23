import React from 'react';
import { Link } from 'react-router-dom';

import './WelcomePage.css';
import Logo from '../Logo/Logo';

const WelcomeComponent = () => {
  return (
    <div className='bodyWelcome'>
      <main className="mainSection">
        <div className="header">
          <Logo size="45"/>
          <p>Uma rede social para <br /> o seu pet.</p>
        </div>
        <div class="action">
          <Link to="/auth"><button class="botaoLayout">Acesse</button></Link>
        </div>
      </main>
    </div>

  )
}

export default WelcomeComponent;