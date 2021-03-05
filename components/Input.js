import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import GLOBALS from '../globals';

function Input(props) {
  const styles = StyleSheet.create({
    input: {
      height: 55,
      fontSize: 20,
      width: '100%',
      borderRadius: 10,
      fontWeight: '300',
      textAlign: 'left',
      paddingHorizontal: 12,
      fontFamily: 'Futura-Medium',
      color: GLOBALS.Styles.primaryText,
      backgroundColor: GLOBALS.Styles.input,
    },
  });
  return (
    <TextInput
      style={[styles.input, props.style]}
      value={props.values}
      editable={props.editable}
      maxLength={props.maxLength}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
      onChangeText={props.onChangeText}
      placeholderTextColor={GLOBALS.Styles.inputText}
    />
  );
}

export default Input;
