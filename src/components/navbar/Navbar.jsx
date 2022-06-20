import React from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css';

// BEM => Block Element Modifier : container__element--attribute
// bem 참고사이트: https://nykim.work/15

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
        <div className='gpt3__navbar-links'>
            <div className='gpt3__navbar-links_logo'>
              <img src={logo} alt='logo' />
            </div>
            <div className='gpt3__navbar-links_container'>
              <p><a href="#home">Home</a></p>
              <p><a href="#about">About</a></p>
              <p><a href="#service">Services</a></p>
              <p><a href="#project">Projects</a></p>
              <p><a href="#contact">Contact us</a></p>
            </div>
        </div>
    </div>
  )
}

export default Navbar