import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';


export default function Scannerpage() {
  const navigation = useNavigation();


  const IconComponent = ({ path, color = "black", size = 50 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path fill={color} d={path} />
    </Svg>
  );

  const info = <IconComponent path="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" />;
  const address = <IconComponent path="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" />;
  const scanner = <IconComponent path="M1 21v-5h2v3h3v2zm17 0v-2h3v-3h2v5zM4 18V6h2v12zm3 0V6h1v12zm3 0V6h2v12zm3 0V6h3v12zm4 0V6h1v12zm2 0V6h1v12zM1 8V3h5v2H3v3zm20 0V5h-3V3h5v5z" color="white" />;
  const faq = <IconComponent path="M13 0c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6l4 4v-4c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm4.188 3h1.718l1.688 6h-1.5l-.407-1.5h-1.5L16.813 9H15.5zM18 4c-.1.4-.212.888-.313 1.188l-.28 1.312h1.187l-.282-1.313C18.113 4.888 18 4.4 18 4M3 10c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3v4l4-4h6c1.7 0 3-1.3 3-3v-6h-3c-1.9 0-3.406-1.3-3.906-3zm4.594 2.906c1.7 0 2.5 1.4 2.5 3c0 1.4-.481 2.288-1.281 2.688c.4.2.874.306 1.374.406l-.374 1c-.7-.2-1.426-.512-2.126-.813c-.1-.1-.275-.093-.375-.093C6.112 18.994 5 18 5 16c0-1.7.994-3.094 2.594-3.094m0 1.094c-.8 0-1.188.9-1.188 2c0 1.2.388 2 1.188 2c.8 0 1.218-.9 1.218-2s-.418-2-1.218-2" size={60} />;

  return (
    <SafeAreaView style={styles.greenCircle}>
      <View style={styles.contentBoxScanner}>
        <View style={styles.scannerTitle}>
          <Text style={styles.titleText}>ESCANEA TU ARTÍCULO</Text>
        </View>
        <View style={styles.scannerBotella}>
          <Image source={require('../assets/scannerbotella.jpg')} style={styles.image} />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ScannerResult')}>
            <Text style={styles.buttonText}>Scanner</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionBar}>
          <TouchableOpacity onPress={() => navigation.navigate('InfoRecyclingPage')}>{info}</TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Addresspage')}>{address}</TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Scanner')}>{scanner}</TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('DiscutionFAQ')}>{faq}</TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  greenCircle: {
    flex: 1,
    backgroundColor: '#bbffe4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBoxScanner: {
    width: '90%',
    height: '95%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scannerTitle: {
    marginTop: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scannerBotella: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: '70%',
    resizeMode: 'contain',
  },
  button: {
    marginTop: 20,
    width: 300,
    height: 60,
    padding: 10,
    backgroundColor: '#70B458',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  actionBar: {
    backgroundColor: '#8dd0dd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
    width: '100%',
  },
});