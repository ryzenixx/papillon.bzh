<script>
	import Footer from '../../../components/Footer.svelte';

	export let data;
</script>

<svelte:head>
	<title>Article - {data.slug}</title>
</svelte:head>

<main class="blog-article-container">
	<a href="/blog">← Retour au blog</a>
	<div class="markdown">
		{@html data.content}
	</div>
</main>

<Footer />

<style>
	.blog-article-container {
		max-width: 700px;
		margin: 0 auto;
		padding: 2rem;
	}
	.markdown {
		margin-top: 2rem;
	}
	.markdown {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		line-height: 1.4;
	}
	a {
		color: #0070f3;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
