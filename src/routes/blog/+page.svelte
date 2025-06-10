<script>
	import Footer from '../../components/Footer.svelte';

	export let data;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<main class="blog-container">
	<h1>Blog</h1>
	<ul class="blog-list">
		{#each data.articles as article}
			<li>
				<a href={article.url}>{article.title}</a>
				{#if article.excerpt}
					<p>{article.excerpt}</p>
				{/if}
			</li>
		{/each}
	</ul>
</main>

<Footer />

<style>
	.blog-container {
		max-width: 700px;
		margin: 0 auto;
		padding: 2rem;
	}
	ul {
		list-style: none;
		padding: 0;
	}
	li {
		margin-bottom: 2rem;
	}
	a {
		font-size: 1.3rem;
		font-weight: bold;
		color: #0070f3;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}

	.blog-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 1rem;
	}
</style>
