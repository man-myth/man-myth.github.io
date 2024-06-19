import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	define: {
		'process.env': process.env
	}
})