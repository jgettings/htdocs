import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [tsconfigPaths(), react()],
  css: {
    modules: {
      // so I can use dashes in the css but camel case in react
      localsConvention: 'dashes',
    },
  },
});
