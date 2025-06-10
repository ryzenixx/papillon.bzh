import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const slug = params.slug;
	const filePath = path.resolve('src/articles', `${slug}.md`);
	if (!fs.existsSync(filePath)) {
		return { status: 404 };
	}
	const raw = fs.readFileSync(filePath, 'utf-8');
	const html = marked(raw);
	return {
		content: html,
		slug
	};
}
