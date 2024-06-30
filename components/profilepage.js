import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfilePage() {
  const navigation = useNavigation();

  const [profilePicture, setProfilePicture] = useState(' ');

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const pictureUrl = data.results[0].picture.large;
        setProfilePicture(pictureUrl);
      } catch (error) {
        console.error('Error fetching profile picture:', error);
      }
    };
    fetchProfilePicture();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.greenCircle}>
      <View style={styles.contentBoxProfile}>
        <View style={styles.profileTitle}>
          <Text style={styles.title}>Perfil</Text>
        </View>
        <View style={styles.profilePicture}>
          <Image source={{ uri: profilePicture }} style={styles.profileImage} />
          <Text style={styles.changeText}>Cambiar</Text>
        </View>
        <View style={styles.inputsProfile}>
          <TextInput style={styles.input} placeholder="Modificar nombre" />
          <TextInput style={styles.input} placeholder="Modificar correo electrónico" />
        </View>
        <View style={styles.settingProfile}>
          <TouchableOpacity style={styles.settingButton}>
            <Text style={styles.settingButtonText}>Configuración de privacidad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingButton}>
            <Text style={styles.settingButtonText}>Historial de actividades</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputsProfile}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  greenCircle: {
    flexGrow: 1,
    backgroundColor: '#bbffe4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBoxProfile: {
    width: '90%',
    height: '95%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
  },
  profileTitle: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profilePicture: {
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  changeText: {
    marginTop: 10,
    fontSize: 16,
  },
  inputsProfile: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  settingProfile: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  settingButton: {
    width: '80%',
    height: 70,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 5,
  },
  settingButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveButton: {
    width: '50%',
    height: 70,
    borderRadius: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 20,
  },
});