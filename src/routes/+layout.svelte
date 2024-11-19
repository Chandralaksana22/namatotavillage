<script lang="ts">
	import { onMount } from 'svelte';
	import '$lib/css/plugin.css';
	import '$lib/css/style.css';
	onMount(() => {
		const scripts = [
			{ src: '/js/jquery-3.6.3.min.js', async: false },
			{ src: '/js/jquery-migrate-3.0.0.min.js', async: false },
			{ src: '/js/modernizr-2.6.2.min.js', async: false },
			{ src: '/js/imagesloaded.pkgd.min.js', async: false },
			{ src: '/js/jquery.isotope.v3.0.2.js', async: false },
			{ src: '/js/pace.js', async: false },
			{ src: '/js/popper.min.js', async: false },
			{ src: '/js/bootstrap.min.js', async: false },
			{ src: '/js/scrollIt.min.js', async: false },
			{ src: '/js/jquery.waypoints.min.js', async: false },
			{ src: '/js/owl.carousel.min.js', async: false },
			{ src: '/js/jquery.stellar.min.js', async: false },
			{ src: '/js/jquery.magnific-popup.js', async: false },
			{ src: '/js/YouTubePopUp.js', async: false },
			{ src: '/js/select2.js', async: false },
			{ src: '/js/datepicker.js', async: false },
			{ src: '/js/jquery.counterup.min.js', async: false },
			{ src: '/js/smooth-scroll.min.js', async: false },
			{ src: '/js/vegas.slider.min.js', async: false },
			{ src: '/js/custom.js', async: false }
		];

		scripts.forEach(({ src, async }) => {
			const script = document.createElement('script');
			script.src = src;
			script.async = async;
			document.head.appendChild(script);
		});
	});

	let { children } = $props();
</script>

<div class="app">
	{@render children()}
</div>
