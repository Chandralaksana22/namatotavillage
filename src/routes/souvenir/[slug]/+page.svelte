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

<Splide
	options={{
		rewind: false,
		gap: 5,
		perPage: 1,
		type: 'slide',
		arrows: false,
		pagination: false
	}}
>
	{#each information[0]?.images as img}
		<SplideSlide>
			<img style="height: 100vh; object-fit:cover; width:100%" alt={img?.path} src={img?.path} />
		</SplideSlide>
	{/each}
</Splide>

<section class="tour-page section-padding" data-scroll-index="1">
	<div class="container">
		<div class="row">
			<div class="col-md-12 mb-30">
				<div class="section-subtitle">Cinderamata</div>
				<div class="section-title mb-0">{detail?.name}</div>

				<div class="mb-30">
					{@html detail?.description}
				</div>
				<!-- Gallery -->
				{#if detail?.images}
					<h6 class="mb-0">Gambar Detail</h6>
					<div class="row">
						{#each detail?.images as img}
							<div class="col-md-4 gallery-item">
								<a href={img?.path} class="img-zoom">
									<div class="gallery-box">
										<div class="gallery-img">
											<img
												src={img?.path}
												class="img-fluid mx-auto d-block"
												style="height: 20rem; object-fit:cover"
												alt="work-img"
											/>
										</div>
									</div>
								</a>
							</div>
						{/each}
					</div>
				{/if}
				<br /><br />
				<div class="col-md-12">
					<a href={detail?.link_book} class="butn-dark"
						><a href="/"><span>Pesan Sekarang</span></a></a
					>
				</div>
			</div>
			<!-- sidebar -->
		</div>
	</div>
</section>
<Testimonials data={information} />
<Footer data={information} />
