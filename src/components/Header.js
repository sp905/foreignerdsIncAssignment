import React, {useCallback} from 'react';
import {View, StyleSheet, Text, Keyboard, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {menuIcon} from '../images';
const CustomHeader = ({title, navigation}) => {
  const clickMenu = useCallback(() => {
    navigation.toggleDrawer && navigation.toggleDrawer();
    Keyboard.dismiss();
  }, []);
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity onPress={clickMenu} style={styles.menuStyle}>
        <Image source={menuIcon} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  menuStyle: {paddingLeft: 18, paddingTop: 15},
  textStyle: {
    fontSize: 15,
    paddingRight:15,
  },
});
