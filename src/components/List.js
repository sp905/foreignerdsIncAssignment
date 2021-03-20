import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
const renderItem = ({item}) => {
  return (
    <View style={styles.itemContainerStyle}>
      <Text  style={styles.cardTextStyle}>{item.value}</Text>
    </View>
  );
};
const keyExtractor = item => {
    return item._id;
  };
export default List = ({data = [], extraData}) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      extraData={extraData}
      keyExtractor={keyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  cardTextStyle: {color: 'white', fontSize: 15},
  itemContainerStyle: {
    alignSelf: 'center',
    paddingHorizontal: 25,
    paddingVertical: 12,
    width: '95%',
    borderRadius: 10,
    marginBottom:20,
    backgroundColor: '#4bdc1bad',
  },
});
