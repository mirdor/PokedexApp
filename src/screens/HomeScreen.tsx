import React, { useContext } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Spinner from '../components/Spinner';
import { ThemeContext } from '../context/theme/ThemeContext';
import usePokemonPaginated from '../hooks/usePokemonPaginated';
import globalStyles from '../styles/globalStyles';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  const renderPokemon = (uri: string) => {
    return <Image source={{ uri }} style={{ width: 100, height: 100 }} />;
  };

  return (
    <View>
      <Image
        source={require('../assets/pokebola.png')}
        style={{ ...globalStyles.pokeballBG, tintColor: colors.opaque }}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={simplePokemonList}
        renderItem={({ item }) => renderPokemon(item.picture)}
        keyExtractor={pokemon => pokemon.id}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={<Spinner />}
      />

      {/* <Text
        style={{
          ...globalStyles.title,
          ...globalStyles.globalMargin,
          top: top + 20,
          color: colors.text,
        }}>
        Pokedex
      </Text> */}
    </View>
  );
};

export default HomeScreen;
