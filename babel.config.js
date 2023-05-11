module.exports = api => {
  api.cache(false);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.ts',
            '.tsx'
          ],
          alias: {
            "@pages": "./src/Pages/index.ts",
            "@hooks": "./src/Hooks/index.ts",
            "@components": "./src/Components/index.ts"
          },
        },
      ],
    ],
  };
};
