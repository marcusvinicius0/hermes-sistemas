import { Link } from "react-router-dom"


export default function Erro(){
    return(
        <div>
            <h1>pagina erro</h1>
            <p>404 not found</p>
            <Link to="/">go to dashboard</Link>
        </div>
    )



}