const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        WEB_API_HOST: JSON.stringify(process.env.WEB_API_HOST),
        WEB_API_PORT: JSON.stringify(process.env.WEB_API_PORT),
      },
    }),
  ],
};
