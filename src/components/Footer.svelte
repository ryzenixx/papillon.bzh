<script>
	import '../styles/footer.css';

	const sections = [
		{
			title: 'Ressources',
			links: [
				{ name: 'Documentation', href: 'https://docs.papillon.bzh' },
				{ name: 'Blog', href: 'https://blog.papillon.bzh' }
			]
		},
		{
			title: 'Nous retrouver',
			links: [
				{ name: 'X (ex. Twitter)', href: 'https://x.com/thepapillonapp' },
				{ name: 'Instagram', href: 'https://instagram.com/thepapillonapp' },
				{ name: 'TikTok', href: 'https://tiktok.com/@thepapillonapp' },
				{ name: 'YouTube', href: 'https://youtube.com/@thepapillonapp' },
				{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/getpapillonapp' }
			]
		},
		{
			title: 'Communauté',
			links: [
				{ name: 'GitHub', href: 'https://github.com/PapillonApp' },
				{ name: 'Discord', href: 'https://discord.gg/wVKWBRTbfh' }
			]
		}
	];
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
