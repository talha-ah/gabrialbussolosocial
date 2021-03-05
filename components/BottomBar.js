import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeLight from '../assets/icons/home-light.png';
import HomeFill from '../assets/icons/home-fill.png';
import SearchLight from '../assets/icons/search-light.png';
import SearchFill from '../assets/icons/search-bold.png';
import PhoneLight from '../assets/icons/phone-circle-light.png';
import PhoneFill from '../assets/icons/phone-circle-fill.png';
import BellLight from '../assets/icons/bell-light.png';
import BellFill from '../assets/icons/bell-fill.png';
import UserLight from '../assets/icons/user-light.png';
import UserFill from '../assets/icons/user-fill.png';

import Home from '../screens/Home';
import Header from '../components/Header';

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  centerIconContainer: {
    position: 'absolute',
    bottom: 0,
    height: 82,
    width: 82,
    borderRadius: 82,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerIcon: {
    width: 82,
    height: 82,
    resizeMode: 'contain',
  },
});

const barStyle = {
  showLabel: false,
};

const Tab = createBottomTabNavigator();

export default function BottomBar(props) {
  return (
    <>
      <Header {...props} />
      <Tab.Navigator
        shifting="false"
        activeColor="#fff"
        initialRouteName="Home"
        tabBarOptions={barStyle}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? HomeFill : HomeLight}
                style={styles.icon}
              />
            ),
          }}
          component={Home}
        />
        <Tab.Screen
          name="Search"
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? SearchFill : SearchLight}
                style={styles.icon}
              />
            ),
          }}
          component={Home}
        />
        <Tab.Screen
          name="Phone"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.centerIconContainer}>
                <Image
                  source={focused ? PhoneFill : PhoneLight}
                  style={styles.centerIcon}
                />
              </View>
            ),
          }}
          component={Home}
        />
        <Tab.Screen
          name="Bell"
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? BellFill : BellLight}
                style={styles.icon}
              />
            ),
          }}
          component={Home}
        />
        <Tab.Screen
          name="User"
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? UserFill : UserLight}
                style={styles.icon}
              />
            ),
          }}
          component={Home}
        />
      </Tab.Navigator>
    </>
  );
}
