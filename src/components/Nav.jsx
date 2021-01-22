import React from 'react'
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import MyAccount from "./MyAccount";
import Encyclopedia from "./Encyclopedia";

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
                        <Link to="/Encyclopedia">
                            Encyclopédie
                        </Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/Account">
                       <MyAccount />
                    </Route>
                    <Route path="/Encyclopedia">
                        <Encyclopedia />
                    </Route>
                </Switch>
            </BrowserRouter>
        </React.Fragment>

    )
}