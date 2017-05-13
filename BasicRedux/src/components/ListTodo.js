import React, {Component} from 'react';
import {
    Text,
    View,
    ListView,
    StyleSheet
} from 'react-native';
import {loadData, loadDataWorker, loadDesign} from '../actions';
import {connect} from 'react-redux';

class ListTodo extends Component {

    componentWillMount() {
        this.props.loadData();
        this.props.loadDataWorker();
        this.props.loadDesign();
        this.createDataSource(this.props);

    }

    createDataSource({data}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(data);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    renderRow(item) {
        return (
            <Text>{item.content}</Text>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections
                />

                <View style={styles.containerText}>
                    <Text>{this.props.dataWorker.name !== undefined ? this.props.dataWorker.name : 'chua load'}</Text>
                    <Text>{this.props.dataWorker.age}</Text>
                </View>
                <View style={styles.containerInfo}>
                    <Text>{this.props.dataDesign.name}</Text>
                    <Text>{this.props.dataDesign.age}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',

    },
    containerText: {
        flex: 1,
        backgroundColor: 'blue'
    },
    containerInfo: {
        flex: 1,
        backgroundColor: 'aqua'
    }

});
const mapStateToProps = (state) => {
    return {
        data: state.TodoListReducer,
        dataWorker: state.WorkerReducer,
        dataDesign: state.DesignReducer,

    }
};
export default connect(mapStateToProps, {loadData, loadDataWorker, loadDesign})(ListTodo);

