import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // so I can use dashes in the css but camel case in react
      localsConvention: 'dashes',
    },
  },
});
