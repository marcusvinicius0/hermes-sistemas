import './dashboard.css';

import Header from '../../Components/Header';
import Sidebar from "../../Components/Sidebar";

export default function DashBoard() {

    function horaAtual(){
        
        let data = new Date();
        var hor = data.getHours();
        var min = data.getMinutes();
        var seg = data.getSeconds();
        
        let hora = `${hor}:${min}:${seg}`

        return hora
    }

    function dataAtualFormatada() {
        
        let data = new Date(),
            dia = data.getDate().toString().padStart(2, '0'),
            mes = (data.getMonth() + 1).toString().padStart(2, '0'),
            ano = data.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }

    function diaSemana(){
        
        let data = new Date();
        let day = data.getDay();

        if(day === 0){
            return("Domingo")
        } else if(day === 1){
            return("Segunda-feira")
        } else if(day === 2){
            return("Terça-feira")
        } else if(day === 3){
            return("Quarta-feira")
        } else if(day === 4){
            return("Quinta-feira")
        } else if(day === 5){
            return("Sexta-feira")
        } else if(day === 6){
            return("Sábado")
        }
    }

    return (

        <div>
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
                            <p className='tempo-real'>{horaAtual()}</p>
                            <p> {diaSemana()}, dia {dataAtualFormatada()} </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}