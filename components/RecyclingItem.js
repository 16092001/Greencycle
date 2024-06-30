import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native';


export default function RecyclingItem({ item }) {
  const navigation = useNavigation();

  return (
    <View style={styles.recyclingItem}>
      <Text style={styles.text}>{item.name}</Text>
      <Image
        source={item.image}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  recyclingItem: {
    width: (windowWidth - 60) / 3, // 4 elementos por fila, con 15px de margen entre ellos
    marginBottom: 20,
    alignItems: 'center', // Esto reemplaza text-align: center
    backgroundColor: '#70b458',
    borderRadius: 20,
    paddingBottom: 20,
  },
  text: {
    textAlign: 'center',
  },
  image: {
    width: 60,
    height: 100,
  },
});