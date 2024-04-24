const {
  dependencies
} = require('./package.json');

module.exports = {
  name: 'common',
  exposes: {
    './atoms': './src/atoms/index.ts',
  },
  filename: 'remoteEntry.js',
  shared: {
    react: {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['react-dom'],
    },
    'jotai': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['jotai'],
    },
    '@mui/material': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['@mui/material'],
    },
    '@emotion/react': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['@emotion/react'],
    },
    '@emotion/styled': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['@emotion/styled'],
    },
  },
};