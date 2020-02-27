import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

export default class PostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={{marginBottom:5}}>
                <ImageBackground
                    style={styles.img}
                    source={{ uri: 'https://i.pinimg.com/originals/af/0a/67/af0a67acb1da6998995b122e169725d1.png' }}>
                    <View style={{ marginTop: 105, backgroundColor: 'rgba(1,1,8,0.5)', padding: 5, }}>
                        <View>
                            <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Lorem Ipsum sit dolor amet</Text>
                            <Text style={{ color: 'white', fontSize: 12 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla aliquet ligula,
                                eu accumsan tortor tincidunt ut...
                  </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, color: 'white', marginVertical: 8, textAlign: 'right' }}>written by gunesbro</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.contentSection}>
                    <View>
                        <TouchableOpacity 
                        onPress={()=> navigation.navigate('HomeDetail',{detailTitle:'Başlık'})} 
                        style={{ backgroundColor: '#5c5ceb' }}>
                            <View>
                                <Text style={{ textAlign: 'center', padding: 10, color: 'white', fontWeight: 'bold' }}>Okumaya Devam Et</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    img: {
        height: 200,
        width: '100%',
    },
    contentSection: {
    }
});
