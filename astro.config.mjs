import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel/serverless';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
	integrations: [react()],
	adapter: node({
		mode: 'standalone',
	}),
	// adapter: vercel(),
	adapter: netlify(),
 	output: 'server',
});
