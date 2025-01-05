<script lang="ts">
	import Footer from '$lib/component/navigation/Footer.svelte';
	import Navbar from '$lib/component/navigation/Navbar.svelte';
	import '@splidejs/svelte-splide/css';
	import type { PageServerData } from './$types';
	import Testimonials from '$lib/component/section/Testimonials.svelte';
	export let data: PageServerData;
	let information = data?.information;
	let room = data?.room;
	console.log(room);
</script>

<svelte:head>
	<title>Penginapan - Desa Wisata Namatota</title>
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
				<h5>Pilih penginapan kesukaan Anda</h5>
				<h1>Penginapan Paling <span>Populer</span></h1>
			</div>
		</div>
	</div>
</div>
<section class="destination1 section-padding">
	<div class="container">
		<div class="row">
			{#each room as item}
				<div class="col-md-4">
					<div class="item">
						<div class="position-re o-hidden">
							<img
								src={item.images[0]?.path}
								alt={item.name}
								style="height: 500px; object-fit:cover"
							/>
						</div>
						<span class="category">
							<!-- svelte-ignore a11y-missing-attribute -->
							<a>{item.occupancy}</a>
						</span>
						<div class="con">
							<h5>
								<!-- svelte-ignore a11y-missing-attribute -->
								<a>
									<i class="ti-location-pin"></i>
									{item.name}
								</a>
							</h5>
							<div class="line"></div>
							<div class="row facilities">
								<div class="col col-md-8">
									<p>{item.price}</p>
								</div>
								<div class="col col-md-4 text-right">
									<div class="permalink">
										<a href="/penginapan/{item?.slug}"> Selengkapnya </a>
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
