module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'babel-plugin-transform-typescript-metadata',
      [
        "module-resolver",
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
            '.svg',
            '.jpg',
            '.png'
          ],
          alias: {
            "@pages": "./src/Pages/index.ts",
            "@helpers": "./src/Helpers/index.ts",
            "@hooks": "./src/Hooks/index.ts",
            "@api": "./src/Services/API/index.ts",
            "@db": "./src/Services/DB/index.ts",
            "@entities": "./src/Services/DB/Entities/index.ts"
          }
        }
      ]
    ]
  };
};
