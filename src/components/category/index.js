import React from "react";
import "./Category.css";

import logoCategory from '../../assets/painelc.png'; // Substitua pelo caminho real do ícone de Configurações

function Category(){
    return(
        <div className="category">
                      <img className="icon-search" src={logoCategory} alt="Search" />
            <h1>Painel</h1>
        </div>
    );
}

export default Category;