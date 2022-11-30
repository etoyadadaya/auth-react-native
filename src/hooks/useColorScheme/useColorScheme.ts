import {useColorScheme as _useColorScheme } from 'react-native';

export const useColorScheme = (): boolean => {
  return _useColorScheme() === "dark";
}