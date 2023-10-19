import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
	integrations: [react()],
	adapter: node({
		mode: 'standalone',
	}),
	adapter: vercel(),
 	output: 'server',
});
