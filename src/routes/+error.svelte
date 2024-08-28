<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Footer from '../components/Footer.svelte';

	const headlineAnimOptions = {
    origin: 'bottom',
    distance: '20px',
    duration: 600,
    easing: 'ease',
    scale: 1,
    opacity: 0,
    reset: true,
  };

	onMount(() => {
    ScrollReveal().reveal('.mascot', {
      ...headlineAnimOptions,
      delay: 0,
			scale: 0.7,
    });

		ScrollReveal().reveal('.title', {
      ...headlineAnimOptions,
      delay: 100,
    });

		ScrollReveal().reveal('.subtitle', {
      ...headlineAnimOptions,
      delay: 200,
    });

		ScrollReveal().reveal('.detail', {
      ...headlineAnimOptions,
      delay: 300,
    });
	});
</script>

<div class="fullpage">
	<div class="error">
		<img src="/assets/papillon_colere.svg" alt="Papillon en colère" class="mascot"/>
		<h4 class="title">Erreur {$page.status}</h4>
		<h2 class="subtitle">Quelque chose s'est mal passé</h2>
		<p class="detail">
			Une erreur s'est produite ({$page.error.message}). Veuillez réessayer plus tard ou <a href="/">retourner à la page d'accueil</a>.
		</p>
	</div>
</div>

<Footer />

<style scoped>
	.error {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 16px;
		margin: 20px;
		gap: 1rem;
		max-width: 500px;
	}

	.mascot {
		height: 200px;
	}

	h4 {
		font-size: 1rem;
		letter-spacing: 0.2rem;
		text-transform: uppercase;
		color: rgba(var(--color-text-rgb), 0.6);
	}

	h2 {
		font-size: 1.8rem;
		line-height: 1;
		text-align: center;
	}

	p {
		font-size: 1rem;
		text-align: center;
		color: rgba(var(--color-text-rgb), 0.6);
	}

	p a {
		color: var(--color-primary);
	}
</style>