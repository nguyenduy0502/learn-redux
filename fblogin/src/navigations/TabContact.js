import React from 'react';
import {Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ListContact from '../screens/authorized/home/contact/ListContact'
import EditContact from '../screens/authorized/home/contact/EditContact'
import ViewContact from '../screens/authorized/home/contact/ViewContact'
import AddContact from '../screens/authorized/home/contact/AddContact'
const TabContact = StackNavigator({
    List: {screen: ListContact, navigationOptions:{
        tabBarLabel: 'Contacts',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../img/icons/contact.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    }},
    Add: {screen: AddContact},
    Edit: {screen: EditContact},
    View: {screen: ViewContact},
});
const styles = {
    icon: {
        width: 32,
        height: 32
    }
};
export default TabContact;