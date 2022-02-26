import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { PokemonDetails as IPokemonDetails } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
  pokemon: IPokemonDetails;
}

const PokemonDetails = ({ pokemon }: Props) => {
  return (
    <>
      {/* Types */}
      <View style={{ ...styles.container }}>
        <Text style={styles.title}>Types</Text>
        <View style={{ flexDirection: 'row' }}>
          {pokemon.types.map(({ type }) => (
            <Text style={{ ...styles.regularText, marginRight: 10 }} key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>Weight</Text>
        <Text style={styles.regularText}>{pokemon.weight / 10} kg</Text>
      </View>

      {/* Sprites */}
      <View style={{ ...styles.container }}>
        <Text style={styles.title}>Sprites</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FadeInImage uri={pokemon.sprites.front_default} style={styles.basicSprite} />
        <FadeInImage uri={pokemon.sprites.back_default} style={styles.basicSprite} />
        <FadeInImage uri={pokemon.sprites.front_shiny} style={styles.basicSprite} />
        <FadeInImage uri={pokemon.sprites.back_shiny} style={styles.basicSprite} />
      </ScrollView>

      {/* Abilities */}
      <View style={{ ...styles.container }}>
        <Text style={styles.title}>Abilities</Text>
        <View style={{ flexDirection: 'row' }}>
          {pokemon.abilities.map(({ ability }) => (
            <Text style={{ ...styles.regularText, marginRight: 10 }} key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      {/* Moves */}
      <View style={{ ...styles.container }}>
        <Text style={styles.title}>Moves</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {pokemon.moves.map(({ move }) => (
            <Text style={{ ...styles.regularText, marginRight: 10 }} key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>

      {/* Stats */}
      <View style={{ ...styles.container }}>
        <Text style={styles.title}>Stats</Text>
        <View>
          {pokemon.stats.map((stat, index) => (
            <View key={stat.stat.name + index} style={{ flexDirection: 'row' }}>
              <Text style={{ ...styles.regularText, marginRight: 10, width: 160 }}>
                {stat.stat.name}
              </Text>
              <Text style={{ ...styles.regularText, fontWeight: 'bold' }}>{stat.base_stat}</Text>
            </View>
          ))}
        </View>

        <View style={{ marginBottom: 20, alignItems: 'center' }}>
          <FadeInImage uri={pokemon.sprites.front_default} style={styles.basicSprite} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 18,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});

export default PokemonDetails;
