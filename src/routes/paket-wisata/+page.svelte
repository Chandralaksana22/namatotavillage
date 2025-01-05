<script lang="ts">
	import Footer from '$lib/component/navigation/Footer.svelte';
	import Navbar from '$lib/component/navigation/Navbar.svelte';
	import '@splidejs/svelte-splide/css';
	import type { PageServerData } from './$types';
	import Testimonials from '$lib/component/section/Testimonials.svelte';
	export let data: PageServerData;
	let information = data?.information;
	let packages = data?.packages;
</script>

<svelte:head>
	<title>Paket Wisata - Desa Wisata Namatota</title>
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
				<h5>Pilih paket wisata Anda</h5>
				<h1>Paket Wisata <span>Populer</span></h1>
			</div>
		</div>
	</div>
</div>
<section class="destination1 section-padding">
	<div class="container">
		<div class="row">
			{#each packages as item}
				<div class="col-md-4">
					<div class="item">
						<div class="position-re o-hidden">
							<img src={item?.images[0]?.path} alt={item?.name} class="img-item" />
						</div>
						<div class="con">
							<h5>
								<a href="/paket-wisata/{item?.slug}"><i class="ti-location-pin"></i> {item?.name}</a
								>
							</h5>
							<div class="line"></div>
							<div class="row facilities">
								<div class="col col-md-8">
									<p>{item?.occupancy}</p>
								</div>
								<div class="col col-md-4 text-right">
									<div class="permalink">
										<a href="/paket-wisata/{item?.slug}">Selengkapnya</a>
									</div>
								</div>
							</div>
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
