import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../actions';
class Hello extends Component {
    render() {
        {console.log(this.props)}
        return (

            <View style={styles.container}>
                <Text style={styles.text}>Fetch</Text>
                <TouchableHighlight style={styles.button} onPress={() => this.props.fetchData()}>
                    <Text style={styles.buttonText}>Load Data</Text>
                </TouchableHighlight>
                <View style={styles.mainContent}>
                    {
                        this.props.data.isFetching && <Text>Loading</Text>
                    }
                    {
                        this.props.data.data.length ? (
                                this.props.data.data.map((person, i) => {
                                    return <View key={i}>
                                        <Text>Name: {person.name}</Text>
                                        <Text>Age: {person.age}</Text>
                                    </View>
                                })
                            ) : null
                    }
                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 100
    },
    text: {
        textAlign: 'center'
    },
    button: {
        height: 60,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b7eff'
    },
    buttonText: {
        color: 'white'
    },
    mainContent: {
        margin: 10,
    }
})

const mapStateToProps = (state) => {
    console.log(state);
    return {
        data: state.fetchReducer
    }
};

export default connect(mapStateToProps,{fetchData} )(Hello);

