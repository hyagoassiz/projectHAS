import React from "react";
import "./cardClient.css"
import StatusClient from '../../assets/green.png'; // Substitua pelo caminho real do ícone de Configurações

function cardClient() {
    return (
        <div className="card-client">
            <div className="info-client">
                <h2>EMPRESA GERÉRICA 1</h2>
                <p>RAZÃO SOCIAL: EMPRESA</p>
                <p>CNPJ: 00.000.111/0001-12</p>
                <div className="info-status-client">
                    <img className="nav-icon-status" src={StatusClient} alt="Configurações" />
                    <p>Cliente Ativo</p>
                </div>

            </div>

        </div>
    );

}

export default cardClient;