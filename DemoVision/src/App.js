import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
export default class App extends Component {

    componentWillMount() {
        const vision = require('react-cloud-vision-api');
        vision.init({auth: 'AIzaSyDHUEKaBC_nzmwMwVjRncvHbv_nXulyziA'});
        const req2 = new vision.Request({
            image: new vision.Image({
                url: 'https://scontent-nrt1-1.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12353236_1220803437936662_68557852_n.jpg'
            }),
            features: [
                new vision.Feature('FACE_DETECTION', 1),
                new vision.Feature('LABEL_DETECTION', 10),
            ]
        });
        console.log(req2);

// send multi requests by one API call
     /*   vision.annotate(req2).then((res) => {
            // handling response for each request
            console.log(JSON.stringify(res.responses))
        }, (e) => {
            console.log('Error: ', e)
        })*/
    }

    render() {
        return (
            <View style={{flex: 1}}>


            </View>
        );
    }
}

