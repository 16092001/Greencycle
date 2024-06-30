import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { Svg, Path, G } from "react-native-svg";
import RecyclingItem from "./RecyclingItem";
import { useNavigation } from "@react-navigation/native";

import botellaplastico from "../assets/botellaplastico.png";
import bateria from "../assets/bateria.png";
import carton from "../assets/carton.png";
import fruit from "../assets/fruit.png";
import lata from "../assets/lata.png";
import microware from "../assets/microware.png";
import papel from "../assets/papel.png";
import vidrio from "../assets/vidrio.png";

export default function Informationpage() {
  const navigation = useNavigation();

  const IconComponent = ({ path, color = "black", size = 24 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path fill={color} d={path} />
    </Svg>
  );

  const IconSearch = ({ width = 24, height = 24, color = "currentColor" }) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
    >
      <G fill="none" stroke={color} strokeLinejoin="round" strokeWidth="4">
        <Path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z" />
        <Path
          strokeLinecap="round"
          d="M26.657 14.343A7.975 7.975 0 0 0 21 12a7.975 7.975 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"
        />
      </G>
    </Svg>
  );

  const info = (
    <IconComponent
      color="white"
      path="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
      size={50}
    />
  );
  const address = (
    <IconComponent
      path="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
      size={50}
    />
  );
  const scanner = (
    <IconComponent
      path="M1 21v-5h2v3h3v2zm17 0v-2h3v-3h2v5zM4 18V6h2v12zm3 0V6h1v12zm3 0V6h2v12zm3 0V6h3v12zm4 0V6h1v12zm2 0V6h1v12zM1 8V3h5v2H3v3zm20 0V5h-3V3h5v5z"
      size={50}
    />
  );
  const faq = (
    <IconComponent
      path="M13 0c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6l4 4v-4c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm4.188 3h1.718l1.688 6h-1.5l-.407-1.5h-1.5L16.813 9H15.5zM18 4c-.1.4-.212.888-.313 1.188l-.28 1.312h1.187l-.282-1.313C18.113 4.888 18 4.4 18 4M3 10c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3v4l4-4h6c1.7 0 3-1.3 3-3v-6h-3c-1.9 0-3.406-1.3-3.906-3zm4.594 2.906c1.7 0 2.5 1.4 2.5 3c0 1.4-.481 2.288-1.281 2.688c.4.2.874.306 1.374.406l-.374 1c-.7-.2-1.426-.512-2.126-.813c-.1-.1-.275-.093-.375-.093C6.112 18.994 5 18 5 16c0-1.7.994-3.094 2.594-3.094m0 1.094c-.8 0-1.188.9-1.188 2c0 1.2.388 2 1.188 2c.8 0 1.218-.9 1.218-2s-.418-2-1.218-2"
      size={60}
    />
  );

  const IconCloseSession = ({ width = 24, height = 24, color = "black" }) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <Path
        fill={color}
        d="M6 2h9a2 2 0 0 1 2 2v2h-2V4H6v16h9v-2h2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2"
      />
      <Path
        fill={color}
        d="M16.09 15.59L17.5 17l5-5l-5-5l-1.41 1.41L18.67 11H9v2h9.67z"
      />
    </Svg>
  );

  const IconUser = ({ width = 24, height = 24, color = "black" }) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <Path
        fill={color}
        fillRule="evenodd"
        d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
        clipRule="evenodd"
      />
    </Svg>
  );

  const recyclingItems = {
    metal: { name: "Metal", image: lata },
    carton: { name: "Cartón", image: carton },
    bateria: { name: "Batería", image: bateria },
    plastico: { name: "Plástico", image: botellaplastico },
    vidrio: { name: "Vidrio", image: vidrio },
    papel: { name: "Papel", image: papel },
    electronico: { name: "Electrónico", image: microware },
    organico: { name: "Orgánico", image: fruit },
  };

  return (
    <View style={styles.greenCircle}>
      <View style={styles.contentBoxInformation}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate("Profilepage")}
          >
            <IconUser width={30} height={30} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate("Login")}
          >
            <IconCloseSession width={30} height={30} color="blue" />
          </TouchableOpacity>
        </View>

        <View style={styles.informationTitle}>
          <Text style={styles.titleText}>Buscar por Item:</Text>
          <View style={styles.informationTitleInput}>
            <TextInput style={styles.input} placeholder="Botella de leche" />
            <TouchableOpacity style={styles.greenBox}>
              <IconSearch width={24} height={24} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.resultContent}>
          <Text style={styles.subtitleText}>Buscar por categoría:</Text>
          <View style={styles.containerGreenItems}>
            {Object.values(recyclingItems).map((item, index) => (
              <RecyclingItem key={index} item={item} />
            ))}
          </View>
        </ScrollView>
        <View style={styles.actionBar}>
          <TouchableOpacity
            onPress={() => navigation.navigate("InfoRecyclingPage")}
          >
            {info}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Addresspage")}>
            {address}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Scanner")}>
            {scanner}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("DiscutionFAQ")}>
            {faq}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  greenCircle: {
    flex: 1,
    backgroundColor: "#bbffe4",
    justifyContent: "center",
    alignItems: "center",
  },
  contentBoxInformation: {
    width: "90%",
    height: "95%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  informationTitle: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 20,
    width: "90%",
  },
  iconsContainer: {
    flexDirection: 'row',
    alignSelf: "flex-end",
    marginEnd: 12,
    marginTop: 8,
  },
  iconButton: {
    marginHorizontal: 5, 
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  informationTitleInput: {
    flexDirection: "row",
    width: "100%",
  },
  input: {
    width: "50%",
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
  },
  greenBox: {
    backgroundColor: "#87da6a",
    borderRadius: 25,
    padding: 5,
    marginLeft: 9,
  },
  resultContent: {
    flex: 1,
    width: "100%",
  },
  subtitleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
  containerGreenItems: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  actionBar: {
    backgroundColor: "#8dd0dd",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 5,
    width: "100%",
  },
});
