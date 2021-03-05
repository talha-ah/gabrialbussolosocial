import * as React from 'react';
import { StyleSheet, View, Text, Image, Alert } from 'react-native';

import GLOBALS from '../globals';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Login(props) {
  function onLogin() {
    props.setLoading(true);
    setTimeout(() => {
      props.setLoading(false);
      props.setAuth(true);
    }, 1000);
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/phone-text-right.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.login}>LOGIN</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Telefone, e-mail ou nome de usuario" />
        <Input placeholder="Senha" />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="ENTRAR"
          onPress={onLogin}
          loading={props.loading}
          disabled={props.loading}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.info1}>OU</Text>
        <Text style={styles.info2}>Criar uma nova conta</Text>
        <Text
          style={styles.info3}
          onPress={() => Alert.alert('Not implemented yet')}
        >
          Esqueceu a senha?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: GLOBALS.Styles.backgroundColor,
  },
  logoContainer: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  loginContainer: {
    height: '12%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    fontSize: 40,
    fontWeight: '300',
    fontFamily: 'Futura-Medium',
    color: GLOBALS.Styles.primaryText,
  },
  inputContainer: {
    height: '22%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    height: '15%',
    width: '100%',
    justifyContent: 'center',
  },
  infoContainer: {
    width: '100%',
    alignItems: 'center',
  },
  info1: {
    fontSize: 40,
    fontWeight: '300',
    fontFamily: 'Futura-Medium',
    color: GLOBALS.Styles.primaryText,
  },
  info2: {
    fontSize: 26,
    marginTop: 5,
    fontWeight: '300',
    fontFamily: 'Futura-Medium',
    color: GLOBALS.Styles.primaryText,
  },
  info3: {
    fontSize: 20,
    marginTop: 25,
    fontWeight: '300',
    fontFamily: 'Futura-Medium',
    color: GLOBALS.Styles.primaryText,
  },
});
