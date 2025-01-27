<script>
	import { ripple } from 'svelte-ripple-action';

	import { BadgeEuro, Cookie, Euro, HandCoins, Heart, Scroll, Users2 } from 'lucide-svelte';
	import Footer from '../../components/Footer.svelte';
	import SectionTitle from '../../components/SectionTitle.svelte';
	import '../../styles/pages/donate.css';
	import Button from '../../components/Button.svelte';

	import { onMount } from 'svelte';
	import TrySection from '../../components/sections/TrySection.svelte';

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

<div class="donate-page">
	<div class="main-donate width">
		<div class="main-donate-text">
			<h1>Soutenez un projet libre & indépendant</h1>
			<p class="explaination">
				Papillon, c'est une équipe d'étudiants et de lycéens, ainsi que des dizaines de
				contributeurs bénévoles. Donner permet au projet de vivre et permet également de le faire
				connaître au plus grand nombre.
			</p>
		</div>
		<div class="main-donate-actions">
			<a
				use:ripple={{
					color: 'rgba(var(--color-text-primary-rgb), 0.1)'
				}}
				href="https://ko-fi.com/thepapillonapp"
				target="_blank"
				class="button kofi-hero"
			>
				<BadgeEuro size="42" />
				<h3>Cliquez ici pour donner au projet</h3>
				<p>(même 1 €, c'est déja important pour nous)</p>
			</a>
		</div>
	</div>
	<div class="donate-reasons">
		<div class="reason">
			<div class="icon-title">
				<Heart size="36" strokeWidth="2" color="#d6a00b" />
				<h3>Papillon, c'est un projet de passion</h3>
			</div>

			<p class="res-text">
				Papillon est un projet libre et open-source, développé par des élèves pour des élèves, avec
				pour seul but de simplifier la vie scolaire de chacun. Nous travaillons bénévolement pour
				vous offrir un outil de qualité, et nous avons besoin de votre soutien pour continuer à le
				faire évoluer.
			</p>
		</div>

		<div class="reason">
			<div class="icon-title">
				<HandCoins size="36" strokeWidth="2" color="#d6a00b" />
				<h3>Un projet tenu uniquement par des étudiants</h3>
			</div>

			<p class="res-text">
				Maintenir des frais, aussi simples que des domaines, des licences ou de l'hébergement, coûte
				de l'argent. Nous sommes des étudiants, et nous ne pouvons tout simplement pas nous
				permettre de payer ces frais seuls. Votre soutien nous permettra de continuer à maintenir
				Papillon en ligne.
			</p>
		</div>

		<div class="reason">
			<div class="icon-title">
				<Cookie size="36" strokeWidth="2" color="#d6a00b" />
				<h3>Une application qui vous respecte</h3>
			</div>

			<p class="res-text">
				Papillon ne gagne pas d'argent. Pas de publicités, pas de revente de données, pas de
				tracking. Votre don nous permettra de continuer à vous offrir une application respectueuse
				de votre vie privée, sans compromis.
			</p>
		</div>
	</div>
</div>

<TrySection />
<Footer />
