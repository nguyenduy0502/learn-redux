import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {connect} from 'react-redux';
import {getData} from '../actions';
class Hello extends Component {

    componentWillMount(){
        this.props.getData();
    }

    render() {
        {console.log(this.props)}
        return (
            <View style={{flex:1,marginTop:40}}>

                    <Text>{this.props.data.name}</Text>
                    <Text>{this.props.data.edu}</Text>

            </View>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        data:state.reducerEmployee

    }
};

export default connect(mapStateToProps,{getData})(Hello);

