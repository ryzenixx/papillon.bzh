<script>
	import DemoItem from '../atoms/Demo/DemoItem.svelte';
	import DemoVideo from '../atoms/Demo/DemoVideo.svelte';
</script>

<div class="section section-demo">
	<DemoItem
		direction="left"
		src="/assets/demo/grades_graph.webm"
		subtitle="Intelligent"
		title="Visualisez votre moyenne générale dans le temps"
		description="Visualisez vos notes et votre progression en temps réel, pour mieux comprendre votre évolution."
		checks={[
			'Calcul automatique de la moyenne estimée',
			'Historique de la moyenne générale',
			'Influence des notes sur les moyennes'
		]}
	/>

	<DemoItem
		direction="right"
		src="/assets/demo/homework_check.webm"
		subtitle="Synchronisé"
		title="Complétez votre travail à faire sur tous vos appareils"
		description="Marquer un devoir comme fait est un jeu d'enfant. Cochez simplement et laissez la magie opérer."
		checks={[
			'Synchronisation en temps réel',
			"Validation effective chez l'établissement",
			'Organisation facile'
		]}
	/>

	<DemoItem
		direction="left"
		src="/assets/demo/timetable_scroll.webm"
		subtitle="Intuitif"
		title="Votre emploi du temps, disponible instantanément"
		description="Pas besoin d'attendre de se reconnecter. Ouvrez Papillon et bénéficiez de vos cours en un clin d'oeil."
		checks={['Démarrage ultra-rapide', 'Emploi du temps hors-connexion', 'Cours en détail']}
	/>
</div>
