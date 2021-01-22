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
                        <p className="users_name"><span>{singleUser.firstname}</span> <span>{singleUser.lastname}</span></p>
                        <p className="users_mail">{singleUser.mail}</p>
                    </li>
                ))
                }
            </ul>
        </Fragment>

    )
}