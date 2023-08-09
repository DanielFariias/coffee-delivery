import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@types': path.resolve(__dirname, 'src', '@types'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@contexts': path.resolve(__dirname, 'src', 'contexts'),
      '@data': path.resolve(__dirname, 'src', 'data'),
      '@layout': path.resolve(__dirname, 'src', 'layout'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@styles': path.resolve(__dirname, 'src', 'styles'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
    },
  },
  plugins: [react()],
})
