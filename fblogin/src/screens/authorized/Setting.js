import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {DrawerButton} from '../../components';
class Setting extends Component {

    static navigationOptions= ({navigation})=>{
        return({
            title:'Setting',
            headerLeft: <DrawerButton navigation={navigation}/>

        })
    };
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'}}>
                <Text>Setting</Text>
            </View>
        );
    }
}
export default  Setting;

