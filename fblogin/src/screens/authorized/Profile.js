import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {DrawerButton} from '../../components';
class Profile extends Component {

    static navigationOptions= ({navigation})=>{
        return({
            title:'Profile',
            headerLeft: <DrawerButton navigation={navigation}/>

        })
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
export default  Profile;

