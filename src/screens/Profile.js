import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Header, List} from '../components';
import {useSelector} from 'react-redux';

const ProfileComponent = ({navigation}) => {
  let list = useSelector(value => value.listData) || [];

  return (
    <View style={{flex: 1}}>
      <Header title={'Profile'} navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.text}>Profile Screen</Text>
        {list.length ? (
          <List data={list} />
        ) : (
          <Text style={styles.listTextStyle}>
            See List After Enter From Setting
          </Text>
        )}
      </View>
    </View>
  );
};
export default ProfileComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
  text: {
    fontSize: 15,
    paddingBottom: 15,
  },
  listTextStyle: {paddingTop: 20},
});
