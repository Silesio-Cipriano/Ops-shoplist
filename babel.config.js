module.exports = function (api) {
  api.cache(true);
  return {
    compact: false,
    presets: ['babel-preset-expo']
  };
};
