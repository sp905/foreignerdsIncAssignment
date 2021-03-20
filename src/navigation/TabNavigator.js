import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {home, setting, profile} from '../images';
import {Home, Profile, Setting} from '../screens';
import {Image} from 'react-native';
const {Navigator, Screen} = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let icon;
          if (route.name === 'Home') {
            icon = home;
          } else if (route.name === 'Profile') {
            icon = profile;
          } else if (route.name === 'Setting') {
            icon = setting;
          }
          return <Image source={icon} style={{width: 20, height: 20}} />;
        },
      })}>
      <Screen name="Home" component={Home} />
      <Screen name="Setting" component={Setting} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};
export default TabNavigator;
