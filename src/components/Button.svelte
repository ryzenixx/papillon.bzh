<script>
	export let value = "Button";
  export let icon = null;

  export let onClick = () => {};

  // default | primary | light
  export let variant = "default";

  export let href = "#";

  export let color = "#29947a";
</script>

<a
  href={href}
  class="button {variant === "primary" ? 'primary' : ''} {variant === "light" ? 'light' : ''}"
  on:click={onClick}
  style="--btn-color: {color}; --btn-color-light: {color}22;"
>
  {#if icon}
    <svelte:component this={icon} class="icon"
    color="{
      variant === "primary" ? '#ffffff' :
      variant === 'light' ? color :
        'rgba(var(--color-text-rgb), 0.5)'
    }"
    size="20" strokeWidth="2.5" />
  {/if}

  <p>
    {value}
  </p>
</a>

<style scoped>
  .button {
    width: fit-content;
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 8px 18px;
    border-radius: 300px;
    border: 1.5px solid rgba(var(--color-text-rgb), 0.2);
    text-decoration: none;
    transition: background-color 0.2s, border-color 0.2s;
    -webkit-tap-highlight-color: transparent;
  } 

  .button p {
    font-size: 16px;
    font-weight: 500;
    color: rgba(var(--color-text-rgb), 0.5);
  }

  @media screen and (max-width: 768px) {
    .button p {
      font-size: 15px;
    }
  }

  .button:hover {
    background-color: rgba(var(--color-text-rgb), 0.06);
  }

  .button.primary {
    background-color: var(--btn-color);
    border-color: var(--btn-color);
  }

  .button.primary:hover {
    filter: brightness(1.1);
  }

  .button.primary p {
    color: #ffffff;
  }

  .button.light {
    background-color: var(--btn-color-light);
    border-color: rgba(var(--color-primary-rgb), 0);
  }

  .button.light:hover {
    filter: brightness(0.6) saturate(1.2);
  }

  .button.light p {
    color: var(--btn-color);
  }
</style>