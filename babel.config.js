module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    pluggins: [
      "react-native-reanimated/plugin",
      {
        relativeSourceLocation: true,
      },
    ],
  };
};
