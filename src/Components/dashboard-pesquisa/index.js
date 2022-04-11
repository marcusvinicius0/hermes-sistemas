import './dashboard-pesquisa.css';
import { Link } from 'react-router-dom';

import Lupa from '../../assets/lupa.svg';

import Sidebar from '../Sidebar';

export default function DashBoardPesquisa(props) {
    return (

        <div>
            <Sidebar /> 
            <div className='background'>

                <div className='container'>
                    <div className='nav'>
                        <input type="text" />
                        <img src={Lupa} />

                        <Link to="/signin">{props.name}</Link>

                    </div>

                    <div className='container1'>

                    </div>
                </div>
            </div>
        </div>

    )
}