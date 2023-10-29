import React, { useState } from "react";
import "./Login.css"; // Importe o arquivo CSS
import { Link } from "react-router-dom";
import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from "react-router-dom";

import Button from "../../components/button";
import Input from "../../components/input";

function Login() {
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
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/painel', { replace: true });
    } catch (error) {
      console.log("Erro ao fazer login", error);
      alert("Usuário ou senha inválida");
    }
  };

  return (
    <div className="container">
      

      <form onSubmit={handleSubmit}>
  
      <h1>Login</h1><br /><br />
        <div>
          <label>EMAIL</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>SENHA</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <button type="submit">ENTRAR</button>
        </div><br /><br />
        <Link className="pLogin"  to="/registrar"><p>Não possui conta? Clique aqui para criar</p></Link>
        
      </form>


    </div>
  );
}

export default Login;
