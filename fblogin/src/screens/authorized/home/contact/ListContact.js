import React, {Component} from 'react';
import {
    Text,
    View,
    Button,

} from 'react-native';
import {DrawerButton} from '../../../../components';

class ListContact extends Component {
    static navigationOptions= ({navigation})=>{
       return({
           title:'List Contact',
           headerLeft: <DrawerButton navigation={navigation}/>,

       })
    };
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'}}>
                <Text>List Contact</Text>
                <Button onPress={()=>this.props.navigation.navigate('Add')} title={"Goto Add"}/>
            </View>
        );
    }
}
export default  ListContact;

