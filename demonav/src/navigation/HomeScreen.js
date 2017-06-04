import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home Screen',
        headerRight: <TouchableOpacity><Text>Click Me</Text></TouchableOpacity>,
        headerLeft: <TouchableOpacity><Text>Back</Text></TouchableOpacity>

    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={() => navigate('Detail', {nameProduct: 'Mi Chinh'})}>
                    <Text>Home Screen</Text>

                </TouchableOpacity>


            </View>
        );
    }
}

