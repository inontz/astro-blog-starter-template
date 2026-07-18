export type Service = {
	id: string;
	name: string;
	description: string;
	url: string;
	host: string;
	category: 'Infra' | 'AI' | 'Dev';
	mark: string;
	shortcut: string;
	accent: string;
	featured?: boolean;
};

// Add or reorder your permanent subdomains here.
export const services: Service[] = [
	{
		id: 'proxmox',
		name: 'Proxmox Manager',
		description: 'จัดการ virtual machines, containers และ homelab cluster',
		url: 'https://pve.inontz.me',
		host: 'pve.inontz.me',
		category: 'Infra',
		mark: 'PX',
		shortcut: 'P',
		accent: '#ff7a45',
		featured: true,
	},
	{
		id: 'opencode',
		name: 'OpenCode',
		description: 'AI coding workspace สำหรับสร้าง ทดลอง และแก้ไขโปรเจกต์',
		url: 'https://opencode.inontz.me',
		host: 'opencode.inontz.me',
		category: 'AI',
		mark: 'OC',
		shortcut: 'O',
		accent: '#51d88a',
		featured: true,
	},
	{
		id: 'hermes',
		name: 'Hermes',
		description: 'ผู้ช่วย AI ส่วนตัวสำหรับค้นคว้า เขียนโค้ด และ automation',
		url: 'https://hermes.inontz.me',
		host: 'hermes.inontz.me',
		category: 'AI',
		mark: 'H',
		shortcut: 'H',
		accent: '#69a7ff',
	},
	{
		id: 'openclaw',
		name: 'OpenClaw',
		description: 'พื้นที่ทดลอง agent และเครื่องมือ open-source',
		url: 'https://openclaw.inontz.me',
		host: 'openclaw.inontz.me',
		category: 'AI',
		mark: 'CL',
		shortcut: 'C',
		accent: '#e879f9',
	},
	{
		id: 'dev',
		name: 'Dev Lab',
		description: 'งานทดลอง โค้ดตัวอย่าง และสิ่งที่กำลังสร้าง',
		url: 'https://dev.inontz.me',
		host: 'dev.inontz.me',
		category: 'Dev',
		mark: '/>',
		shortcut: 'D',
		accent: '#f0c55b',
	},
];

export const projects = [
	{
		title: 'Inontz Portal',
		type: 'Web / Astro',
		description: 'Personal control plane ที่รวมบริการ homelab, AI workspace และผลงานไว้ในหน้าเดียว',
		tags: ['Astro', 'TypeScript', 'Cloudflare'],
		href: 'https://github.com/inontz/astro-blog-starter-template',
		index: '01',
	},
	{
		title: 'Homelab Control Plane',
		type: 'Infrastructure',
		description: 'ห้องทดลอง self-hosted บน Proxmox สำหรับ VM, container, networking และ automation',
		tags: ['Proxmox', 'Linux', 'Self-hosted'],
		href: 'https://pve.inontz.me',
		index: '02',
	},
	{
		title: 'Smart Home Lab',
		type: 'Automation',
		description: 'Home Assistant integrations, dashboards และ workflow สำหรับอุปกรณ์ภายในบ้าน',
		tags: ['Home Assistant', 'YAML', 'IoT'],
		href: 'https://github.com/inontz',
		index: '03',
	},
	{
		title: 'Moon Guardian',
		type: 'Browser Game',
		description: 'เกม RPG ขนาดเล็กที่ทดลอง game loop, canvas rendering และ offline-first PWA',
		tags: ['JavaScript', 'Canvas', 'PWA'],
		href: 'https://dev.inontz.me',
		index: '04',
	},
];

export const socialLinks = [
	{ label: 'GitHub', href: 'https://github.com/inontz', handle: '@inontz' },
	{ label: 'X / Twitter', href: 'https://x.com/inontz', handle: '@inontz' },
	{ label: 'RSS', href: '/rss.xml', handle: 'Latest notes' },
];
