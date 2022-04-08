
import logo from '../../assets/logo1.svg';
import dashboardIcon from '../../assets/dashboard.svg';
import vendasIcon from '../../assets/vendas.svg';
import estoqueIcon from '../../assets/estoque.svg';
import clientesIcon from '../../assets/clientes.svg';
import configuracaoIcon from '../../assets/configuração.svg';
import ajudaIcon from '../../assets/ajuda.svg';

import './header.css';

import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <div className="sidebar">
            <div>
                <img src={logo} alt="logo"/>
            </div>

            <div />

            <Link to="/">
                <img className="dashboardIcon" src={dashboardIcon} alt="dashboard" />
            </Link>

            <Link>
                <img src={vendasIcon} alt="vendas"/>
            </Link>

            <Link>
                <img src={estoqueIcon} alt="estoque" />
            </Link>

            <Link>
                <img src={clientesIcon} alt="clientes" />
            </Link>

            <div />

            <Link>
                <img src={configuracaoIcon} alt="configuração" />
            </Link>

            <Link>
                <img src={ajudaIcon} alt="ajuda" />
            </Link>


        </div>

    )


}