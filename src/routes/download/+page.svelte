<script>
	import { Apple, Github, Play, Bot, PlaneTakeoff } from "lucide-svelte";
	import Footer from "../../components/Footer.svelte";
	import SectionTitle from "../../components/SectionTitle.svelte";

  import { onMount } from 'svelte';

  import '../../styles/pages/download.css';

  const download_options = [
    {
      icon: Apple,
      title: "App Store",
      description: "Téléchargez Papillon sur l'App Store pour votre iPhone ou iPad.",
      href: "https://apps.apple.com/app/papillon-ton-alli%C3%A9-scolaire/id6477761165",
    },
    {
      icon: Play,
      title: "Google Play",
      description: "Téléchargez Papillon sur le Google Play Store pour votre téléphone ou tablette Android.",
      href: "https://play.google.com/store/apps/details?id=xyz.getpapillon.app",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Obtenez Papillon directement depuis la source sur GitHub.",
      href: "https://github.com/PapillonApp/Papillon/releases"
    },
  ]

  const beta_versions = [
    {
      icon: PlaneTakeoff,
      title: "TestFlight",
      description: "Ajoutez Papillon à TestFlight pour essayer les dernières fonctionnalités.",
      href: "https://testflight.apple.com/join/WGgU9DAA",
    },
    {
      icon: Bot,
      title: "Android",
      description: "Rejoignez le programme bêta de Papillon sur le Google Play Store.",
      href: "https://play.google.com/apps/testing/xyz.getpapillon.app",
    },
  ]

  onMount(() => {
    const tiles = document.querySelectorAll('.download-option');
    
    const headlineAnimOptions = {
      origin: 'bottom',
      distance: '20px',
      duration: 600,
      easing: 'ease',
      scale: 1,
      opacity: 0,
      reset: true,
    };

    tiles.forEach((tile, index) => {
      ScrollReveal().reveal(tile, {
        ...headlineAnimOptions,
        delay: 300 + (index * 50),
      });
    });
  });
</script>

<div class="page">
  <div class="section width">
    <SectionTitle
      title="Télécharger Papillon"
      description="Découvrez Papillon et téléchargez-le pour votre système d'exploitation."
    />
    
    <div class="download-options">
      {#each download_options as option}
        <a class="download-option" href={option.href} target="_blank">
          <div class="icon">
            <svelte:component this={option.icon}
              size="40"
              strokeWidth="1.5"
              color="var(--color-primary)"
            />
          </div>
          <div class="download-content">
            <h3>{option.title}</h3>
            <p>{option.description}</p>
          </div>
        </a>
      {/each}
      </div>

      <SectionTitle
    title="Versions bêta"
    description="Essayez les dernières fonctionnalités de Papillon avant tout le monde."
  />

  <div class="download-options">
      {#each beta_versions as option}
        <a class="download-option" href={option.href} target="_blank">
          <div class="icon">
            <svelte:component this={option.icon}
              size="40"
              strokeWidth="1.5"
              color="var(--color-primary)"
            />
          </div>
          <div class="download-content">
            <h3>{option.title}</h3>
            <p>{option.description}</p>
          </div>
        </a>
      {/each}
  </div>
  </div>
</div>

<Footer />