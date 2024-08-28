<script>
  import '../styles/global.css';
	import Navbar from "../components/Navbar.svelte";

  export const ssr = false;
</script>

<Navbar />
<slot></slot>