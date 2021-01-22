import React, { Fragment} from 'react';
import firebase from "../utils/firebaseConfig";

export default function MyAccount() {
    return(
        <Fragment>
            <h2>Mon compte</h2>
            <p>Bonjour </p>
            <button onClick={ () => firebase.auth().signOut()}>Se déconnecter</button>
        </Fragment>
    )
}