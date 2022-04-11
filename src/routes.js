import { BrowserRouter, Route,  Switch} from 'react-router-dom'

import SignIn from './Pages/Login';
import DashBoard from './Pages/Dashboard';
import Vendas from './Pages/Vendas';
import Estoque from './Pages/Estoque';
import Clientes from './Pages/Clientes';
import Configuração from './Pages/Configuração';
import Erro from './Pages/Erro';



export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={SignIn} />
                <Route exact path="dashboard" component={DashBoard} />
                <Route exact path="/vendas" component={Vendas} />
                <Route exact path="/estoque" component={Estoque} />
                <Route exact path="/clientes" component={Clientes} />
                <Route exact path="/configuração" component={Configuração} />
                <Route exact path="*" component={Erro} />
                 
            </Switch>
        </BrowserRouter>
    )

}
