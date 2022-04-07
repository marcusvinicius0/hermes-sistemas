import { BrowserRouter, Route,  Switch} from 'react-router-dom'

import SignIn from './Pages/Login'
import DashBoard from './Pages/Dashboard'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={SignIn} />
                <Route exact path="/dashboard" component={DashBoard} isPrivate /> 
            </Switch>
        </BrowserRouter>
    )

}

export default Routes;