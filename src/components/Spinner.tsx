import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';

const Spinner = () => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return <ActivityIndicator size={50} color={colors.primary} />;
};

export default Spinner;
