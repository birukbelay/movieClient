import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

//styles
import './App/assets/bootstrap4/bootstrap.min.css'
import './App/assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css'
import './App/assets/css/Custom1FlexBox.css'
import './App.css'

import {AuthRoute} from "./App/Components/AuthRoute";


// const Index = lazy(()=> import('./App/views/Landing/Landing'));
import Index from "./App/views/Landing/Landing";

const Loginc = lazy(()=> import('./App/views/Auth/login'));
const SignUp = lazy(()=> import('./App/views/Auth/sign-up/sign-up'));
const AdminBody = lazy(()=> import('./App/views/Admin/Admin'));

const ProtectedRoute = lazy(()=> import('./App/Components/AuthRoute'));




function App() {
  return (
    <Router>
        <Suspense fallback={<Spin/>} >
            <Switch>
                <ProtectedRoute  path='/admin' component={AdminBody}/>
                {/*<Route  path='/admin' component={AdminBody}/>*/}

                <AuthRoute  path='/login' component={Loginc}/>
                <AuthRoute  path='/signup' component={SignUp}/>
                <Route path='/' component={Index}/>
                <Route component={NoMatchPage} />
            </Switch>

        </Suspense>
    
 </Router>
 
   );
}

export default App;
const Spin =()=>{
    const Style={

        position: 'fixed',
        left: '50%',
        marginLeft: '-50px',
        top: '25%',
        marginTop: '-50px'
        // left: '50%'
    }
    return(
        <div className="" style={Style}>
            <button
                type="button"
                id="TooltipDemo"
                className="btn-open-options btn  btn-outline-danger"
            >
                <i className="fa fa-cog fa-w-16 fa-spin fa-5x" />
            </button> <span style={{padding:'1em'}} />
            Loading ...

        </div>
    )
}

export const NoMatchPage = () => {
    const Style={
        left: '50%',
        marginLeft: '-50px',
        top: '25%',
        marginTop: '50px'
        // left: '50%'
    }
    return (
        <div className="" style={Style}>
            <button
                type="button"
                id="TooltipDemo"
                className="btn-open-options btn  btn-outline-danger"
            >
                <i className="fa fa-cog fa-w-16 fa-spin fa-5x" />
            </button> <span style={{padding:'1em'}} />

                {/*<Redirect to={"/"}/>*/}
                    <Link to="/">  <h3>404 - Not found </h3> </Link>


        </div>

    );
};