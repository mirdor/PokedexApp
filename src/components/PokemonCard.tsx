import React, { useContext, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";
import { SimplePokemon } from "../types/pokemonTypes";
import { ThemeContext } from "../context/ThemeContext";
import { FadeInImage } from "./FadeInImage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigation/StackNavigator";
import { useNavigation } from "@react-navigation/native";
import { capitalize } from "../utils/capitalize";

interface Props {
  pokemon: SimplePokemon;
}

type NavigationProps = NativeStackNavigationProp<RootStackParams, "HomeScreen">;

const PokemonCard = ({ pokemon }: Props) => {
  const isMounted = useRef(true);
  const navigation = useNavigation<NavigationProps>();

  const { width } = useWindowDimensions();
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate("PokemonScreen", { pokemon, color: "#222" })
      }
    >
      <View
        style={{
          ...styles.cardContainer,
          width: width * 0.4,
          backgroundColor: "#222",
        }}
      >
        <View>
          <Text style={styles.name}>
            {capitalize(pokemon.name)}
            {"\n#" + pokemon.id}
          </Text>
        </View>
        <View style={styles.pokeballContainer}>
          <Image
            source={require("../assets/pokebola-blanca.png")}
            style={styles.pokeball}
          />
        </View>
        <FadeInImage uri={pokemon.picture} style={styles.pokemonPicture} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    marginBottom: 25,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    top: 20,
    left: 10,
    color: "#eee",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    zIndex: 99,
  },
  pokeballContainer: {
    flex: 1,
    overflow: "hidden",
  },
  pokeball: {
    width: 80,
    height: 80,
    position: "absolute",
    bottom: -20,
    right: -20,
  },
  pokemonPicture: {
    width: 120,
    height: 120,
    position: "absolute",
    bottom: -5,
    right: -10,
  },
});

export default PokemonCard;
