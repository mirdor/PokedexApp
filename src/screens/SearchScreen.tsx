import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PokemonCard from "../components/PokemonCard";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";
import { ThemeContext } from "../context/ThemeContext";
import usePokemonSearch from "../hooks/usePokemonSearch";
import globalStyles from "../styles/globalStyles";
import { useState } from "react";
import { SimplePokemon } from "../types/pokemonTypes";

const SearchScreen = () => {
  const { top } = useSafeAreaInsets();

  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const { isFetching, simplePokemonList } = usePokemonSearch();

  const [term, setTerm] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    if (term.length === 0) return setFilteredPokemons([]);

    if (isNaN(Number(term))) {
      setFilteredPokemons(
        simplePokemonList.filter((pokemon) =>
          pokemon.name.includes(term.toLowerCase())
        )
      );
    } else {
      const pokemonById = simplePokemonList.find(
        (pokemon) => pokemon.id === term
      );
      setFilteredPokemons(pokemonById ? [pokemonById] : []);
    }
  }, [term]);

  if (isFetching) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Spinner />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <SearchBar
        onDebounce={(value) => setTerm(value)}
        style={{ top: top + 10 }}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredPokemons}
        numColumns={2}
        ListHeaderComponent={
          <Text
            style={{
              ...globalStyles.title,
              ...globalStyles.globalMargin,
              color: colors.text,
              marginTop: top + 70,
              marginBottom: top + 20,
            }}
          >
            {term}
          </Text>
        }
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        keyExtractor={(pokemon) => pokemon.id}
      />
    </View>
  );
};

export default SearchScreen;
