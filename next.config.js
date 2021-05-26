/* eslint-disable */
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');

const webpackConfig = {
  webpack: (config, options) => {
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];
    return config;
  },
};

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

module.exports = withPlugins(
  [withOptimizedImages, withFonts, withSass, withCSS],
  webpackConfig
);
