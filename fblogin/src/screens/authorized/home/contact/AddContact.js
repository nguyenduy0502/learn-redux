import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

class AddContact extends Component {
    static navigationOptions={
        tabBarVisible:false
    };
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'}}>
                <Text>Profile</Text>
            </View>
        );
    }
}
export default  AddContact;

