import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tsConfig from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  base: "/metric-clock/",
  plugins: [svelte(), tsConfig()],
})
