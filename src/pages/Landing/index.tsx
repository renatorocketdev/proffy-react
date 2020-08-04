import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/icons/study.svg';
import giveClassesIcon from '../../assets/icons/give-classes.svg';
import purpleHeart from '../../assets/icons/purple-heart.svg';

function Landing(){
  return (
    <div className="page-landing">
      <div className="page-landing-content" id="container">
        <div id="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online;</h2>
        </div>

        <img 
          src={landingImg} 
          alt="hero" 
          className="hero-image" 
        />

        <div className="buttons-container">
          <a href="/" className="study">
            <img src={studyIcon} alt="Study"/>
          </a>

          <a href="/" className="give-classes">
            <img src={giveClassesIcon} alt="Give Classes"/>
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas <img src={purpleHeart} alt="Purple heart"/>
        </span>
      </div>
    </div>
  );
}


export default Landing;
