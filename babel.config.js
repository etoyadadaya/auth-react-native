module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      "module:metro-react-native-babel-preset",
    ],
    plugins: [
      "nativewind/babel",
      ["module-resolver",
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@assets": "./src/assets",
          "@hooks": "./src/hooks",
          "@layouts": "./src/components/layouts",
          "@screens": "./src/components/screens",
          "@ui": "./src/components/ui",
          "@services": "./src/services",
          "@types": "./src/types",
        }
      }],
    ],
  };
};
