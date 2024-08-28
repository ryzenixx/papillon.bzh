<script>
  import '../styles/navbar.css';

  import { page } from '$app/stores'
	import Button from './Button.svelte';

	import { Menu, X, Download } from 'lucide-svelte';

  const links = [
    { name: 'Découvrir Papillon', href: '/' },
    { name: 'Soutenir le projet', href: '/donate', donate: true },
  ];

  let mobileMenuOpen = false;
</script>

<div class="support">
  <div class="support-over">
    <a class="width literate-link" href="https://literate.ink" target="_blank">
      <p>Un projet soutenu par</p>

      <img src="/assets/literate_logo_full.svg" alt="Papillon" class="literate-image light-mode" />
      <img src="/assets/literate_logo_full_dark.svg" alt="Papillon" class="literate-image dark-mode" />
    </a>
  </div>
</div>

<nav>
  <div class="width">
    <a href="/" class="logo">
      <img src="/assets/papillon_logo_full.svg" alt="Papillon" class="logo-image light-mode" />
      <img src="/assets/papillon_logo_full_dark.svg" alt="Papillon" class="logo-image dark-mode" />
    </a>

    <ul class="desktop-only">
      {#each links as { name, href, donate }}
        <li>
          <a
            class={(href === $page.url.pathname ? 'active' : '') + (donate ? ' donate' : '')}
            href={href}
          >
            {name}
          </a>
        </li>
      {/each}
    </ul>

    <div class="desktop-only">
      <Button
        class="button"
        value="Télécharger"
        icon={Download}
        variant="light"
        href="/download"
      />
    </div>

    <div class="mobile-only spacer" />

    <a
      href="#"
      class="mobile-only mobileMenuButton {mobileMenuOpen ? 'open' : ''}"
      on:click|preventDefault={() => {
        mobileMenuOpen = !mobileMenuOpen;
      }}
    >
      {#if mobileMenuOpen}
        <X />
      {:else}
        <Menu />
      {/if}
    </a>
  </div>
</nav>

<div
  class="mobile-only mobileMenu"
  class:open={mobileMenuOpen}
>
  <ul>
    {#each links as { name, href }}
      <li>
        <a
          class:active={href === $page.url.pathname}
          href={href}
          on:click={() => {
            mobileMenuOpen = false;
          }}
        >
          {name}
        </a>
      </li>
    {/each}
  </ul>
</div>

<!--<div class="nav-mock" />-->