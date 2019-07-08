const withCSS = require("@zeit/next-css");
require("dotenv").config();

console.log(process.env.FORTNITE_API_KEY);

module.exports = withCSS({
  target: "serverless",
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 8192,
          publicPath: "/_next/static/",
          outputPath: "static/",
          name: "[name].[ext]"
        }
      }
    });
    return config;
  }
});
