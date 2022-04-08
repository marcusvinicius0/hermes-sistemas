import './dashboard.css';

import Header from '../../Components/Header';
import Sidebar from "../../Components/Sidebar";

export default function DashBoard() {
    return (
        <body>
            <Header />
            <Sidebar />

            <div className='pai'>
                <div className='container-dashboard1'>
                    <div className='container-maisvendidos'>
                        <h1>Mais vendidos</h1>
                        <p className="current-month">Mês de Abril</p>

                        <div className='gráfico'>
                            <p>Gráfico</p>
                        </div>
                    </div>


                    <div className='container-dashboard2'>
                        <div className='container-ultimasvendas'>

                        </div>
                    </div>


                    <div className='financeiro'>
                        <div className="faturamento"></div>
                        <div className="lucro"></div>
                        <div className="vendas"></div>
                    </div>

                    <div className='metas-container'>
                        <div className='metas-container1'>
                            <div className='metas-container2'>

                            </div>
                        </div>
                    </div>

                    <div className='time-container'>
                        <div className='time'>

                        </div>
                    </div>
                </div>
            </div>

        </body>
    )
}