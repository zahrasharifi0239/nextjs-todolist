import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Next.js Todo List',
		short_name: 'TodoList',
		description:
			'A fast, offline-capable Progressive Todo List Web Application built with Next.js for optimal performance, SEO, and user experience across all devices.',
		start_url: '/',
		display: 'standalone',
		orientation: 'portrait',
		background_color: '#ffffff',
		theme_color: '#50bfe8',
	};
}
