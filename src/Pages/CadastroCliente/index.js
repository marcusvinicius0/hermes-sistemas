import './styles.css';

import Header from "../../Components/Header"
import Sidebar from "../../Components/Sidebar"

import { Link } from 'react-router-dom';

export default function CadastroCliente() {
    return (
        <div>
            <Header name={"Cadastre um cliente"} />
            <Sidebar />
            <div className="container-cadastrocliente">
                <form>
                    ID: <br />
                    <input type="text" required />
                    Nome: <br />
                    <input type="text" required />
                    Sobrenome: <br />
                    <input type="text" required />
                    Contato: <br />
                    <input type="tel" required placeholder="+55 99999-9999" />
                    Endereço: <br />
                    <input type="text" required />
                    CPF: <br />
                    <input type="text" required />

                    <button type="submit">Salvar</button>
                    <Link className="voltar-pagina" to="/clientes">Voltar</Link>
                </form>
            </div>
        </div>
    )
}