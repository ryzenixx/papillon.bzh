<script>
	import { Download } from 'lucide-svelte';
  import '../../styles/sections/try.css';
	import Button from '../Button.svelte';
</script>

<div class="section section-try">
  <div class="width">
    <div class="title">
      <h2>
        Essayez Papillon dès maintenant, vous n'allez plus pouvoir vous en passer !
      </h2>
      <p>
        Déja adopté et utilisé par des milliers de lycéens, de collégiens et d'étudiants, Papillon est le compagnon idéal pour votre vie scolaire qui vous accompagnera tout au long de votre année.
      </p>

      <Button
        class="button button-hero"
        value="Télécharger"
        icon={Download}
        variant="primary"
        href="/download"
      />
    </div>

    <img src="/assets/try_illustration.svg" alt="Illustration de l'application Papillon" class="illustration" />
  </div>
</div>