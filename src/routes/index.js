import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Admin from "../pages/Admin";
import Painel from "../pages/Painel"
import ActiveClients from "../pages/ActiveClients"
import DesabledClients from "../pages/ActiveClients"

import Private from "./Private";

function RoutesApp() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/registrar" element={<Register />} />
                <Route path="/painel" element={<Private><Painel/></Private>} />
                <Route path="/clientes/ativos" element={<Private><ActiveClients/></Private>} />
                <Route path="/clientes/inativos" element={<Private><DesabledClients/></Private>} />
                {/* <Route path="/admin" element={<Private><Admin/></Private>} /> */}
            </Routes>

        </BrowserRouter>

    );
}

export default RoutesApp;