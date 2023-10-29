// ConfirmName.js
import React, { useState } from "react";
import "./ConfirmName.css";

function ConfirmName() {



    return (
        <div className="container">
            

            <form>
            <h1>Insira seu nome para prosseguir</h1><br /><br />
                <div>
                    <label>NOME</label>
                    <input/>
                </div>

                <div>
                    <label>SOBRENOME</label>
                    <input/>
                </div>

                <div>
                    <button type="submit">CONFIRMAR</button>
                </div>

            </form>

        </div>
       
    );
}

export default ConfirmName;
