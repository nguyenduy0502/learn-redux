import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ListView,

} from 'react-native';
import api from './api/api';
export default class Example extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state={
            dataSource : ds.cloneWithRows([]),
        };
    }


    componentWillMount() {


    }
    getData(){
        api().then((res) => {
            console.log(res);
            this.setState({
                dataSource:this.state.dataSource.cloneWithRows(res)
            })
        })
            .catch((err) => console.log(err));
    }
    renderRow(item){
        return(
            <View>
                <Text>{item.name -  item.age}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.getData.bind(this)}>
                    <Text>Click Me</Text>
                </TouchableOpacity>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections={true}
                />
            </View>

        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
        marginTop:40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width:200,
        height:50,
        backgroundColor:'aqua',
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center'

    }
});

