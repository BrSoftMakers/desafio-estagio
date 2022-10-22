import React from 'react'
import './logoinicial.css';
import Logo from '../assets/img/img-soft-car.png';
import Seta from '../assets/img/seta.png';

const LogoInicial = () => {
  return (
    <div className='backgroundPrin'>
      <div className='container__background'>
        <img className='logo__background' src={Logo} alt="logo-background" />
      </div>
      <div className='animaCenter'>
        <p className='animacao'>Venha conhecer a maior locadora de veículos do nordeste (:</p>
      </div>
        <div className='seta-center'>
          <img className='seta' src={Seta} alt="" />
        </div>
        
    </div>
  )
}

export default LogoInicial;