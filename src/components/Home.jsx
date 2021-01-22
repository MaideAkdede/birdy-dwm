import React, {Fragment} from 'react';
import Nav from "./Nav";
import firebase from "../utils/firebaseConfig";

export default function Home() {
    return (
        <Fragment>
            <h1>Birdy</h1>
            <Nav />
        </Fragment>
    )
}