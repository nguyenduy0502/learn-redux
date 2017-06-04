import React from 'react';
import {Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ListGroup from '../screens/authorized/home/group/ListGroup'
import EditGroup from '../screens/authorized/home/group/EditGroup'
import ViewGroup from '../screens/authorized/home/group/ViewGroup'
import AddGroup from '../screens/authorized/home/group/AddGroup'
const TabGroup = StackNavigator({
    List: {screen: ListGroup,navigationOptions:{
        tabBarLabel: 'Group',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../img/icons/group.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    }},
    Add: {screen: AddGroup},
    Edit: {screen: EditGroup},
    View: {screen: ViewGroup},
});
const styles = {
    icon: {
        width: 32,
        height: 32
    }
};
export default TabGroup;
