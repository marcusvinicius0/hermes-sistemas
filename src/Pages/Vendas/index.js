
import Header from "../../Components/Header";


import DashBoardPesquisa from '../../Components/dashboard-pesquisa';

export default function Vendas() {
    return (
        <div>
            <Header name={"Vendas"} />

            <div>
                <DashBoardPesquisa name={"Realizar venda"} />
            </div>
        </div>
    )
}

