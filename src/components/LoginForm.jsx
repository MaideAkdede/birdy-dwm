import React, {useState, useContext, Fragment } from 'react';
import firebase from "../utils/firebaseConfig";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';

export default function LoginForm() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useContext(AuthContext);

    const handleSubmit = e => {
        //Éviter rechargement de la page
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(mail, password)
            .then((userFb) => {
                //Sign In
                setCurrentUser(userFb.user);
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }

    //A F F I C H A G E
    return(
    <Fragment>
        <form onSubmit={handleSubmit} >
            <label htmlFor="email">Email</label>
            <input type="email"
                   name="email"
                   id="email"
                   onChange={e => setMail(e.target.value)}/>
            <label htmlFor="password">Mot de passe</label>
            <input type="password"
                   name="password"
                   id="password"
                   onChange={e => setPassword(e.target.value)}/>
            <input type="submit" />
        </form>
        <p>Vous n'êtes pas encore inscrit ? <Link to='./register'>S'inscrire</Link></p>
    </Fragment>

    )
}