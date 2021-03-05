import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import GLOBALS from '../globals';

const styles = StyleSheet.create({
  container: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    borderBottomColor: GLOBALS.Styles.primaryDark,
    backgroundColor: GLOBALS.Styles.backgroundColor,
  },
  burger: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  logoContainer: {
    width: '70%',
    height: '100%',
  },
  logo: {
    width: '110%',
    height: '110%',
    resizeMode: 'contain',
  },
  extra: {
    width: 40,
    height: 40,
  },
});

export default function Header(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={props.disabled}
        onPress={() => props.navigation.toggleDrawer()}
      >
        <Image
          source={require('../assets/icons/burger.png')}
          style={styles.burger}
        />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/images/phone-text-right.png')}
        />
      </View>
      <View style={styles.extra} />
    </View>
  );
}
