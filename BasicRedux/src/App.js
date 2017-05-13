import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import ListTodo from './components/ListTodo';
export default class App extends Component {
    render() {
        return (
           <Provider store={store}>
               <View style={{flex:1}}>
                   <ListTodo/>

               </View>
           </Provider>
    )
        ;
    }
}

