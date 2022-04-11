import './index.css';

import { Link } from 'react-router-dom';

import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';


export default function Configuração() {
    return (
        <body>
            <Header name={"Configuração"} />
            <Sidebar />
            <div className='container-config'>

                <div className='container-config1'>
                    <Link>Cadastrar vendedores</Link>
                    <Link>Cadastrar descontos</Link>
                    <Link>Configurar metas</Link>
                    <Link>Usuários</Link>
                    <Link>Configurações do perfil</Link>
                </div>

            </div>
        </body>
    )
}