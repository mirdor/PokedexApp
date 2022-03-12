import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  StyleProp,
  ViewStyle,
} from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { useState } from "react";
import useDebounceValue from "../hooks/useDebounceValue";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onDebounce: (value: string) => void;
  style?: StyleProp<ViewStyle>;
};

const SearchBar = ({ style, onDebounce }: Props) => {
  const [textValue, setTextValue] = useState("");
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const debouncedValue = useDebounceValue(textValue);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue]);

  return (
    <View
      style={{
        ...styles.searchBox,
        ...(style as any),
        backgroundColor: colors.searchBarBG,
      }}
    >
      <TextInput
        placeholder='Search pokemon...'
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={textValue}
        onChangeText={setTextValue}
      />
      <Ionicons name='search-outline' size={30} color='grey' />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    paddingHorizontal: 10,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    elevation: 12,
    position: "absolute",
    zIndex: 999,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
  },
});

export default SearchBar;
