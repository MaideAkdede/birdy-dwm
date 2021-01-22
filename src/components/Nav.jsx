import React from 'react'
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import MyAccount from "./MyAccount";

export default function Nav () {
    return (
        <React.Fragment>
            <BrowserRouter>
                <h2>Menu de navigation</h2>
                <ul>
                    <li>
                        <Link to="/">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/Account">
                            Mon Compte
                        </Link>
                    </li>
                    <li>
                        <Link to="/Test">
                            Test
                        </Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/Account">
                       <MyAccount />
                    </Route>
                    <Route path="/Test">
                        <p>Ceci est une page test</p>
                    </Route>
                </Switch>
            </BrowserRouter>
        </React.Fragment>

    )
}