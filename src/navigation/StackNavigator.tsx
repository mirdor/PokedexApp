import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { ThemeContext } from "../context/ThemeContext";
import PokemonScreen from "../screens/PokemonScreen";
import { SimplePokemon } from "../types/pokemonTypes";

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: { pokemon: SimplePokemon; color: string };
};

const Stack = createNativeStackNavigator<RootStackParams>();

const StackNavigator = () => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='PokemonScreen' component={PokemonScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
