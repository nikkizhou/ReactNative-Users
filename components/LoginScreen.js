import { auth } from '../firebase';
import React, { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [state, setState] = useState({ email: '', password: '' })

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => navigation.replace(authUser ? 'Home' : 'Login'));
  //   return unsubscribe;
  // }, []);
  
  const signIn = () => {
    signInWithEmailAndPassword(auth, state.email, state.password)
      .catch((err) => alert(err));
    auth.currentUser && navigation.replace('Home')
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={state.email}
        onChangeText={(val) => setState({ ...state, email: val })}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={state.password}
        onChangeText={(val) => setState({ ...state, password: val })}
        maxLength={15}
        secureTextEntry={true}
      />
      <Button
        color="#3740FE"
        title="Sign in"
        onPress={() => signIn()}
      />
      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('Register')}>
        Don't have account? Click here to signup
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})

export default LoginScreen;
