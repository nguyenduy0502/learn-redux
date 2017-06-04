import React from 'react';
import {Image} from 'react-native';
import {TabNavigator} from 'react-navigation';
import TabContact from './TabContact';
import TabChat from './TabChat';
import TabGroup from './TabGroup';

const Home = TabNavigator({

    TabContact: {screen: TabContact,},
    TabChat: {screen: TabChat},
    TabGroup: {screen: TabGroup},

}, {
    tabBarOptions: {
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        //activeBackgroundColor:'yellow'

    },
    navigationOptions:{
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../img/icons/home.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    }
});
const styles={
    icon:{
        width:24,
        height:24
    }
};

export default Home;