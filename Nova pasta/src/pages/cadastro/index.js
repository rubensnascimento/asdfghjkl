import React from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import {Link, useHistory} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import MenCar from '../../assets/men-cart.png'
import logo from '../../assets/logo.svg'
import './style.css';

export default function Cadastro() {
    return(
        <div className="cadastro-container">
            <img className="logo" src={logo} alt="logo"/>
            <h2>Cadastrar-se como Consumidor</h2>
            <form >
                <h3>Dados Pessoais</h3>
                <ul>

                <li>
                <strong>Nome</strong>
                <input placeholder="Digite seu nome..." />
                </li>

                <li>
                <strong>Sobrenome</strong>
                <input placeholder="Digite seu sobrenome..." />
                </li>

                <li>
                <strong>Telefone</strong>
                <input placeholder="(xx)x xxxx-xxxx"/>
                </li>

                <li>
                <strong>CPF</strong>
                <input placeholder="000.000.000-00"/>
                </li>

                <li>
                <strong>Email</strong>
                <input type="email" placeholder="digite seu email..."/>
                </li>

                <li>
                <div className="container-senha">
                <strong>Senha</strong>
                <IoIosInformationCircleOutline size={16} data-tip data-for="detalhes"/>
                <ReactTooltip id="detalhes" place="right" type="dark" effect="solid">
                <p>
                Insira uma senha que contenha: <br/>
                no minimo 6 caracter <br/>
                1 letra MAIUSCULA <br/>
                1 numero
                </p>
                </ReactTooltip>
                </div>
                <input placeholder="digite uma senha..."/>
                </li>

                <li>
                <strong>Confirme a senha</strong>
                <input placeholder="confirme sua senha..."/>
                </li>

                </ul>

                <div className="dados-endereco">
                    <h3>Dados de endereço</h3>

                    <ul>

                    <li>
                    <strong>Estado</strong>
                    <input placeholder="ex:São Paulo"/>
                    </li>

                    <li>
                    <strong>Cidade</strong>
                    <input placeholder="ex:São Bernado do Campo"/>
                    </li>

                    <li>
                    <strong>Rua</strong>
                    <input placeholder="ex:Rua Gabriel Garcia"/>
                    </li>

                    <li>
                    <strong>CEP</strong>
                    <input placeholder="00000-000"/>
                    </li>

                    <li>
                    <strong>Complemento</strong>
                    <input placeholder="00000-000"/>
                    </li>

                    <li>
                    <strong>Complemento</strong>
                    <textarea placeholder="ex: ao lado do posto de gasolina"/>
                    </li>

                    </ul>
                </div>
            </form>

            <div className="container-entregador">
                <h3>Deseja ser um entregador?</h3>

                <h4>Entenda os benefícios de ser entregador</h4>

                <p>Ao se tornar um entregador além de conhecer as pessoas que moram proximas, você irá ajudar aqueles que necessitam e ainda sim será remunerado por desempenhar essas tarefas.</p>

                <img src={MenCar} className="mencar" alt="Imagem de Homem com carrinho"/>

                <h4>Quer fazer parte dessa missão?</h4>
                
                <Link className="link" to="/Consumidor">
                <button type="submit" className="buttonE">Quero ser entregador</button>
                </Link>

                <h4>Para cadastrar - se somente como consumidor clique no botão a baixo</h4>

                <button type="submit" className="buttonC">Finalizar cadastro como consumidor</button>
            </div>
        </div>
    )
}