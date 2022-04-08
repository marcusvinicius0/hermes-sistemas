
import logo from '../../assets/logo1.svg';
import dashboardIcon from '../../assets/dashboard.svg';
import vendasIcon from '../../assets/vendas.svg';
import estoqueIcon from '../../assets/estoque.svg';
import clientesIcon from '../../assets/clientes.svg';
import configuracaoIcon from '../../assets/configuração.svg';
import ajudaIcon from '../../assets/ajuda.svg';

import './sidebar.css';

import { Link } from 'react-router-dom';

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div>
                <img className="logo" src={logo} alt="logo"/>
            </div>

            <hr className="row"></hr>

            <Link to="/dashboard">
                <img className="dashboardIcon" src={dashboardIcon} alt="dashboard" />
            </Link>

            <Link>
                <img className="salesIcon" src={vendasIcon} alt="vendas"/>
            </Link>

            <Link>
                <img className="storageIcon" src={estoqueIcon} alt="estoque" />
            </Link>

            <Link>
                <img className="customersIcon" src={clientesIcon} alt="clientes" />
            </Link>

            <div />

            <hr className="row1"></hr>

            <Link>
                <img className="settingsIcon" src={configuracaoIcon} alt="configuração" />
            </Link>

            <Link>
                <img className="helpIcon" src={ajudaIcon} alt="ajuda" />
            </Link>

        </div>

    )


}