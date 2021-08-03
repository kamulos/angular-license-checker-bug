const LicenseCheckerWebpackPlugin = require('license-checker-webpack-plugin');

module.exports = {
  plugins: [
    new LicenseCheckerWebpackPlugin({
      outputFilename: 'cwc_open_source.txt'
    }),
  ],
};
