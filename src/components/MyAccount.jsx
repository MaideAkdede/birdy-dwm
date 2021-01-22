import React, { Fragment } from 'react';
import firebase from "../utils/firebaseConfig";

export default function MyAccount() {
    return(
        <Fragment>
            <h1>Mon compte</h1>
            <p>Bonjour</p>
            <button onClick={ () => firebase.auth().signOut()}>Déconnexion</button>
        </Fragment>
    )
}