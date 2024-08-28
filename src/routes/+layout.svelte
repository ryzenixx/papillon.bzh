<script>
  import '../styles/global.css';
	import Navbar from "../components/Navbar.svelte";

  export const prerender = true;

</script>

<Navbar />
<slot></slot>