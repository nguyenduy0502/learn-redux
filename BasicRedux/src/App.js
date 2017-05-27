import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {Provider} from 'react-redux';
import store from './configStore';
import Employee from './components/Employee';
export default class App extends Component {
    render() {
        return (
          <Provider store={store}>
              <View style={{flex:1}}>
        <Employee/>

              </View>
          </Provider>
        );
    }
}

