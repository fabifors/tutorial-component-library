module.exports = {
  presets: [
    "@babel/env",
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@emotion",
    [
      "@babel/preset-react",
      { runtime: "automatic", importSource: "@emotion/react" },
    ],
  ],
  plugins: ["@emotion/babel-plugin"],
};
