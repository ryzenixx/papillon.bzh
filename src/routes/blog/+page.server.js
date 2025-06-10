import fs from 'fs';
import path from 'path';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const filePath = path.resolve('src/routes/blog/articles-index.json');
	if (!fs.existsSync(filePath)) {
		return { articles: [] };
	}
	const raw = fs.readFileSync(filePath, 'utf-8');
	const articles = JSON.parse(raw);
	return { articles };
}
