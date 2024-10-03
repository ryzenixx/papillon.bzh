<script>
  import { onMount } from 'svelte';

  export let title = '';
  export let description = '';

  onMount(() => {
    const tiles = document.querySelectorAll('.tile');
    
    const headlineAnimOptions = {
      origin: 'bottom',
      distance: '20px',
      duration: 600,
      easing: 'ease',
      scale: 1,
      opacity: 0,
      reset: true,
    };

    ScrollReveal().reveal('.st-title', {
      ...headlineAnimOptions,
      delay: 200,
      reset: false
    });

    ScrollReveal().reveal('.st-desc', {
      ...headlineAnimOptions,
      delay: 300,
      reset: false
    });
  });
</script>

<div class="section-title">
  <h2 class="st-title">{title}</h2>
  <p class="st-desc">{description}</p>
</div>

<style>

.section-title {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.section-title h2 {
  font-size: 2rem;
  color: var(--color-text-primary);
}

.section-title p {
  font-size: 1rem;
  color: var(--color-text-primary);
  opacity: 0.5;
}
</style>