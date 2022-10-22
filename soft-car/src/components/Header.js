import React from 'react';
import './header.css';
import Logo from '../assets/img/logo.png';

const Header = () => {
  return (
    <header>
        <img className="header_logo" src={Logo} alt="logo" />
        <nav>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">CARROS</a></li>
                <li><a href="#">LOGIN</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;