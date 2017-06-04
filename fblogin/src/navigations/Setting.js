import {StackNavigator} from 'react-navigation';
import SettingScreen from '../screens/authorized/Setting';
import React from 'react';
import {Image} from 'react-native';
const Setting = StackNavigator({
        Profile: {screen: SettingScreen}
    },
    {
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../img/icons/gear.png')}
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
export default Setting;