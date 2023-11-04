import React from "react";
import './Search.css';
import logoSearch from '../../assets/search.png'; // Substitua pelo caminho real do ícone de Configurações

function Search(){
    return(
        <div className="search">
            <img className="icon-search" src={logoSearch} alt="Search" />
            <input className="search-container" type="text" placeholder="Pesquisar cliente" />
        </div>
    );
}

export default Search;