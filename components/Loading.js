import * as React from 'react';
import Styles from '../globals/Styles';
import { StyleSheet, ActivityIndicator, Platform, View } from 'react-native';

function Loading(props) {
  return (
    <View style={[styles.root, props.style]}>
      <ActivityIndicator
        style={props.loadingStyle}
        color={props.color || Styles.primary}
        size={props.size || Platform.OS === 'ios' ? 'large' : 30}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
