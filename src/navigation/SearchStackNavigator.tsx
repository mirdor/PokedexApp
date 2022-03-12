import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import SearchScreen from "../screens/SearchScreen";
import PokemonScreen from "../screens/PokemonScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "./StackNavigator";

const Stack = createNativeStackNavigator<RootStackParams>();

const SearchStackNavigator = () => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name='HomeScreen' component={SearchScreen} />
      <Stack.Screen name='PokemonScreen' component={PokemonScreen} />
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;
