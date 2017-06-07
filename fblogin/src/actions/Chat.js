import firebase from 'firebase';
import {
    FETCH_ROOM_ERROR,
    FETCH_ROOM_SUCCESS,
    FETCH_MESSAGE_ERROR,
    FETCH_MESSAGE_SUCCESS,
    REGISTER_ROOM
} from './types';
export const findRoomByUser = (me, friend) => {
    const db = firebase.database();
    return (dispatch) => {
        let roomKey = null;

        /**
         * find all rooms belong to me
         */
        db.ref(`users/${me.uid}/rooms`)
            .on('value', rooms => {
                /**
                 * if have no room yet
                 * stop all stuff
                 */
                if (rooms.val() === null) {
                    dispatch({
                        type: FETCH_ROOM_ERROR
                    });
                    return;
                }
                /**
                 *  if this room belong friend too
                 */
                rooms.forEach(room => {
                    db.child(`users/${friend.key}/rooms/${room.key}`)
                        .on('value', snap => {
                            if (snap.val()) {
                                console.log('FOUND ROOM', room.key);
                                roomKey = room.key;
                                return;
                            }


                        });
                    if (roomKey !== null) {
                        return;
                    }
                });
                // if room belong to us
                if (roomKey !== null) {
                    dispatch({
                        type: FETCH_ROOM_SUCCESS,
                        roomKey
                    });
                    fetchMessagesByRoom(dispatch, roomKey, db);
                }
                else {
                    dispatch({
                        type: FETCH_MESSAGE_ERROR
                    })
                }


            }, error => {
                console.log('findRoomByUserError', error);
            });
    };
};
const fetchMessagesByRoom = (dispatch, roomKey, db) => {

    db.ref(`messages/${roomKey}`)
        .on('value', snap => {
            const messages = [];
            snap.forEach(message => {
                const msg= message.val();
                messages.push({
                    _id:message.key,
                    text:msg.text,
                    user:msg.user,
                    createdAt:msg.createdAt
                });
            });
            dispatch({
                type: FETCH_MESSAGE_SUCCESS,
                messages
            })

        }, error => {
            console.log('fetchMessagesByRoomERROR', error);
        });
};
export const sendMessage = (me, friend, text, roomKey) => {
    const db = firebase.database();
    return (dispatch) => {
        /**
         *   if we dont't have any room
         register new one
         */

        if (roomKey === null) {
            roomKey = registerRoom(dispatch, me, friend,db);
        }
        const now = firebase.database.ServerValue.TIMESTAMP;
        /**
         * push message
         */
        db.ref(`messages/${roomKey}`).push({
            text,
            user: {
                _id: me.uid,
                name: me.displayName,
                avatar: me.photoURL
            },
            createdAt: now
        })
    }
};

const registerRoom = (dispatch, me, friend, db) => {
    const roomKey = db.ref(`rooms`).push().key;
    const update = [];
    /*
     update rooms
     */

    update[`rooms/${roomKey}/${me.uid}`] = true;
    update[`rooms/${roomKey}/${friend.uid}`] = true;
    /*
     update users
     */
    update[`users/${me.uid}/rooms/${roomKey}`] = true;
    update[`users/${friend.key}/rooms/${roomKey}`] = true;
    db.ref().update(update).catch(error => console.log('registerRoomError', error));
    dispatch({
        type: REGISTER_ROOM,
        roomKey
    })

};