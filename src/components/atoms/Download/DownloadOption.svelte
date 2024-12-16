<script>
	import { ripple } from 'svelte-ripple-action';

	export let href = '#';
	export let icon = null;
	export let image = 'null';
	export let title = 'Option title';
	export let description = 'Option description';
</script>

<a
	use:ripple={{
		color: 'rgba(var(--color-text-primary-rgb), 0.1)'
	}}
	class="download-option"
	{href}
	target="_blank"
>
	<div class="icon">
		<img src={'/assets/' + image} alt={title} />
	</div>
	<div class="download-content">
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
</a>
