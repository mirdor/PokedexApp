import { useEffect, useRef, useState } from "react";
import { pokemonApi } from "../api/pokemonAPI";
import {
  PokemonPaginatedResponse,
  Result,
  SimplePokemon,
} from "../types/pokemonTypes";

const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    []
  );

  const loadPokemons = async () => {
    const res = await pokemonApi.get<PokemonPaginatedResponse>(
      "https://pokeapi.co/api/v2/pokemon?limit=1200"
    );
    mapPokemonList(res.data.results);
  };

  const mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
      const urlParts = url.split("/");
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return { id, picture, name };
    });
    setSimplePokemonList(newPokemonList);
    setIsFetching(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    simplePokemonList,
    isFetching,
  };
};

export default usePokemonSearch;
