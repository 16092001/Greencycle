import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, Modal, ScrollView } from 'react-native';
import { Svg, G, Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';


export default function AddressPage() {
  const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false);
  const [expandedInfo, setExpandedInfo] = useState(false);

  const toggleModal = () => setShowModal(!showModal);
  const toggleExpandInfo = () => setExpandedInfo(!expandedInfo);

  const IconComponent = ({ path, color = "black", size = 24 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path fill={color} d={path} />
    </Svg>
  );

  const info = <IconComponent  path="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" size={50} />;
  const address = <IconComponent color='white' path="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" size={50} />;
  const scanner = <IconComponent path="M1 21v-5h2v3h3v2zm17 0v-2h3v-3h2v5zM4 18V6h2v12zm3 0V6h1v12zm3 0V6h2v12zm3 0V6h3v12zm4 0V6h1v12zm2 0V6h1v12zM1 8V3h5v2H3v3zm20 0V5h-3V3h5v5z" size={50} />;
  const faq = <IconComponent path="M13 0c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6l4 4v-4c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm4.188 3h1.718l1.688 6h-1.5l-.407-1.5h-1.5L16.813 9H15.5zM18 4c-.1.4-.212.888-.313 1.188l-.28 1.312h1.187l-.282-1.313C18.113 4.888 18 4.4 18 4M3 10c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3v4l4-4h6c1.7 0 3-1.3 3-3v-6h-3c-1.9 0-3.406-1.3-3.906-3zm4.594 2.906c1.7 0 2.5 1.4 2.5 3c0 1.4-.481 2.288-1.281 2.688c.4.2.874.306 1.374.406l-.374 1c-.7-.2-1.426-.512-2.126-.813c-.1-.1-.275-.093-.375-.093C6.112 18.994 5 18 5 16c0-1.7.994-3.094 2.594-3.094m0 1.094c-.8 0-1.188.9-1.188 2c0 1.2.388 2 1.188 2c.8 0 1.218-.9 1.218-2s-.418-2-1.218-2" size={60} />;
  const IconSearch = ({ width = 24, height = 24, color = 'currentColor' }) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
    >
      <G
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <Path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z" />
        <Path
          strokeLinecap="round"
          d="M26.657 14.343A7.975 7.975 0 0 0 21 12a7.975 7.975 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"
        />
      </G>
    </Svg>
  );

  const Iconrecicle = () => (
    <Svg width="38" height="38" viewBox="0 0 38 38" fill="none">
      <G cx="19" cy="19" r="19" fill="#1A441D" />
      <Path
        d="M13.977 20.2061L16.6356 21.7409L13.132 15.533L6 15.604L8.66032 17.1379L6.52526 20.8331C6.30887 21.2072 6.08114 21.8133 6.397 22.3609L10.0215 28.6338C10.6706 29.7578 11.8014 29.7513 12.6203 29.7513H18.4129V23.0284H12.3463L13.977 20.2061ZM31.5505 19.3577L28.6537 14.344L22.8283 17.7047L25.8612 22.9552L22.601 22.9548V19.8878L18.9744 26.0238L22.6028 32.1607L22.6019 29.0916H26.8699C27.3026 29.0916 27.9422 28.9857 28.258 28.4389L31.8821 22.166C32.5308 21.0411 31.9601 20.0666 31.5505 19.3577ZM19.3334 10.8153L20.9629 13.6381L18.3047 15.1728L25.4363 15.243L28.9399 9.03421L26.2809 10.5694L24.1472 6.87508C23.9303 6.50054 23.5185 6 22.8872 6H15.6396C14.3404 6 13.7807 6.9819 13.3719 7.69085L10.4752 12.7046L16.3006 16.0658L19.3334 10.8153Z"
        fill="#70B458"
      />
    </Svg>
  );

  return (
    <View style={styles.greenG}>
      <View style={styles.contentBoxAddress}>
        <View style={styles.addressTitle}>
          <Text style={styles.title}>LOCALIZADORES DE CONTENEDORES:</Text>
          <View style={styles.addressTitleInput}>
            <TextInput
              style={styles.input}
              placeholder="Avenida 7 en, CR."
              placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.greenBox}>
            <IconSearch width={24} height={24} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.body}>
          <Image source={require('../assets/fondoMaps.jpg')} style={styles.mapBackground} />
          <View style={styles.r1}><Iconrecicle /></View>
          <View style={styles.r2}><Iconrecicle /></View>
          <View style={styles.r3}><Iconrecicle /></View>
          <TouchableOpacity style={styles.showDetailReciclePoint} onPress={toggleModal}>
            <Text style={styles.buttonText}>LOCALIZAR EL MAS{'\n'}CERCANO</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionBar}>
          <TouchableOpacity onPress={() => navigation.navigate('InfoRecyclingPage')}>{info}</TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Addresspage')}>{address}</TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Scanner')}>{scanner}</TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('DiscutionFAQ')}>{faq}</TouchableOpacity>
        </View>

        <Modal
          visible={showModal}
          transparent={true}
          animationType="slide"
        >
          <View style={[styles.modal, expandedInfo && styles.expandedModal]}>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={toggleModal}>
                <Text>Cerrar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleExpandInfo}>
                <Text>{expandedInfo ? "Contraer" : "Expandir"}</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.modalTitle}>Centro de Reciclaje</Text>
            <Text>Locación: 123 xxx Street, State college, PA</Text>
            <Image
              source={require('../assets/contenedorbasura.jpg')}
              style={styles.modalImage}
            />
            {expandedInfo && (
              <ScrollView style={styles.expandedInfo}>
                <Text style={styles.expandedInfoTitle}>Categorías de reciclaje</Text>
                <View style={styles.expandedInfoList}>
                  <Text>• Cartulina</Text>
                  <Text>• Papel mixto</Text>
                  <Text>• Plastico</Text>
                </View>
              </ScrollView>
            )}
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  greenG: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBoxAddress: {
    width: '90%',
    height: '95%',
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  addressTitle: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addressTitleInput: {
    flexDirection: 'row',
    marginTop: 15,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  greenBox: {
    backgroundColor: '#87da6a',
    borderRadius: 25,
    padding: 5,
    marginLeft: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',alignItems: 'stretch',
  },
  mapBackground: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  r1: { alignSelf: 'flex-start', marginLeft: 20 },
  r2: { alignSelf: 'center' },
  r3: { alignSelf: 'flex-end', marginRight: 20 },
  showDetailReciclePoint: {
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: '#87da6a',
    padding: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  actionBar: {
    backgroundColor: '#8dd0dd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  expandedModal: {
    height: '80%',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 10,
  },
  expandedInfo: {
    marginTop: 20,
  },
  expandedInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  expandedInfoList: {
    marginLeft: 10,
  },
});