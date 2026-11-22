// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '孟工智库',
			description: 'AI 部署 / 避坑 / 前沿雷达',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Hot-Tail/menggong-zhiku' }],
			sidebar: [
				{ label: 'AI 部署指南', items: [{ autogenerate: { directory: 'ai-deployment' } }] },
				{ label: '避坑手册', items: [{ autogenerate: { directory: 'pitfalls' } }] },
				{ label: '前沿雷达', items: [{ autogenerate: { directory: 'radar' } }] },
				{ label: '项目实战', items: [{ autogenerate: { directory: 'projects' } }] },
			],
		}),
	],
});
