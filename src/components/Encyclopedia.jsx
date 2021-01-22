import React, { Fragment, useState, useEffect } from 'react';
import firebase from '../utils/firebaseConfig'
import SingleBird from "./SingleBird";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";


export default function Encyclopedia() {

    const [allBirds, setAllBirds] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection("birds")
            .orderBy('name')
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                setAllBirds(data);
            })
    }, [])

    return (
            <BrowserRouter>
                <h2>Encyclopédie</h2>
                <ul>
                    {allBirds.map((singleBird, id) => (
                        <Fragment>
                        <li>
                            <Link to="/bird" className="birdLi">
                                <p className="users_name"><span>{singleBird.name}</span> - <span>{singleBird.name_latin}</span></p>
                            </Link>
                        </li>
                        <Switch>
                            <Route path="/bird">
                                <SingleBird
                                nom={singleBird.name}
                                nomLatin={singleBird.name_latin}
                                famille={singleBird.Family}
                                photoSrc={singleBird.Photo}
                                taille={singleBird.Size}
                                poids={singleBird.Weight}
                                comportement={singleBird.behaviour}
                                envergure={singleBird.wingspan}
                                vie={singleBird.lifespan}
                                habitat={singleBird.housing}
                                nidification={singleBird.nesting}
                                alimentation={singleBird.diet}
                                />
                            </Route>
                        </Switch>
                        </Fragment>
                    ))
                    }
                </ul>

            </BrowserRouter>


    )
}