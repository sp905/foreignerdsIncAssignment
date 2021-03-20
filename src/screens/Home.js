import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Header} from '../components';
const HomeComponent = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header title={'Home'} navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
      </View>
    </View>
  );
};
export default HomeComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
  },
});
