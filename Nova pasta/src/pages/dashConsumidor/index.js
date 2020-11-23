import React from 'react';
import logo from '../../assets/logo.svg';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import btnVeja from '../../assets/btn-veja.png';
import btnFavoritos from '../../assets/btn-favoritos.png';

import './style.css';

export default function Consumidor() {
    return(
        <div className="container-consumidor">
      <header>
        <img src={logo} alt="logo" />
        <span> Bem-vindo, Rubens <FaRegUserCircle size={30}/> </span>
      </header>

      <div className="navBar">

          <FaBars />
          <strong>Menu</strong>
          <input type="text" placeholder="Search"/>
          <button type="submit"><FaSearch /></button>
          <img src={btnVeja} alt="botão veja os melhores entregadores da sua área"/>
          <img src={btnFavoritos} alt="botão seus entregadores favoritos"/>
      </div>

      <ul>
          <li>
              <FaRegUserCircle size={60}/>
              <strong>Robert Keneddy</strong>
              <span><FaRegStar color="yellow" /> 4,7</span>
              <p>Irá ao mercado - Pão de açucar - em 5 min</p>

              <strong>aceita - até 5Kg e 10 intens</strong>
              <p>R$ 2,40 - 5,00</p>
          </li>
      </ul>
        </div>
    )
}