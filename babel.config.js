module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            pages: "./src/Pages/index",
            helpers: "./src/Helpers/index",
            hooks: "./src/Hooks/index",
            api: "./src/Services/API/index",
            migration: "./src/Services/DB/Migrations/index"
          }
        }
      ]
    ]
  };
};
