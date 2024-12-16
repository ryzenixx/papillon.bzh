<script>
	export let src = '#';
	export let className = '';
</script>

<div class={`demo-video ${className}`}>
	<div class="iphone-container">
		<img src="/assets/iphone_14_mock.png" alt="demo" />
		<video preload="none" playsinline class="player" {src} loop autoplay muted></video>
	</div>
</div>

<style scoped>
	.demo-video {
		width: 420px;
		min-width: 400px;
		aspect-ratio: 3 / 4;
		border-radius: 12px;
		background-color: rgba(var(--color-text-primary-rgb), 0.08);

		display: flex;
		justify-content: center;
		align-items: flex-start;
		padding-top: 24px;

		overflow: hidden;
	}

	.iphone-container {
		width: 360px;
		position: relative;
		overflow: visible;
	}

	.iphone-container img {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		pointer-events: none;
		overflow: visible;
	}

	.player {
		position: absolute;
		top: 17px;
		left: 6px;
		aspect-ratio: 9 / 18;
		width: 347px;
		border-radius: 40px;
		overflow: hidden;
		overflow: hidden;
	}

	@media (max-width: 900px) {
		.demo-video {
			zoom: 0.8;
		}
	}
</style>
