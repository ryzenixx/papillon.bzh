<script>
	import { Apple, Github, Play, Bot, PlaneTakeoff } from 'lucide-svelte';
	import Footer from '../../components/Footer.svelte';
	import SectionTitle from '../../components/SectionTitle.svelte';

	import { onMount } from 'svelte';

	import '../../styles/pages/download.css';
	import DownloadOption from '../../components/atoms/Download/DownloadOption.svelte';

	const download_options = [
		{
			icon: Apple,
			image: 'store_appstore.png',
			title: 'App Store',
			description: "Téléchargez Papillon sur l'App Store pour votre iPhone, iPad ou Mac.",
			href: 'https://apps.apple.com/app/papillon-ton-alli%C3%A9-scolaire/id6477761165'
		},
		{
			icon: Play,
			image: 'store_play.png',
			title: 'Google Play',
			description: 'Installez depuis Google Play Store pour votre appareil Android.',
			href: 'https://play.google.com/store/apps/details?id=xyz.getpapillon.app'
		},
		{
			icon: Github,
			image: 'store_github.png',
			title: 'GitHub',
			description: 'Obtenez Papillon directement depuis la source sur GitHub.',
			href: 'https://github.com/PapillonApp/Papillon/releases'
		}
	];

	const beta_versions = [
		{
			icon: PlaneTakeoff,
			image: 'store_testflight.png',
			title: 'TestFlight',
			description: 'Ajoutez Papillon à TestFlight pour essayer les dernières fonctionnalités.',
			href: 'https://testflight.apple.com/join/WGgU9DAA'
		},
		{
			icon: Bot,
			image: 'store_play_beta.png',
			title: 'Android',
			description: 'Rejoignez le programme bêta de Papillon sur le Google Play Store.',
			href: 'https://play.google.com/apps/testing/xyz.getpapillon.app'
		}
	];

	onMount(() => {
		const tiles = document.querySelectorAll('.download-option');

		const headlineAnimOptions = {
			origin: 'bottom',
			distance: '20px',
			duration: 600,
			easing: 'ease',
			scale: 1,
			opacity: 0,
			reset: true
		};

		tiles.forEach((tile, index) => {
			ScrollReveal().reveal(tile, {
				...headlineAnimOptions,
				delay: 300 + index * 50
			});
		});
	});
</script>

<div class="page download-page">
	<div class="section width">
		<SectionTitle
			title="Télécharger Papillon"
			description="Découvrez Papillon et téléchargez-le pour votre système d'exploitation."
		/>

		<div class="download-options">
			{#each download_options as option}
				<DownloadOption
					href={option.href}
					icon={option.icon}
					image={option.image}
					title={option.title}
					description={option.description}
				/>
			{/each}
		</div>

		<SectionTitle
			title="Versions bêta"
			description="Essayez les dernières fonctionnalités de Papillon avant tout le monde."
		/>

		<div class="download-options">
			{#each beta_versions as option}
				<DownloadOption
					href={option.href}
					icon={option.icon}
					image={option.image}
					title={option.title}
					description={option.description}
				/>
			{/each}
		</div>
	</div>
</div>

<Footer />
