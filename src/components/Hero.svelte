<script>
	import { onMount } from 'svelte';
	import { ripple } from 'svelte-ripple-action';

	import { ArrowDown, Download } from 'lucide-svelte';
	import '../styles/hero.css';
	import Button from './Button.svelte';

	const headlineAnimOptions = {
		origin: 'bottom',
		distance: '60px',
		duration: 600,
		easing: 'ease',
		scale: 0.9,
		opacity: 0,
		reset: false
	};

	// on mount
	onMount(() => {
		ScrollReveal().reveal('.headline', {
			...headlineAnimOptions,
			delay: 0
		});

		ScrollReveal().reveal('.britanny-chip', {
			...headlineAnimOptions,
			delay: 50,
			origin: 'top'
		});

		ScrollReveal().reveal('.subtitle', {
			...headlineAnimOptions,
			delay: 100
		});

		ScrollReveal().reveal('.rating', {
			...headlineAnimOptions,
			delay: 150
		});

		ScrollReveal().reveal('.button-hero', {
			...headlineAnimOptions,
			scale: 0.8,
			delay: 200,
			origin: 'top'
		});

		ScrollReveal().reveal('.buttons', {
			...headlineAnimOptions,
			delay: 200
		});

		ScrollReveal().reveal('.conditions', {
			...headlineAnimOptions,
			delay: 200
		});
	});
</script>

<div class="hero width">
	<div class="content">
		<a
			use:ripple={{ color: 'rgba(var(--color-text-primary-rgb), 0.2)' }}
			class="britanny-chip"
			href="/kenavo"
		>
			<img src="/assets/britanny_flag.svg" alt="Britanny flag" />

			<p>Un logiciel libre imaginé en Bretagne</p>
		</a>

		<h1 class="headline">Emploi du temps, notes, cantine, une app</h1>
		<p class="subtitle">
			Papillon est ton compagnon libre et open-source, créé par des élèves comme toi. Utilise-le
			pour tous tes services de vie scolaire, et simplifie ton année !
		</p>

		<div class="rating">
			<div class="main-rating">
				<img src="/assets/rate_stars.svg" alt="Rating" />
				<p class="rate">4.81</p>
			</div>
			<p class="place">noté par 8 761 utilisateurs</p>
		</div>

		<div class="buttons">
			<Button
				class="button button-hero"
				value="Télécharger"
				icon={Download}
				variant="primary"
				href="/download"
			/>

			<Button
				class="button button-hero"
				value="En savoir plus"
				icon={ArrowDown}
				variant="default"
				href="#features"
			/>
		</div>

		<p class="conditions">
			En continuant, vous acceptez les <a href="https://docs.papillon.bzh/legal/terms"
				>conditions d'utilisation</a
			>
			et la
			<a href="https://docs.papillon.bzh/legal/privacy">politique de confidentialité</a>.
		</p>
	</div>

	<div class="hero-demo">
		<img src="/assets/hero_screenshot_main.png" alt="" class="screenshot-main" />

		<img src="/assets/hero_over_grade.svg" alt="" class="hero-over hero-over-grade" />
		<img src="/assets/hero_over_homework.svg" alt="" class="hero-over hero-over-homework" />
		<img src="/assets/hero_over_lesson.svg" alt="" class="hero-over hero-over-lesson" />
	</div>
</div>
