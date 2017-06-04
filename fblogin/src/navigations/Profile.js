import {StackNavigator} from 'react-navigation';
import ProfileScreen from '../screens/authorized/Profile';
import React from 'react';
import {Image} from 'react-native';
const Profile = StackNavigator({
        Profile: {screen: ProfileScreen}
    },
    {
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../img/icons/contact.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    });
const styles = {
    icon: {
        width: 32,
        height: 32
    }
};

export default Profile;