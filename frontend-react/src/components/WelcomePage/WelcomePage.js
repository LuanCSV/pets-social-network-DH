import React from 'react';

import './WelcomePage.css';
import Icon from '../../assets/icons/icon.png';

const WelcomeComponent = () => {
  return (
    <main className="mainSection">
      <div className="header">
            <h1>PetBook</h1> <img src={Icon} alt="Logo do Petbook"/>
            <p>Uma rede social para <br/> o seu pet.</p>
      </div>
      <div class="action">
            <a href="./pages/login.html"><button class="botaoLayout">Acesse</button></a>
      </div>
    </main>

  )
}

export default WelcomeComponent;