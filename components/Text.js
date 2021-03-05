import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

import GLOBALS from '../globals';

function TextComponent(props) {
  const styles = StyleSheet.create({
    text: {
      lineHeight: 24,
      fontSize: props.fontSize || 16,
      textAlign: props.textAlign || 'center',
      fontWeight: '300',
      fontFamily: 'Futura-Medium',
      color: props.color || GLOBALS.Styles.black,
    },
  });
  return <Text style={[styles.text, props.style]}>{props.text}</Text>;
}

export default TextComponent;
