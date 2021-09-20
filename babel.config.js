const config = {
  presets: ["babel-preset-solid"],
  plugins: [],
};

module.exports = (api) => {
  if (api.env("test")) {
    config.presets.push("@babel/preset-typescript", [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
          esmodules: false,
        },
      },
    ]);
    config.plugins.push("@vanilla-extract/babel-plugin");
  }
  return config;
};
