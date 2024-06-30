import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../FirebaseConfig';

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Register() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Registro exitoso
        const user = userCredential.user;
        console.log('Usuario registrado:', user.email);
        Alert.alert('Éxito', 'Registro completado con éxito', [
          { text: 'OK', onPress: () => navigation.navigate('Login') }
        ]);
      })
      .catch((error) => {
        // Error en el registro
        const errorCode = error.code;
        const errorMessage = error.message;
        //console.error('Error de registro:', errorCode, errorMessage);
        Alert.alert('Error de registro', errorMessage);
      });
  };

  return (
    <View style={styles.greenCircle}>
      <View style={styles.contentBoxRegister}>
        <View style={styles.recoveryTitle}>
          <Text style={styles.titleText}>REGISTRO</Text>
        </View>
        <View style={styles.inputsRegister}>
          <TextInput 
            style={styles.input} 
            placeholder="Usuario" 
            value={username}
            onChangeText={setUsername}
          />
          <TextInput 
            style={styles.input} 
            placeholder="Correo electrónico" 
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput 
            style={styles.input} 
            placeholder="Crear contraseña" 
            secureTextEntry 
            value={password}
            onChangeText={setPassword}
          />
          <TextInput 
            style={styles.input} 
            placeholder="Confirmar contraseña" 
            secureTextEntry 
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  greenCircle: {
    backgroundColor: '#bbffe4',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBoxRegister: {
    width: '80%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
  },
  recoveryTitle: {
    alignSelf: 'flex-start',
    marginBottom: 30,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputsRegister: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },
  input: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    width: '60%',
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});