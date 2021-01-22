import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

export default function RegisterForm() {
    return(
        <Fragment>
            <h1>S'enregistrer</h1>
            <form>

                <label htmlFor='firstname'>Prénom</label>
                <input type='text' id='firstname' />

                <label htmlFor='lastname'>Nom</label>
                <input type='text' id='lastname' />

                <label htmlFor='token'> ID de l'institut des Sciences Naturelles</label>
                <input type='text' id='token'/>

                <label htmlFor='email'>Adresse mail</label>
                <input type='text' id='email' />

                <label htmlFor='pass'>Mot de passe</label>
                <input type='password' id='pass' />

                <input type='submit' value="S'enregistrer"/>
            </form>
            <p>Vous avez déjà un compte ? <Link to='/login'>Se connecter</Link></p>
        </Fragment>
    )
}