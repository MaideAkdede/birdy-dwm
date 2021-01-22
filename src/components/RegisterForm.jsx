import React, { Fragment, useContext, useState} from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import firebase from "../utils/firebaseConfig";
import {onLog} from "firebase";

export default function RegisterForm() {

    const [currentUser, setCurrentUser] = useContext(AuthContext);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const [inputFirstname, setInputFirstname] = useState('');
    const [inputLastname, setInputLastname] = useState('');
    const [inputToken, setInputToken] = useState('');
    const [msg, setMsg] = useState('');
    const [authError, setAuthError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleRegister = (e) => {
        // Arrêtez rechargement de la page
        e.preventDefault();
        // Create User Firebase

       if(  inputFirstname === "" ||
            inputLastname === "" ||
            inputToken === "" ||
            mail === ""){
           setMsg('Vous ne pouvez pas valider un formulaire avec des champs vide !')
           } else {
           firebase
               .firestore()
               .collection('users').doc().set({
               firstname: inputFirstname,
               lastname: inputLastname,
               token: inputToken,
               mail: mail
           });

           firebase
               .auth()
               .createUserWithEmailAndPassword(mail, password)
               .then((user) => {
                   setCurrentUser(user);
               }) .catch((error) => {
               let errorCode = error.code;
               switch (errorCode) {
                   case 'auth/email-already-in-use':
                       setAuthError("Adresse mail déjà utilisée")
                       break
                   case 'auth/invalid-email':
                       setAuthError("Adresse mail invalide")
                       break
                   case 'auth/weak-password':
                       setPasswordError("Choisissez un mot de passe avec plus de 6 caractères")
                       break
               }
           });
       }
    }
    return(
        <Fragment>
            <h1>S'enregistrer</h1>
            <form onSubmit={handleRegister}>
                <label htmlFor='firstname'>Prénom</label>
                <input type='text' id='firstname'
                       onChange={(e) => setInputFirstname(e.target.value)}/>

                <label htmlFor='lastname'>Nom</label>
                <input type='text' id='lastname'
                       onChange={(e) => setInputLastname(e.target.value)}/>

                <label htmlFor='token'> ID de l'institut des Sciences Naturelles</label>
                <input type='text' id='token'
                       onChange={(e) => setInputToken(e.target.value)}/>

                <label htmlFor='email'>Adresse mail</label>
                {{authError}? <p className='error'>{authError}</p> : null}
                <input type='text' id='email'
                       onChange={(e) => setMail(e.target.value)}/>

                <label htmlFor='pass'>Mot de passe</label>
                {{passwordError}? <p className='error'>{passwordError}</p> : null}
                <input type='password' id='pass'
                       onChange={(e) => setPassword(e.target.value)}/>
                <input type='submit' value="S'enregistrer"/>
                {{msg}? <p className='error'>{msg}</p> : null}
            </form>

            <p>Vous avez déjà un compte ? <Link to='/login'>Se connecter</Link></p>
        </Fragment>
    )
}