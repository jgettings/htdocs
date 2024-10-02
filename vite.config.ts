import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { Mode, plugin as mdPlugin } from 'vite-plugin-markdown';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [tsconfigPaths(), react(), mdPlugin({ mode: [Mode.MARKDOWN] })],
  css: {
    modules: {
      // so I can use dashes in the css but camel case in react
      localsConvention: 'dashes',
    },
  },
});
