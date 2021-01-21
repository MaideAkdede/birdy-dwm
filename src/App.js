// LIBRARY AND DEPENDENCIES
import React, { useContext } from 'react';
import { AuthContext } from "./contexts/AuthContext";
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
// COMPONENTS
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
                <Redirect to={{ pathname: "/login" }} />
            }

            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route path="/login" >
                    <LoginForm />
                </Route>
                <Route path="/register" >
                    <RegisterForm />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

