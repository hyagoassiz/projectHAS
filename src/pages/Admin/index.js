import React from "react";
import { auth } from '../../firebaseConnection';
import { signOut } from "firebase/auth";
import './Admin.css'; // Importar o arquivo CSS para estilização
import ConfirmName from "../../components/confirmName";
import Nav from "../../components/nav";
import Category from "../../components/category";

function Admin() {
    const storedUser = localStorage.getItem('@detailUser');
    const detailUser = storedUser ? JSON.parse(storedUser) : null;

    return (
        <div className="body-container">
            {detailUser ? (
                <div>
                    <Nav />
                    <Category />
                </div>
            ) : (
                <ConfirmName />
            )}
        </div>
    );
}

export default Admin;