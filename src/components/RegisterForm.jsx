import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

export default function RegisterForm() {
    return(
        <Fragment>
            <h1>S'enregistrer</h1>

            <p>Vous avez déjà un compte ? <Link to='/login'>Se connecter</Link></p>
        </Fragment>
    )
}