import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../FirebaseConfig'
import { Alert } from 'react-native';


export default function Login() {

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Inicio de sesión exitoso
        const user = userCredential.user;
        console.log('Usuario logueado:', user.email);
        navigation.navigate('InfoRecyclingPage');
      })
      .catch((error) => {
        // Error en el inicio de sesión
        const errorCode = error.code;
        const errorMessage = error.message;
        //console.error('Error de inicio de sesión:', errorCode, errorMessage);
        Alert.alert('Error de inicio de sesión', errorMessage);
      });

  };

  return (
    <View style={styles.greenCircle}>
      <View style={styles.contentBoxLogin}>
        <ImageBackground 
          source={require('../assets/fondologin.jpg')} 
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.titleLogin}>
            <Text style={styles.title}>GREEN CICLE</Text>
          </View>
          <View style={styles.inputsLogin}>
            <TextInput 
              style={styles.input} 
              placeholder='Correo electrónico'
              placeholderTextColor="#000"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput 
              style={styles.input} 
              placeholder='Contraseña'
              placeholderTextColor="#000"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.linksDirections}>
            <TouchableOpacity onPress={() => navigation.navigate('Registerpage')}>
              <Text style={styles.link}>Registro</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Recoverypage')}>
              <Text style={styles.link}>Recuperar la contraseña</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  greenCircle: {
    backgroundColor: '#bbffe4',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBoxLogin: {
    width: '90%',
    height: '95%',
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  titleLogin: {
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputsLogin: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  button: {
    width: '60%',
    height: 70,
    borderRadius: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  linksDirections: {
    alignItems: 'center',
  },
  link: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});