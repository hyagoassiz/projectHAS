import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css"; // Importe o arquivo CSS

import { auth } from '../../firebaseConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Create() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/', { replace: true });
        } catch (error) {
            console.log("Erro ao criar conta", error);
        }
    };

    return (
        <div className="container">
            

            <form onSubmit={handleSubmit}>
            <h1>Criar Conta</h1><br /><br />
                <div>
                    <label>EMAIL</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>

                <div>
                    <label>SENHA</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>

                <div>
                    <label>CONFIRMAR SENHA</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        // Adicione o estado e o manipulador apropriados aqui se necessário
                        required
                    />
                </div>

                <div>
                    <button type="submit">CRIAR CONTA</button>
                </div>

            </form>
            <br /><br />

            <Link className="pLogin" to="/">
                <p>Já possui uma conta? Clique aqui para fazer login</p>
            </Link>

        </div>
    );
}

export default Create;
