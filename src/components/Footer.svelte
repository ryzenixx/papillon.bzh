<script>
  import '../styles/footer.css';

  const sections = [
    {
      title: "Ressources",
      links: [
        { name: "Blog", href: "https://blog.papillon.bzh" },
        { name: "Développeurs", href: "https://developers.papillon.bzh" },
        { name: "Support", href: "https://support.papillon.bzh" },
      ],
    }, 
    {
      title: "Nous retrouver",
      links: [
        { name: "X (ex. Twitter)", href: "https://x.com/thepapillonapp" },
        { name: "Instagram", href: "https://instagram.com/thepapillonapp" },
        { name: "YouTube", href: "https://youtube.com/#thepapillonapp" },
        { name: "GitHub", href: "https://github.com/PapillonApp" },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/getpapillonapp" },
      ],
    }
  ]
</script>

<div class="section footer">
  <div class="width">
    <div class="sections">
      <img src="/assets/papillon_logo_full.svg" alt="Papillon logo" class="footer-logo" />

      {#each sections as section}
        <div class="footer-section">
          <h3>{section.title}</h3>
          <ul>
            {#each section.links as link}
              <li>
                <a href={link.href}>{link.name}</a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <div class="footer-right">
      <p class="copyright">
        2024 Papillon et les contributeurs associés. Ce site web est open-source.
      </p>
    </div>
  </div>
</div>