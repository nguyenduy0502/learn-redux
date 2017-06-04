import React, {Component} from 'react';
import {addNavigationHelpers} from 'react-navigation';
import Root from './navigations/Root';
import {connect} from 'react-redux';

class AppNavigator extends Component {

    render() {
        return (
            <Root navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav
            })}/>
        );
    }
}

export default connect(state=>({nav:state.nav}))(AppNavigator);