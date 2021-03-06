import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import { ThemeContext } from "../context/ThemeContext";

import SearchStackNavigator from "./SearchStackNavigator";
import { Ionicons } from "@expo/vector-icons";

export type RootBottomTabParams = {
  SearchScreen: undefined;
  StackNavigator: undefined;
};

const Tab = createBottomTabNavigator<RootBottomTabParams>();

const BottomTabNavigator = () => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: { marginBottom: 5 },
        tabBarStyle: {
          height: 50,
        },
      }}
      sceneContainerStyle={{ backgroundColor: colors.background }}
    >
      <Tab.Screen
        name='StackNavigator'
        options={{
          tabBarLabel: "List",
          tabBarIcon: ({ color }) => (
            <Ionicons name='list-outline' color={color} size={20} />
          ),
        }}
        component={StackNavigator}
      />
      <Tab.Screen
        name='SearchScreen'
        options={{
          tabBarLabel: "Search Pokemon",
          tabBarIcon: ({ color }) => (
            <Ionicons name='search-outline' color={color} size={20} />
          ),
        }}
        component={SearchStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
