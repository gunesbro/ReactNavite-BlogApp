import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { navigation,route } = this.props;
    const {detailTitle} = route.params;
    navigation.setOptions({
      title: detailTitle,
    })
    return (
      <View>
        <Text>  </Text>
      </View>
    );
  }
}
