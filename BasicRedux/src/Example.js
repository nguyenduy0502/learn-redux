import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,

} from 'react-native';
import api from './api/api';
export default class Example extends Component {

    constructor(props) {
        super(props);
        this.state={
            data:[],
            isFetching:false
        };
    }


    getData(){
        api().then((res) => {
            this.setState({
                data:res,
                isFetching:true
            })
        })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.getData.bind(this)}>
                    <Text>Click Me</Text>
                </TouchableOpacity>
                <View style={{flex:1}}>
                    {
                        this.state.isFetching===false && <Text>Loading ...</Text>
                    }
                    {
                        this.state.data.length ? (
                            this.state.data.map((employee,i)=>{
                        return <View key={i}>
                        <Text> Name :{employee.name} -  {employee.edu}</Text>
                        </View>
                    })
                            ): null
                    }
                </View>
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

