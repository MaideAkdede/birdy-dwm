import React, { useContext } from 'react';
import { AuthContext } from "./contexts/AuthContext";
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

export default function App() {

    const [currentUser, setCurrentUser] = useContext(AuthContext);

    return (
        <BrowserRouter>
            { currentUser ?
                <Redirect to={{ pathname: "/" }} />
                :
                <Redirect to={{ pathname: "/Login" }} />
            }
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/Login" component={LoginForm} exact/>
                <Route path="/Register" component={RegisterForm} exact/>
            </Switch>
        </BrowserRouter>
    )
}

