import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@core': '/src/core',
      '@helpers': '/src/helpers',
      '@application': '/src/context/application',
      '@domain': '/src/context/domain',
      '@infrastructure': '/src/context/infrastructure',
      '@components': '/src/react/components',
      '@contexts': '/src/react/contexts',
      '@pages': '/src/react/pages',
      '@hooks': '/src/react/hooks',
      '@router': '/src/react/router',
    },
  },
});
