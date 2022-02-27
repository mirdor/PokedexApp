import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { PokemonDetails as IPokemonDetails } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
  pokemon: IPokemonDetails;
}

const PokemonDetails = ({ pokemon }: Props) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  return (
    <>
      {/* Types */}
      <View style={{ ...styles.container }}>
        <Title text="Types" />
        <View style={{ flexDirection: 'row' }}>
          {pokemon.types.map(({ type }) => (
            <ContentText content={type.name} key={type.name} margin />
          ))}
        </View>
        <Title text="Weight" />
        <ContentText content={`${pokemon.weight / 10} kg`} />
      </View>

      {/* Sprites */}
      <View style={{ ...styles.container }}>
        <Title text="Sprites" />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FadeInImage uri={pokemon.sprites.front_default} style={styles.basicSprite} />
        <FadeInImage uri={pokemon.sprites.back_default} style={styles.basicSprite} />
        <FadeInImage uri={pokemon.sprites.front_shiny} style={styles.basicSprite} />
        <FadeInImage uri={pokemon.sprites.back_shiny} style={styles.basicSprite} />
      </ScrollView>

      {/* Abilities */}
      <View style={{ ...styles.container }}>
        <Title text="Abilities" />
        <View style={{ flexDirection: 'row' }}>
          {pokemon.abilities.map(({ ability }) => (
            <ContentText content={ability.name} key={ability.name} margin />
          ))}
        </View>
      </View>

      {/* Moves */}
      <View style={{ ...styles.container }}>
        <Title text="Moves" />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {pokemon.moves.map(({ move }) => (
            <ContentText content={move.name} key={move.name} margin />
          ))}
        </View>
      </View>

      {/* Stats */}
      <View style={{ ...styles.container }}>
        <Title text="Stats" />
        <View>
          {pokemon.stats.map((stat, index) => (
            <View key={stat.stat.name + index} style={{ flexDirection: 'row' }}>
              <Text
                style={{ ...styles.regularText, marginRight: 10, width: 160, color: colors.text }}>
                {stat.stat.name}
              </Text>
              <ContentText content={String(stat.base_stat)} bold />
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

const Title = ({ text }: { text: string }) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  return <Text style={{ ...styles.title, color: colors.text }}>{text}</Text>;
};

interface ContentTextProps {
  content: string;
  bold?: boolean;
  margin?: boolean;
}

const ContentText = ({ content, bold = false, margin = false }: ContentTextProps) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  return (
    <Text
      style={{
        ...styles.regularText,
        fontWeight: bold ? 'bold' : 'normal',
        marginRight: margin ? 10 : 0,
        color: colors.text,
      }}>
      {content}
    </Text>
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
