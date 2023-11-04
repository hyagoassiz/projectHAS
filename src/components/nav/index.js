// Nav.js
import React from "react";
import { Link } from "react-router-dom"
import { auth } from '../../firebaseConnection';
import { signOut } from "firebase/auth";
import './Nav.css';

import user from '../../assets/user.png'; // Substitua pelo caminho real da sua imagem
import painelIcon from '../../assets/painel.png'; // Substitua pelo caminho real do ícone do Painel
import clientesIcon from '../../assets/users.png'; // Substitua pelo caminho real do ícone de Clientes
import configIcon from '../../assets/config.png'; // Substitua pelo caminho real do ícone de Configurações
import logoffIcon from '../../assets/logoff.png'; // Substitua pelo caminho real do ícone de Configurações

function Nav() {
    const handleLogout = async () => {
        await signOut(auth);
    }

    return (
        <div className="nav-container">
            <nav className="nav-menu">
                <div className="user-info">
                    <img src={user} alt="Logo" />
                    <p>Olá, Hyago!</p>
                </div><br />

                <button>+ NOVO CLIENTE</button><br />

                <ul className="menu-section">
                    <Link to="/painel">
                        <li><img className="nav-icon" src={painelIcon} alt="Painel" /> Painel</li>
                    </Link>

                    <li><img className="nav-icon" src={clientesIcon} alt="Clientes" /> Clientes</li>
                    <ul className="sub-li">
                        <Link to="/clientes/ativos"><li>Ativos</li></Link>

                            <li>Inativos</li>
                    </ul>

                    <li><img className="nav-icon" src={configIcon} alt="Configurações" /> Configurações</li>
                    <li onClick={handleLogout}><img className="nav-icon" src={logoffIcon} alt="Configurações" /> Sair</li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
