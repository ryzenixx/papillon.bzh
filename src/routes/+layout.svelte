<script>
  import '../styles/global.css';
	import Navbar from "../components/Navbar.svelte";

  export const prerender = true;
  export const trailingSlash = 'always';
</script>

<Navbar />
<slot></slot>