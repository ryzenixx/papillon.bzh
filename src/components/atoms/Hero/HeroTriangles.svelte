<script>
  import { onMount } from 'svelte';
  // on mount
  onMount(() => {
    const triangles = document.querySelectorAll('.triangle');

    triangles.forEach((triangle, i) => {
      ScrollReveal().reveal(triangle, {
        delay: (Math.random() * 50) + (i * 50),
        origin: ['top', 'right', 'bottom', 'left'][Math.floor(Math.random() * 4)],
        distance: '200px',
        duration: 1000,
        scale: 0,
      });
    });
  });
</script>

<img
    src="/assets/triangle_top_left.svg"
    class="triangle triangle-top-left"
    alt="Triangle top left"
  />

  <img
    src="/assets/triangle_top_right.svg"
    class="triangle triangle-top-right"
    alt="Triangle top right"
  />

  <img
    src="/assets/triangle_bottom_left.svg"
    class="triangle triangle-bottom-left"
    alt="Triangle bottom left"
  />

  <img
    src="/assets/triangle_bottom_right.svg"
    class="triangle triangle-bottom-right"
    alt="Triangle bottom right"
  />