import './header.css';

import bellIcon from '../../assets/notification.svg';
import ellipse from '../../assets/ellipse.svg';

export default function Header(props) {
    return (
        <header>
            <h1 className="dashboard-string">{props.name}</h1>

            <div className="right-side">
                <label className="bell">
                    <img src={bellIcon} alt="notificação" />
                </label>
                <img className="bg-avatar" src={ellipse} alt="background-avatar" />

                <div>
                    <p className="user">João da Silva</p>
                    <p>Gerente de vendas</p>
                </div>
            </div>
        </header>
    )


}

