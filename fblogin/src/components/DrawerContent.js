import React, {Component} from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import {connect} from 'react-redux';
import {DrawerItems} from 'react-navigation';
class DrawerContent extends Component {
    render() {
        const {container, profile,name, avatar} = styles;
        const {user} = this.props;
        console.log(user);
        return (
            <View style={container}>
                <View style={profile}>
                    <Image source={{uri: user.photoURL}}
                           style={avatar}/>
                    <Text style={name}>{user.displayName || ''}</Text>
                </View>

              <DrawerItems {...this.props}/>

            </View>
        );
    }
}
const styles = {
    container: {
        flex: 1
    },
    avatar: {
        width:140,
        height:140,
        borderRadius:70,
        marginBottom:10,

    },
    profile: {
        height:300,
        backgroundColor:'purple',
        justifyContent:'center',
        alignItems:'center',

    },
    name:{
        fontSize:18,
        color:'white',
        fontWeight:"500",

    }
};

export default connect(state=>({
    user:state.Auth.user
}))(DrawerContent);

