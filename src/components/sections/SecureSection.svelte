<script>
	import { onMount } from 'svelte';

	import '../../styles/sections/secure.css';
	import SectionTitle from '../SectionTitle.svelte';

	import {
		Puzzle,
		Binary,
		LockKeyhole,
		Palette,
		Brain,
		Plug,
		ShieldCheck,
		FileScan,
		KeyRound
	} from 'lucide-svelte';

	const elements = [
		{
			icon: ShieldCheck,
			title: 'Tout reste sur votre appareil',
			description:
				"Papillon est lié directement à vos services scolaires. Vos données ne passent pas par des serveurs à l'autre bout du monde."
		},
		{
			icon: KeyRound,
			title: 'Vos mots de passe ne quittent jamais votre appareil',
			description:
				"Papillon se connecte intelligemment à vos services tout comme les applications d'origine, sans compromettre votre sécurité."
		},
		{
			icon: FileScan,
			title: 'Le code est open-source',
			description:
				"N'importe qui peut vérifier le comportement de Papillon pour s'assurer que les données restent en sécurité."
		}
	];

	onMount(() => {
		const elems = document.querySelectorAll('.secure-element');

		elems.forEach((elem, i) => {
			ScrollReveal().reveal(elem, {
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

<div class="section section-secure">
	<div class="section-secure-content">
		<div class="section-secure__image-container">
			<img src="/assets/secure_mainscr.png" alt="secure" class="section-secure__image" />
		</div>

		<div class="section-secure-text">
			<h1 class="section-secure-text__title">Vous restez maître de vos données</h1>
			<h1 class="section-secure-text__subtitle">Papillon garde tout en sécurité</h1>

			<div class="secure-elements">
				{#each elements as { icon, title, description, color }}
					<div class="secure-element">
						<div class="secure-icon-container" style="background-color: {color}">
							<svelte:component this={icon} class="secure-icon" size="20" strokeWidth="2.5" />
						</div>
						<div class="secure-content">
							<h3 class="secure-content__title">{title}</h3>
							<p class="secure-content__description">{description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
