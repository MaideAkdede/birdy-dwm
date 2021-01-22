import React, { Fragment, useState, useEffect } from 'react';
import firebase from '../utils/firebaseConfig'

export default function Users() {

    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection("users")
            .orderBy('firstname')
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                setAllUsers(data);
            })
    }, [])
    return (
        <Fragment>
            <h2>Utilisateurs</h2>
            <ul className="users">
                {allUsers.map((singleUser, id) => (
                    <li>
                        <p><span>{singleUser.firstname}</span> <span>{singleUser.lastname}</span></p>
                        <Mailto email>{singleUser.mail}</Mailto>
                    </li>
                ))
                }
            </ul>
        </Fragment>

    )
}