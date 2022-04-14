import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignIn from './Pages/Login';
import DashBoard from './Pages/Dashboard';
import Vendas from './Pages/Vendas';
import Estoque from './Pages/Estoque';
import Clientes from './Pages/Clientes';
import Configuracao from './Pages/Configuração';
import InserirProduto from './Pages/InserirProduto';
import Erro from './Pages/Erro';



const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/vendas" element={<Vendas />} />

                <Route path="/estoque" element={<Estoque />} />
                <Route path="/inserirproduto" element={<InserirProduto />} />

                <Route path="/clientes" element={<Clientes />} />
                <Route path="/configuracao" element={<Configuracao />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )

}

export default MyRoutes;
