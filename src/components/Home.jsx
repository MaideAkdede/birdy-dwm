import React, {Fragment} from 'react';
import firebase from "firebase";

export default function Home() {
    return (
        <Fragment>
            <h1>Home Page</h1>
            <p>Bienvenue dans la HOME PAGE</p>
            <p>Vous êtes bien connecté(e) ! </p>
            <button onClick={ () => firebase.auth().signOut()}>Déconnexion</button>
        </Fragment>
    )
}