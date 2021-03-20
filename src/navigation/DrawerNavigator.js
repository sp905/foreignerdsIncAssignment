import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import {Profile,Setting }from '../screens';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {home, profile, setting} from '../images';

const Drawer = createDrawerNavigator();
const renderDrawerItem = ({text, icon, props}) => {
  let {navigation, state: {routeNames = [], index = 0} = {}} = props;
  let active = text === routeNames[index];
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(text)}
      style={{
        ...styles.renderDrawerItemStyle,
        backgroundColor: active ? '#f8f8f8' : 'white',
      }}>
      <Image source={icon} style={styles.imageStyle} />
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        itemStyle: {marginVertical: 5},
      }}
      drawerContent={props => (
        <View style={{paddingHorizontal: 10, paddingVertical: 15}}>
          {renderDrawerItem({text: 'Home', icon: home, props})}
          {renderDrawerItem({text: 'Setting', icon: setting, props})}
          {renderDrawerItem({text: 'Profile', icon: profile, props})}
        </View>
      )}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  renderDrawerItemStyle: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius:5
  },
  imageStyle: {width: 20, height: 20},
  textStyle: {paddingLeft: 15},
});
