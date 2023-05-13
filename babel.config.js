const { setModuleResolverPluginForTsConfig } = require('babel-plugin-module-resolver-tsconfig')

module.exports = api => {
  api.cache(false);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      setModuleResolverPluginForTsConfig()
    ],
  };
};
