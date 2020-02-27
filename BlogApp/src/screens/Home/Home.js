import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button
} from 'react-native';
import PostCard from '../../components/PostCard';

export default class Home extends Component {
static navigationOptions ={
  title:'Homee'
}

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
            <PostCard navigation={navigation} />
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2
  },

});