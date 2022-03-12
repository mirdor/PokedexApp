import React, { useContext } from "react";
import { ActivityIndicator } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const Spinner = ({ size = 50 }: { size?: number }) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return <ActivityIndicator size={size} color={colors.primary} />;
};

export default Spinner;
