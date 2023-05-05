import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      '@mui/material',
      '@mui/system',
      '@mui/icons-material',
      '@mui/x-date-pickers',
      '@mui/x-date-pickers/AdapterDayjs',
    ],
  },
  server: {
    host: true,
  }
})
