import React from 'react';
import { Link } from 'react-router-dom';

import './WelcomePage.css';
import Icon from '../../assets/icons/icon.png';

const WelcomeComponent = () => {
  return (
    <div className='bodyWelcome'>
      <main className="mainSection">
        <div className="header">
          <h1>PetBook</h1> <img src={Icon} alt="Logo do Petbook" />
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