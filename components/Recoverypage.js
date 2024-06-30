import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RecoveryPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.greenCircle}>
      <View style={styles.contentBoxRecovery}>
        <ImageBackground 
          source={require('../assets/fondo2.jpg')} 
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.recoveryTitle}>
            <Text style={styles.title}>RECUPERACIÓN</Text>
          </View>
          <View style={styles.iconRecovery}>
            <Image 
              source={require('../assets/recovery.png')}
              style={styles.icon}
            />
          </View>
          <View style={styles.inputsRecovery}>
            <TextInput 
              style={styles.input}
              placeholderTextColor="#000"
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  greenCircle: {
    flex: 1,
    backgroundColor: '#bbffe4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBoxRecovery: {
    width: '90%',
    height: '95%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  recoveryTitle: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconRecovery: {
    marginTop: 40,
  },
  icon: {
    width: 300,
    height: 300,
  },
  inputsRecovery: {
    marginTop: 50,
    alignItems: 'center',
    width: '100%',
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
});