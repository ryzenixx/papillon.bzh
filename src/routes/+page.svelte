<script>
	import Hero from '../components/Hero.svelte';
	import FeaturesSection from '../components/sections/FeaturesSection.svelte';
	import IconsSection from '../components/sections/IconsSection.svelte';
	import TrySection from '../components/sections/TrySection.svelte';
	import Footer from '../components/Footer.svelte';
	import SecureSection from '../components/sections/SecureSection.svelte';
	import Button from '../components/Button.svelte';
	import CompatibilitySection from '../components/sections/CompatibilitySection.svelte';
	import DemoSection from '../components/sections/DemoSection.svelte';
</script>

<svelte:head>
	<title>Papillon — Votre allié pour votre vie scolaire</title>
	<meta property="og:title" content="Votre allié pour votre vie scolaire" />
	<meta
		property="og:description"
		content="Papillon est ton compagnon libre et open-source, créé par des élèves comme toi. Utilise-le pour tous tes services de vie scolaire, et simplifie ton année !"
	/>
</svelte:head>

<Hero />
<FeaturesSection />
<DemoSection />
<IconsSection />
<SecureSection />
<TrySection />

<Footer />
