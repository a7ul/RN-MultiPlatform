import React,{Component} from 'react';
import styles from './Home.component.style';
import {View,Text} from 'react-native';

class HomeView extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Test</Text>
      </View>
    );
  }
}

export default HomeView;
