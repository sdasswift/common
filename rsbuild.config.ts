import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import mfConfig from './modulefederation.config';

export default defineConfig({
  server: {
    port: 3004,
  },
  moduleFederation: { options: mfConfig },
  plugins: [
    pluginReact()
  ],
});
