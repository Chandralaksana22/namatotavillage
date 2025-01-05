<script lang="ts">
	import Footer from '$lib/component/navigation/Footer.svelte';
	import Navbar from '$lib/component/navigation/Navbar.svelte';
	import '@splidejs/svelte-splide/css';
	import type { PageServerData } from './$types';
	import Testimonials from '$lib/component/section/Testimonials.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	export let data: PageServerData;
	let information = data?.information;
	let detail = data?.detail;
	console.log(detail);
</script>

<svelte:head>
	<title>{detail?.name} - Desa Wisata Namatota</title>
</svelte:head>
<Navbar />

<div
	class="banner-header section-padding back-position-center valign bg-img bg-fixed"
	data-overlay-dark="5"
	data-background={detail?.images[0]?.path}
	style="background-image: url({detail?.images[0]?.path});"
>
	<div class="container">
		<div class="row">
			<div class="col-md-12 text-left caption mt-90">
				<h5><a href="/blog">Blog</a> / Detail Blog</h5>
				<h1>{detail?.name}</h1>
				<div class="post">
					<div class="author" style="color: white;">
						<i class="ti-user"></i> <span>{detail?.author}</span>
					</div>
					<div class="date-comment">
						<i class="ti-calendar"></i>{new Intl.DateTimeFormat('id-ID', {
							day: 'numeric',
							month: 'long',
							year: 'numeric'
						}).format(new Date(detail?.updated_at))}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<section class="section-padding">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2>{detail?.name}</h2>
				<div>
					{@html detail?.post}
				</div>
			</div>
		</div>
	</div>
</section>
<Testimonials data={information} />
<Footer data={information} />
