import './login.css';

import logo from '../../assets/logo.svg';


export default function SignIn() {
    return (
        <div className="container">
            <div className="container1">
                <h1>Login</h1>
                <p className="welcome">Seja Bem vindo(a)</p>
                <p className="customer-name">EXEMPLO NOME DO CLIENTE</p>
                <div className="row" />

                <div className="formulario">
                    <form>
                        <label>
                           <p>Email</p>
                            <input type="email" required />
                        </label>
                        
                        <label>
                           <p>Senha</p>
                            <input type="password" required />
                        </label>
                        
                        <label>
                        <a href="" target="_blank" rel="noreferrer">Esqueceu a senha?</a>
                        </label>

                        <button type="button">Login</button>
                    </form>
                </div>
            </div>

            <div className="container2">
               <div className="background">
               <img className="logo" src={logo} alt="logo-empresa" />
               </div>
               
            </div>


        </div>
    )
}