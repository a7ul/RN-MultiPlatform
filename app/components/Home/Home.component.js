import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './Home.component.style';

class HomeView extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Test</Text>
      </View>
    );
  }
}

export default HomeView;
