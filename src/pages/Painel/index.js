import React from "react";
import { auth } from '../../firebaseConnection';
import { signOut } from "firebase/auth";
import './Painel.css'; // Importar o arquivo CSS para estilização
import ConfirmName from "../../components/confirmName";
import Nav from "../../components/nav";
import Category from "../../components/category";

function Painel() {
    const storedUser = localStorage.getItem('@detailUser');
    const detailUser = storedUser ? JSON.parse(storedUser) : null;
    return (
        <div>
            <div>
                {detailUser ? (
                    <div className="body-container">
                        <Nav />
                        <Category />
                    </div>
                ) : (
                    <ConfirmName />
                )}
            </div>
        </div>
    );
}

export default Painel;