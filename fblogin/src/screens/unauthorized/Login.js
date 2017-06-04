import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import {connect} from 'react-redux';
import firebase from 'firebase';
import {loginSuccess} from '../../actions/Authenticate';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
var config = {
    apiKey: "AIzaSyDjM49Dg717OGaFtWsDbyUbUsTrTR3oyug",
    authDomain: "fblogin-91577.firebaseapp.com",
    databaseURL: "https://fblogin-91577.firebaseio.com",
    projectId: "fblogin-91577",
    storageBucket: "fblogin-91577.appspot.com",
    messagingSenderId: "726456553961"
};
firebase.initializeApp(config);
class Login extends Component {
    static navigationOptions = {
        header: false,

    }

    componentDidMount() {
        //console.log('ComponentDidMount', this.props);
    }

    state = {
        animating: false,
        error: null,


    };

    onLogin = async () => {
        try {
            this.setState({
                animating: true,
                error:null
            });
            const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
            if (result.isCancelled) {
                throw  new Error('Please sign in before continue')
            }
            const tokenData = await AccessToken.getCurrentAccessToken();
            const token = tokenData.accessToken.toString();
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            const user = await firebase.auth().signInWithCredential(credential);
            //
            this.setState({
                animating: false,
                error: null
            });
            this.props.loginSuccess(user);
            //console.log(user);


        }
        catch (error) {
            this.setState({
                animating: false,
                error: error.message
            });
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Login Screens
                </Text>
                <ActivityIndicator
                    color={"#ddd"}
                    size={"large"}
                    animating={this.state.animating}
                />
                {this.state.error ? <Text style={styles.error}>{this.state.error}</Text> : null}
                <TouchableOpacity onPress={this.onLogin}
                                  style={{
                                      padding: 10,
                                      marginTop: 10,
                                      backgroundColor: '#3b5998',
                                      borderRadius: 5,
                                  }}
                >
                    <Text style={{color: 'white'}}>Login width facebook</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'red',

    },
    error: {
        fontSize: 18,
        color: 'red',

    }
});

const mapStateToProps = (state) => {
    return {
        logged: state.Auth.loggedIn,
        user: state.Auth.user
    }
};
export default connect(mapStateToProps, {loginSuccess})(Login);