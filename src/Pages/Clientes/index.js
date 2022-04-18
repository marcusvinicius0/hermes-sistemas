

import Header from "../../Components/Header"
import DashBoardPesquisa from "../../Components/dashboard-pesquisa"

export default function Clientes() {
    return (
        <div>
            <Header name={"Clientes"} />

            <div>
                <DashBoardPesquisa to={"/cadastrocliente"} name={"Cadastrar Cliente"} />
            </div>
        </div>

    )
}