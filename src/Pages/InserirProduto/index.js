import './styles.css';

import Header from "../../Components/Header"
import Sidebar from "../../Components/Sidebar"

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// disabled={true} 

export default function InserirProduto() {
    const [showID, setShowID] = useState('')

    function randomId(){
       let number = Math.random()

       return number
    }

    useEffect(()=>{
          
        setShowID(randomId)
        
    }, [])


    return (
        <div>
            <Header name={"Inserir produto"} />
            <Sidebar />
            <div className="container-inserirprodutos">
                <form className="informações">
                    <label>
                        <button onClick={showID} className="btn-id" type="button" required  >Gerar ID aleatório</button> <br/>
                        <p>{showID}</p>
                    </label>
                    <label>
                        Descrição: <br/>
                        <textarea placeholder="" required />
                    </label>
                    <label>
                        Quantidade: <br/>
                        <input type="number" placeholder=""  min="1" required />
                    </label>
                    <label>
                        Código/Etiqueta: <br/>
                        <input type="text" placeholder="" required />
                    </label>
                    <label>
                        Custo por unidade: <br/>
                        <input type="text" />
                    </label>
                    <label>
                        Preço de venda: <br/>
                        <input type="text" />
                    </label>
                    <label>
                        Fornecedor: <br/> 
                        <input type="text" />
                    </label>
                    <label>
                        Imagem: <br/>
                        <input type="file" accept="image/*" />
                    </label>

                    <button type="submit">Salvar</button>
                    <Link className="voltar-pagina" to="/estoque">Voltar</Link>
                </form>

            </div>
        </div>
    )
}