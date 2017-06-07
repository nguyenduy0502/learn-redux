import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,

} from 'react-native';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';
import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDjM49Dg717OGaFtWsDbyUbUsTrTR3oyug",
    authDomain: "fblogin-91577.firebaseapp.com",
    databaseURL: "https://fblogin-91577.firebaseio.com",
    projectId: "fblogin-91577",
    storageBucket: "fblogin-91577.appspot.com",
    messagingSenderId: "726456553961"
};
firebase.initializeApp(config);
export default class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            logged: false,

        }
    }

    handleLogin = () => {
        if (!this.state.logged) {
            LoginManager.logInWithPublishPermissions(['publish_actions'])
                .then((result) => {
                    if (result.isCancelled) {
                        alert("Cancel Login")
                    }
                    /*  else if (result.declinedPermissions) {
                     alert('declinedPermissions')
                     }
                     else {*/
                    this.setState({logged: true});
                    AccessToken.getCurrentAccessToken().then((data) => {
                        alert(data.accessToken.toString())
                    })

                })
                .catch((error) => console.log(error));
        }
        else {
            LoginManager.logOut();
            this.setState({logged: false});
        }

    }
    onLogin = async() => {
        try {

            const result = await LoginManager.logInWithReadPermissions(['public_profile','email']);
            const tokenData = await AccessToken.getCurrentAccessToken();
            const token = tokenData.accessToken.toString();
            const credential =  firebase.auth.FacebookAuthProvider.credential(token);
            const user = await firebase.auth().signInWithCredential(credential);
            firebase.database().ref(`/users/${user.uid}`).set({
                displayName:user.displayName,
                email:user.email,
                photoURL:user.photoURL
            });
            console.log(user);


        }
        catch (error) {
            // do something here
            console.log(error.message);
        }
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <LoginButton
                    publishPermissions={["publish_actions"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                alert("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        alert(data.accessToken.toString())
                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => alert("logout.")}/>
                <TouchableOpacity onPress={this.onLogin}
                                  style={{
                                      padding: 10,
                                      marginTop: 10,
                                      backgroundColor: 'aqua',
                                      borderRadius: 5,
                                  }}
                >
                    <Text
                        style={{color: 'white'}}
                    >{this.state.logged ? 'Đăng xuất' : 'Đăng nhập'}</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

