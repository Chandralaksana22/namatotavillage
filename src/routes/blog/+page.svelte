<script lang="ts">
	import Footer from '$lib/component/navigation/Footer.svelte';
	import Navbar from '$lib/component/navigation/Navbar.svelte';
	import '@splidejs/svelte-splide/css';
	import type { PageServerData } from './$types';
	import Testimonials from '$lib/component/section/Testimonials.svelte';
	export let data: PageServerData;
	let information = data?.information;
	let blog = data?.blog;
	console.log(blog);
</script>

<svelte:head>
	<title>Blog - Desa Wisata Namatota</title>
</svelte:head>
<Navbar />
<div
	class="banner-header section-padding valign bg-img bg-fixed back-position-center"
	data-overlay-dark="6"
	data-background={information[0]?.images[0]?.path}
	style="background-image: url({information[0]?.images[0]?.path});"
>
	<div class="container">
		<div class="row">
			<div class="col-md-12 caption mt-90">
				<h5>Baca blog perjalanan</h5>
				<h1>Blog Tentang <span>Namatota</span></h1>
			</div>
		</div>
	</div>
</div>
<section class="blog section-padding bg-lightnav">
	<div class="container">
		<div class="row">
			{#each blog as item}
				<div class="col-md-4 mb-30">
					<div class="item">
						<div class="position-re o-hidden">
							<img
								src={item?.images[0]?.path}
								alt={item?.images[0]?.path}
								style="height: 30rem; object-fit:cover"
							/>
							<div class="date">
								<a data-sveltekit-reload href="/blog/{item?.slug}">
									<span>
										{new Date(item.created_at).toLocaleString('id-ID', { month: 'short' })}</span
									>
									<i> {new Date(item.created_at).toLocaleString('id-ID', { day: 'numeric' })}</i>
								</a>
							</div>
						</div>
						<div class="con">
							<span class="category">
								<a data-sveltekit-reload href="/blog/{item?.slug}">{item?.category}</a>
							</span>
							<h5><a data-sveltekit-reload href="/blog/{item?.slug}">{item?.name}</a></h5>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<Testimonials data={information} />
<Footer data={information} />

<style>
	.img-item {
		height: 35rem;
		width: 100%;
		object-fit: cover;
	}

	@media (max-width: 1024px) and (min-width: 768px) {
		.img-item {
			height: 25rem;
		}
	}

	@media (max-width: 767px) {
		.img-item {
			height: 15rem;
		}
	}
</style>
