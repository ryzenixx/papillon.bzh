<script>
  import { onMount } from 'svelte';

  import Plyr from 'plyr';
  import '../../styles/libs/plyr.css';

  import '../../styles/sections/trailer.css';
	import SectionTitle from '../SectionTitle.svelte';
  
  onMount(() => {
    const player = new Plyr('#player');

    ScrollReveal().reveal(".video-container", {
        origin: 'bottom',
        distance: '50px',
        duration: 400,
        easing: 'ease',
        scale: 0.85,
        opacity: 0,
        reset: true,
        delay: 200
      });
  });
</script>

<div class="section section-trailer">
  <SectionTitle
    title="Regardez la bande-annonce"
    description="Découvrez Papillon en action via notre courte vidéo d'introduction."
  />

  <div class="video-container">
    <video id="player" playsinline controls>
      <source src="/assets/papi_trailer.mp4" type="video/mp4" />

      <track kind="captions" srclang="fr" label="Français" default />
    </video>
  </div>
</div>