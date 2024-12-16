<script>
	import DemoVideo from './DemoVideo.svelte';
	import { Check } from 'lucide-svelte';

	export let src = '#';
	export let subtitle = '';
	export let title = '';
	export let description = '';
	export let direction = 'left';
	export let checks = [];
</script>

<div class={`demo-item ${direction === 'right' ? 'inverted' : ''}`}>
	<DemoVideo {src} />

	<div class="demo-item-content" class:direction>
		<h3 class="demo-item-subtitle">{subtitle}</h3>
		<h2 class="demo-item-title">{title}</h2>
		<p class="demo-item-description">{description}</p>

		{#if checks.length > 0}
			<div class="checks">
				{#each checks as check}
					<div class="check">
						<Check class="ch-icon" color="var(--color-primary)" strokeWidth="2.5" />
						<p class="ch-text">{check}</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style scoped>
	.demo-item {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 70px;
		padding: 70px 0px;
	}

	.demo-item.inverted {
		flex-direction: row-reverse;
	}

	.demo-item-content {
		width: 100%;
		max-width: 450px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.demo-item-subtitle {
		font-size: 1rem;
		letter-spacing: 0.1rem;
		text-transform: uppercase;
		font-weight: 700;
		color: var(--color-primary);
	}

	.demo-item-title {
		font-size: 2.5rem;
		line-height: 2.5rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.demo-item-description {
		margin-top: 20px;
		font-size: 1.1rem;
		line-height: 1.6rem;
		font-weight: 500;
		color: var(--color-text-secondary);
		opacity: 0.6;
	}

	.checks {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.check {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.ch-text {
		font-size: 1.1rem;
		line-height: 1.6rem;
		font-weight: 500;
		color: var(--color-primary);
	}

	@media (max-width: 768px) {
		.demo-item {
			flex-direction: column;
			gap: 60px;
			padding: 20px 0px;
		}

		.demo-item.inverted {
			flex-direction: column;
		}

		.demo-item-content {
			max-width: 100%;
		}
	}
</style>
