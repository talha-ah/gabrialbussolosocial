import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

import GLOBALS from '../globals';

const DrawerMenuItem = (props) => {
  const itemStyles = StyleSheet.create({
    itemContainer: {
      width: '100%',
      borderRadius: 6,
      paddingVertical: 14,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 24,
      justifyContent: 'center',
    },
    item: {
      fontSize: 20,
      opacity: 0.6,
      fontWeight: '300',
      fontFamily: 'Futura-Medium',
    },
  });

  return (
    <TouchableOpacity
      style={itemStyles.itemContainer}
      onPress={() => {
        props.changeActive(props.item);
        if (!props.NoNavigate) {
          props.navigation.navigate(props.route);
        }
      }}
    >
      <Text style={itemStyles.item}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default function Drawer(props) {
  const [active, setActive] = React.useState('Home');
  return (
    <View style={styles.drawer}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/phone-text-below.png')}
            style={styles.logo}
          />
          <TouchableOpacity
            style={styles.backArrowContainer}
            onPress={() => props.navigation.toggleDrawer()}
          >
            <Image
              source={require('../assets/icons/back-arrow.png')}
              style={styles.backArrow}
            />
          </TouchableOpacity>
        </View>
        <DrawerMenuItem
          {...props}
          route="Home"
          title="SAIR"
          active={active}
          setActive={setActive}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    borderRadius: 50,
    backgroundColor: GLOBALS.Styles.backgroundColor,
  },
  scrollview: {
    flex: 1,
    paddingTop: 20,
  },
  logoContainer: {
    height: '20%',
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  backArrowContainer: {
    top: 4,
    right: 6,
    width: 35,
    height: 35,
    position: 'absolute',
  },
  backArrow: {
    width: 35,
    height: 35,
  },
});
