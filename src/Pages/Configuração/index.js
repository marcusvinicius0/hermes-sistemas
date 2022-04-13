


import './teste.css';
import Header from "../../Components/Header"
import Sidebar from '../../Components/Sidebar';

import { Link } from 'react-router-dom';

export default function Teste() {
    return (

            <div>
                <Header name={"Configuração"} />
                <Sidebar />
                <div className='container-config'>
                    <div className='container-config1'>
                        <Link to="">Cadastrar vendedores</Link>
                        <Link to="">Cadastrar descontos</Link>
                        <Link to="">Configurar metas</Link>
                        <Link to="">Usuários</Link>
                        <Link to="">Configurações do perfil</Link>
                    </div>
                </div>
            </div>
    )
}