// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Static output is deployed as Cloudflare Workers assets via wrangler.json.
export default defineConfig({
	site: 'https://inontz.me',
	output: 'static',
	integrations: [mdx(), sitemap()],
});
