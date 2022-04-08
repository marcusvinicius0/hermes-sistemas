import './login.css';

import logo from '../../assets/logo.svg';

export default function SignIn() {
    return (
        <div className="container-loginpage">
            <div className="login-area">
                <h1 className="login-string">Login</h1>
                <p className="welcome-string">Seja Bem vindo(a)</p>
                <p className="customer-name">EXEMPLO NOME DO CLIENTE</p>
                <div className="row-login" />
            </div>

            <div>
                <form>
                    <label>
                        <p className="email-string">Email</p>
                        <input className="email-input" type="email" required/>
                    </label>

                    <label>
                        <p className="password-string">Senha</p>
                        <input className="password-input" type="password" required/>
                    </label>

                
                        <a href="" className="forgot-password">Esqueceu a senha?</a>
                 

                    <button className='login' type="submit">Login</button>
                </form>
            </div>

            <div className="logo-area">
                <div className="background">
                    <img className="hermes-logo" src={logo} alt="logo" />
                </div>

            </div>
        </div>
    )
}