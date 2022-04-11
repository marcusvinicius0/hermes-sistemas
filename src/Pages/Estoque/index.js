

import Header from "../../Components/Header"
import DashBoardPesquisa from "../../Components/dashboard-pesquisa"

export default function Estoque(){
    return(
        <body>  
            <Header name={"Estoque"} />

            <div>
                <DashBoardPesquisa name={"Inserir produto"} />
            </div>
        </body>
    )
}