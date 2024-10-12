<script>
  import SectionTitle from '../../components/SectionTitle.svelte';
  import Button from '../../components/Button.svelte';
      
  import TrySection from "../../components/sections/TrySection.svelte";
	import Footer from "../../components/Footer.svelte";
	import { Download } from 'lucide-svelte';
</script>

<div class="kenavo-container">
  <div class="section section-kenavo">

    <img src="/assets/britanny-gwenn-ha-du.gif"/>

    <SectionTitle
      title="Papillon zo un arload fentus en deus cheñchet ma buhez"
      description="Krouet eo bet Papillon tri bloaz zo en Il-ha-Gwilen ha kenderc’hel a ra da vevañ a-dreuz Aodoù-an-Arvor ha gweledvaoù kaer Breizh en ur skoazellañ studierien ar c’horn-bro."
    />

    <div class="kenavo-content">
      <p>
        Bon, en attendant que tu aies Breton LV2, tu peux installer Papillon pour upgrader ton experience scolaire !
      </p>

      <Button
        class="button button-hero"
        value="Pellgargadenn"
        icon={Download}
        variant="primary"
        href="/download"
      />
    </div>
  </div>
</div>

<TrySection />
<Footer />

<style scoped>
  .kenavo-content {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px;
    background-color: var(--color-background);
    border: 1px solid rgba(var(--color-text-rgb), 0.2);
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 1px 3px #00000030;
  }

  .kenavo-content p {
    font-size: 1.2rem;
    color: var(--color-text-primary);
    text-align: center;
  }
</style>