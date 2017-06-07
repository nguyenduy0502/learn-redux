import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    ListView,
    ActivityIndicator,
    TouchableOpacity,
    Image


} from 'react-native';
import {DrawerButton} from '../../../../components';
import {connect} from 'react-redux';
import {fetchListContact} from '../../../../actions';
class ListContact extends Component {
    static navigationOptions = ({navigation}) => {
        return ({
            title: 'List Contact',
            headerLeft: <DrawerButton navigation={navigation}/>,
            headerBackTitle:null

        })
    };

    componentWillMount() {
        this.props.fetchListContact(this.props);
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({contacts}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(contacts);
    }

    renderRow = (item) => {
        console.log('item', item);
        return (
            <TouchableOpacity onPress={this.onRowPressed.bind(this,item)}
                              style={styles.row}>
                <Image style={styles.avatar} source={{uri: item.photoURL}}/>
                <Text style={styles.name}>{item.displayName}</Text>
            </TouchableOpacity>
        );
    };
    onRowPressed=(friend)=>{

        this.props.navigation.navigate('Conversation',{friend})
    };

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.containerIndicator}>
                    <ActivityIndicator size={'large'} color={'green'}
                                       animating/>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }
}
const styles = {
    container: {
        flex: 1,

    },
    containerIndicator:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },
    row: {
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center',
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#000',

    },
    avatar: {
        width: 100,
        height: 100,
        borderWidth:1,


    },
    name: {
        fontSize: 18,
        paddingLeft: 15,
        color: '#000',

    },
};
export default  connect(state => (
    {
        contacts: state.contact.contacts,
        loading: state.contact.loading,
        me:state.Auth.user
    }), {fetchListContact})(ListContact);

