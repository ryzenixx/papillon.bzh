<script>
	import { Cookie, Euro, HandCoins, Heart, Scroll, Users2 } from 'lucide-svelte';
	import Footer from '../../components/Footer.svelte';
	import SectionTitle from '../../components/SectionTitle.svelte';
	import '../../styles/pages/donate.css';
	import Button from '../../components/Button.svelte';

	import { onMount } from 'svelte';

	onMount(() => {
		const reasons = document.querySelectorAll('.reason');

		reasons.forEach((reason, index) => {
			ScrollReveal().reveal(reason, {
				origin: 'bottom',
				distance: '20px',
				duration: 600,
				easing: 'ease',
				scale: 0.9,
				opacity: 0,
				reset: true,
				delay: 200 + 100 * index
			});
		});

		ScrollReveal().reveal('.kofiframe', {
			origin: 'bottom',
			distance: '20px',
			duration: 600,
			easing: 'ease',
			scale: 0.9,
			opacity: 0,
			reset: true,
			delay: 400
		});
	});
</script>

<svelte:head>
	<title>Papillon — Soutenez le projet</title>
	<meta property="og:title" content="Soutenez le projet Papillon" />
	<meta
		property="og:description"
		content="Soutenez le développement d'un projet libre et open-source, développé par des étudiants pour des étudiants."
	/>
</svelte:head>

<div class="page donate-page">
	<div class="section main-donate">
		<div class="main-donate-text">
			<SectionTitle
				title="Soutenez le projet Papillon"
				description="Soutenez le développement de Papillon en faisant un don unique ou mensuel."
			/>

			<div class="reason">
				<div class="icon-title">
					<Heart size="26" strokeWidth="2" color="#d6a00b" />
					<h3>Papillon, c'est un projet de passion</h3>
				</div>

				<p class="res-text">
					Papillon est un projet libre et open-source, développé par des élèves pour des élèves,
					avec pour seul but de simplifier la vie scolaire de chacun. Nous travaillons bénévolement
					pour vous offrir un outil de qualité, et nous avons besoin de votre soutien pour continuer
					à le faire évoluer.
				</p>
			</div>

			<div class="reason">
				<div class="icon-title">
					<HandCoins size="26" strokeWidth="2" color="#d6a00b" />
					<h3>Un projet tenu uniquement par des étudiants</h3>
				</div>

				<p class="res-text">
					Maintenir des frais, aussi simples que des domaines, des licences ou de l'hébergement,
					coûte de l'argent. Nous sommes des étudiants, et nous ne pouvons tout simplement pas nous
					permettre de payer ces frais seuls. Votre soutien nous permettra de continuer à maintenir
					Papillon en ligne.
				</p>
			</div>

			<div class="reason">
				<div class="icon-title">
					<Cookie size="26" strokeWidth="2" color="#d6a00b" />
					<h3>Une application qui vous respecte</h3>
				</div>

				<p class="res-text">
					Papillon ne gagne pas d'argent. Pas de publicités, pas de revente de données, pas de
					tracking. Votre don nous permettra de continuer à vous offrir une application respectueuse
					de votre vie privée, sans compromis.
				</p>
			</div>
		</div>
		<div class="main-donate-widget">
			<iframe
				id="kofiframe"
				src="https://ko-fi.com/thepapillonapp/?hidefeed=true&widget=true&embed=true&preview=true"
				class="kofiframe"
				title="thepapillonapp"
			></iframe>
		</div>
	</div>
</div>

<Footer />
