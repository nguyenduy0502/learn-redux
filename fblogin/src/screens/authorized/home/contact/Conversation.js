import React, {Component} from 'react';
import {
    Text,
    View,
    ListView,
    Image,
    ActivityIndicator,


} from 'react-native';
import {connect} from 'react-redux';
import {findRoomByUser, sendMessage} from '../../../../actions'
import {GiftedChat} from 'react-native-gifted-chat';
class Conversation extends Component {

    static navigationOptions = (props) => {
        const {navigation} = props;
        const {state,} = navigation;
        return {
            tabBarVisible: false,
            title: state.params.friend.displayName
        }
    };

    componentWillMount() {
        console.log(this.props);
        const {me} = this.props;
        const {friend} = this.props;
        this.props.findRoomByUser(me, friend);
    }

    onSend = (messages = []) => {

        console.log('onsend', messages);
        const {me, roomKey} = this.props;
        const {friend} = this.props.navigation.state.params;
        this.props.sendMessage(me, friend, messages[0].text, roomKey);

    };

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.containerIndicator}>
                    <ActivityIndicator
                        animating={true}
                        size={'large'}
                        color={'purple'}
                    />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <GiftedChat
                    messages={this.props.messages}
                    user={{
                        _id: this.props.me.uid
                    }}
                    onSend={this.onSend.bind(this)}
                />
            </View>
        );
    }
}
const styles = {
    containerIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
    }
};
export default  connect(state => ({
    me: state.Auth.user,
    loading: state.chat.loading,
    messages: state.chat.messages,
    roomKey: state.chat.roomKey
}), {findRoomByUser, sendMessage})(Conversation);

