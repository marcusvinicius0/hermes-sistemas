import './dashboard.css';

import Header from '../../Components/Header';
import Sidebar from "../../Components/Sidebar";

export default function DashBoard() {

    function diaDaSemana() {
        var data = new Date();
        var dias = new Array(
            'domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'
        );
       var dia = dias[data.getDay()]

        return `${dia}`

    }


    function dataAtualFormatada() {
        let data = new Date(),
            dia = data.getDate().toString().padStart(2, '0'),
            mes = (data.getMonth() + 1).toString().padStart(2, '0'),
            ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }


    return (
        <body>
            <Header name={"Dashboard"} />
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
                            <h2>Últimas vendas</h2>

                            <div className="lista-ultimasvendas">
                                <p>Lista das últimas vendas realizadas</p>
                            </div>
                        </div>

                        <div>

                        </div>

                    </div>


                    <div className='financeiro'>
                        <div className="faturamento">
                            <p className="valor-total">R$20.250,00</p>
                            <p>Faturamento</p>
                        </div>

                        <div className="lucro">
                            <p className="valor-total">R$5.250,00</p>
                            <p>Lucro</p>
                        </div>

                        <div className="vendas">
                            <p className="valor-total">200</p>
                            <p>Vendas</p>
                        </div>
                    </div>

                    <div className='metas-container'>
                        <div className='metas-container1'>
                            <h3>Metas Mês</h3>
                            <div className='metas-container2'>
                                <p>Lista de metas do mês atual</p>
                            </div>
                        </div>
                    </div>

                    <div className='time-container'>
                        <div className='time'>
                            <h4>Data e hora</h4>
                            <p className='tempo-real' />
                            <p> {diaDaSemana}, dia {dataAtualFormatada()} </p>
                        </div>
                    </div>
                </div>
            </div>

        </body>
    )
}