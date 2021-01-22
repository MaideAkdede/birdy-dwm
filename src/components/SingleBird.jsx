import React, { Fragment } from 'react';
import {Link} from "react-router-dom";

export default function SingleBird(props) {
    return (
        <Fragment>
            <Link to="/Encyclopedia">
                Fermer les détails de {props.nom}
            </Link>
            <h2>{props.nom}</h2>
            <dl className="birdDetails">
                <div className="birdDetails_div">
                    <dt>Nom</dt>
                    <dd>{props.nom}</dd>
                </div>
                <div className="birdDetails_div">
                    <dt>Nom Latin</dt>
                    <dd>{props.nomLatin}</dd>
                </div>
                <div className="birdDetails_div">
                    <dt>Famille</dt>
                    <dd>{props.famille}</dd>
                </div>
                <div className="birdDetails_div">
                    <dt>Taille</dt>
                    <dd>{props.taille}</dd>
                </div>
                <div className="birdDetails_div">
                    <dt>Poids</dt>
                    <dd>{props.poids}</dd>
                </div>
                <div className="birdDetails_div">
                    <dt>Envergure</dt>
                    <dd>{props.envergure}</dd>
                </div>
                <div className="birdDetails_div">
                    <dt>Durée de vie</dt>
                    <dd>{props.vie}</dd>
                </div>
                <div className="birdDetails_div">
                    <dt>Habitats</dt>
                    <dd>{props.habitat}</dd>
                </div>
                <div className="birdDetails_div">
                    <dt>Nidification</dt>
                    <dd>{props.nidification}</dd>
                </div>
                <div className="birdDetails_div">
                    <dt>Comportement</dt>
                    <dd>{props.comportement}</dd>
                </div>
                <div className="birdDetails_div">
                    <dt>Alimentation</dt>
                    <dd>{props.alimentation}</dd>
                </div>
            </dl>
        </Fragment>

    )
}