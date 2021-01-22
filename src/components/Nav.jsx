import React from 'react'
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import MyAccount from "./MyAccount";
import Encyclopedia from "./Encyclopedia";
import Users from "./Users";
import SingleBird from "./SingleBird";

export default function Nav () {
    return (
        <React.Fragment>
            <BrowserRouter>
                <h2>Menu de navigation</h2>
                <ul className="navUl">
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
                    <li>
                        <Link to="/Users">
                            Utilisateurs
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
                    <Route path="/Users">
                        <Users />
                    </Route>
                </Switch>
            </BrowserRouter>
        </React.Fragment>

    )
}