import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from '../components/FadeInImage';
import { RootStackParams } from '../navigation/StackNavigator';
import { capitalize } from '../utils/capitalize';
import usePokemon from '../hooks/usePokemon';
import Spinner from '../components/Spinner';
import PokemonDetails from '../components/PokemonDetails';

type Props = NativeStackScreenProps<RootStackParams, 'PokemonScreen'>;

const PokemonScreen = ({ navigation, route }: Props) => {
  const { pokemon, color } = route.params;
  const { top } = useSafeAreaInsets();
  const { isLoading, pokemonDetails } = usePokemon(pokemon.id);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ ...styles.backButton, top: top + 10 }}
        onPress={() => navigation.pop()}>
        <Icon name="arrow-back-outline" color="white" size={35} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View
          style={{
            ...styles.headerContainer,
            backgroundColor: color,
          }}>
          {/* Name */}
          <Text style={{ ...styles.pokemonName, top: top + 40 }}>
            {capitalize(pokemon.name) + '\n'}#{pokemon.id}
          </Text>

          {/* Pokeball */}
          <Image source={require('../assets/pokebola-blanca.png')} style={styles.pokeball} />

          {/* Image*/}

          <FadeInImage uri={pokemon.picture} style={styles.pokemonImg} />
        </View>

        {/* Details*/}
        {isLoading ? (
          <View style={styles.spinner}>
            <Spinner />
          </View>
        ) : (
          <PokemonDetails pokemon={pokemonDetails} />
        )}

        {/* Footer */}
        {!isLoading && (
          <View style={{ ...styles.footer, backgroundColor: color }}>
            <FadeInImage uri={pokemonDetails.sprites.front_default} style={styles.basicSprite} />
          </View>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 340,
    zIndex: 10,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    zIndex: 11,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -10,
    opacity: 0.7,
  },
  pokemonImg: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  basicSprite: {
    width: 120,
    height: 120,
  },
  footer: {
    marginTop: 20,
    paddingVertical: 0,
    alignItems: 'center',
    borderTopEndRadius: 100,
    borderTopStartRadius: 100,
  },
});

export default PokemonScreen;
