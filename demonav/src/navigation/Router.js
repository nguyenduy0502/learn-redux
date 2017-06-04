import {StackNavigator} from 'react-navigation';
import React from 'react';
import HomeScreen from './HomeScreen';
import Detail from './Detail';
const Router = StackNavigator(
    {
        HomeScreen: {screen: HomeScreen},
        Detail: {screen: Detail}
    },
    {
        modal:'modal'
    });
export default Router;