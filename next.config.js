/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const path = require("path");

module.exports = {
  env: {
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
  },

  publicRuntimeConfig: {
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
  },

  images: {
    domains: [process.env.IMAGES_DOMAIN],
    path: "/_next/image",
    loader: "default",
  },

  entry: "./pages/_document.js",
  output: {
    path: __dirname + "/dist",
    filename: "build.js",
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader",
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  watch: true,
};
