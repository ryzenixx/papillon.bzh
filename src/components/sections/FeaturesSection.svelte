<script>
	import { onMount } from 'svelte';

	import '../../styles/sections/features.css';
	import SectionTitle from '../SectionTitle.svelte';

	const tiles = [
		{
			title: 'Personnalisé',
			description: 'Faites de Papillon une application à votre image.',
			name: 'customized',
			image: 'tile_customized',
			large: true,
			color: '#FF7700'
		},
		{
			title: 'Toujours à jour',
			description: 'Papillon se synchronise avec votre établissement.',
			name: 'updated',
			image: 'tile_updated',
			large: false,
			color: '#00C2FF'
		},
		{
			title: 'Organisation facile',
			description: 'Conçu pour vous aider a vous organiser au quotidien.',
			name: 'organized',
			image: 'tile_organized',
			large: false,
			color: '#FF1900'
		},
		{
			title: 'Compatible',
			description: 'Presque tous les collèges et lycées sont supportés.',
			name: 'compatible',
			image: 'tile_compatible',
			large: false,
			color: '#00FF92'
		},
		{
			title: 'Conçu pour vous',
			description: 'Utilisez plusieurs comptes et connectez votre cantine',
			name: 'made',
			image: 'tile_made',
			large: false,
			color: '#9E00FF'
		}
	];

	onMount(() => {
		const tiles = document.querySelectorAll('.tile');

		tiles.forEach((tile, i) => {
			ScrollReveal().reveal(tile, {
				origin: 'bottom',
				distance: '50px',
				duration: 400,
				easing: 'ease',
				scale: 0.85,
				opacity: 0,
				reset: false,
				delay: i * 70
			});
		});
	});
</script>

<div class="anchor" id="features"></div>

<div class="section section-features">
	<SectionTitle
		title="Plus qu'une simple application de vie scolaire"
		description="Découvrez les fonctionnalités qui font de Papillon une application unique."
	/>

	<div class="feature-grid">
		{#each tiles as tile}
			<div
				class="tile {tile.large ? 'tile-large' : ''} tile-{tile.name}"
				style="background-color: {tile.color}22;"
			>
				<img src="/assets/{tile.image}.png" alt={tile.title} class="tile-image light-mode" />

				<img src="/assets/{tile.image}_dark.png" alt={tile.title} class="tile-image dark-mode" />

				<div class="tile-content">
					<h2>
						{tile.title}
					</h2>
					<p>
						{tile.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
