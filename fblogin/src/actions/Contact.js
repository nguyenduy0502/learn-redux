import firebase from 'firebase';
import {
    FETCH_CONTACT_SUCCESS,
    FETCH_CONTACT_ERROR
} from './types';
export const fetchListContact = ({me}) => {
    return (dispatch) => {
        firebase.database().ref('users')
            .on('value', snap => {
                const contacts = [];
                snap.forEach(contact => {
                    if (contact.key !== me.uid) {
                        contacts.push(contact.val())
                    }
                });
                dispatch({
                    type: FETCH_CONTACT_SUCCESS,
                    contacts
                });
            }, error => {
                console.log(error);
                dispatch({
                    type: FETCH_CONTACT_ERROR,

                });
            });

    };
};