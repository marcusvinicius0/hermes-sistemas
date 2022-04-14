


import Header from "../../Components/Header"
import DashBoardPesquisa from "../../Components/dashboard-pesquisa"

export default function Estoque() {
    return (

        <div>
            <Header name={"Estoque"} />

            <div>
                <DashBoardPesquisa to={"/inserirproduto"} name={"Inserir produto"} />
            </div>

        </div>
    )
}