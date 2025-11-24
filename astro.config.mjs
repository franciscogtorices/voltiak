// @ts-check

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [react(), mdx(), sitemap()],
	server: {
		host: true, // Permite acceso desde la red local
		port: 4321,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
