import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
export default class Detail extends Component {
    static navigationOptions=({navigation})=>({
        title:`Detail ${navigation.state.params.nameProduct}`
    });
    render() {
        return (
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Text>Details</Text>
                

            </View>
        );
    }
}

