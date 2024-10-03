<script>
  import { onMount } from 'svelte';
  // on mount
  onMount(() => {
    const triangles = document.querySelectorAll('.triangle');
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