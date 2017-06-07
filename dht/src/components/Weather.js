import React, {Component} from 'react';
import {
    View,
    Image
} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../actions/';
import {Spinner,Container,Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';
class Weather extends Component {

    componentWillMount() {
        this.props.fetchData();
        console.log('this.props', this.props);
    }

    render() {
        {
            if (this.props.loading) {
                return (
                    <View style={styles.containerIndicator}>
                        <Spinner color={'purple'}/>
                    </View>

                )
            }
        }

        return (
            <Container>
                <Content>
                    <Card >
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../img/icons/cloud.png')}/>
                                <Body>
                                <Text>{this.props.data.name}</Text>
                                <Text note>{this.props.data.main}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image/>
                        </CardItem>
                        <CardItem>
                            <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>12 Likes</Text>
                            </Button>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4 Comments</Text>
                            </Button>
                            <Text>11h ago</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default connect(state => {
    return {
        data: state.fetchReducer.data,
        loading: state.fetchReducer.fetching
    }
}, {fetchData})(Weather);