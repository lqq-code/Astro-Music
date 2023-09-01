import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	// Enable React to support React JSX components.
	integrations: [react()],
	// adapter: node({
	// 	mode: 'standalone',
	// }),
	adapter: vercel(),
 	output: 'server',
});
