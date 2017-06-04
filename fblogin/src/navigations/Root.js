import {StackNavigator} from 'react-navigation'
import Login from '../screens/unauthorized/Login'
import Authorized  from './Authorized';

const Root = StackNavigator(
    {

        Unauthorized: {screen: Login},
        Authorized: {
            screen: Authorized,
            navigationOptions: {
                header: null

            }
        }

    },
    {
        headerMode: 'screen',

    }
);
export default Root;