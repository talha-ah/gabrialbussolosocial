import * as React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import GLOBALS from '../globals';

const styles = StyleSheet.create({
  button: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: GLOBALS.Styles.borderRadius,
  },
  buttonText: {
    fontSize: 26,
    fontWeight: '300',
    fontFamily: 'Futura-Medium',
    color: GLOBALS.Styles.buttonText,
  },
});

export default function Button(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <LinearGradient
        colors={[GLOBALS.Styles.primary, GLOBALS.Styles.primaryDark]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.button, props.style]}
      >
        {props.loading ? (
          <ActivityIndicator color={GLOBALS.Styles.buttonText} size="large" />
        ) : (
          <Text style={styles.buttonText}>{props.text}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}
