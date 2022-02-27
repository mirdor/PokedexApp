import React, { useContext } from 'react';
import { Image, FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PokemonCard from '../components/PokemonCard';
import Spinner from '../components/Spinner';
import { ThemeContext } from '../context/theme/ThemeContext';
import usePokemonPaginated from '../hooks/usePokemonPaginated';
import globalStyles from '../styles/globalStyles';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  const renderPokemon = (pokemon: SimplePokemon) => {
    return <PokemonCard pokemon={pokemon} />;
  };

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={{ ...globalStyles.pokeballBG, tintColor: colors.opaque }}
      />

      <View style={{ alignItems: 'center' }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={simplePokemonList}
          numColumns={2}
          ListHeaderComponent={
            <Text
              style={{
                ...globalStyles.title,
                ...globalStyles.globalMargin,
                color: colors.text,
                top: top + 20,
                marginBottom: top + 40,
                textAlign: 'center',
              }}>
              Pokedex
            </Text>
          }
          renderItem={({ item }) => renderPokemon(item)}
          keyExtractor={pokemon => pokemon.id}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={<Spinner />}
        />
      </View>
    </>
  );
};

export default HomeScreen;
