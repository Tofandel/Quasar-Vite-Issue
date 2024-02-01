import {defineConfig} from 'vite'
import fakeVitePlugin from './fakeVitePlugin';

export default defineConfig({
  plugins: [fakeVitePlugin()]
})
