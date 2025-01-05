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
	{#each detail?.images as img}
		<SplideSlide>
			<img style="height: 100vh; object-fit:cover; width:100%" alt={img?.path} src={img?.path} />
		</SplideSlide>
	{/each}
</Splide>

<section class="tour-page section-padding" data-scroll-index="1">
	<div class="container">
		<div class="row">
			<div class="col-md-8 mb-30">
				<div class="section-subtitle">Penginapan</div>
				<div class="section-title mb-0">{detail?.name}</div>

				<div class="tour-page head-icon">
					<p><i class="ti-cloud"></i> {detail?.view}</p>
					<p><i class="ti-user"></i> Cakupan : {detail?.occupancy}</p>
					<p><i class="ti-infinite"></i>Tipe Penginapan : {detail?.type}</p>
					<p><i class="ti-money"></i> {detail?.price}</p>
				</div>
				<h6>Detail</h6>
				<div class="mb-30">
					{@html detail?.description}
				</div>
				{#if detail?.departure}
					<!-- tour-page time-table -->
					<div class="tour-page time-table">
						<span>Waktu Kedatangan</span>
						<p>{detail?.departure}</p>
					</div>
				{/if}

				{#if detail.facilities}
					<div class="tour-page time-table-price">
						<span>Fasilitas</span>
						<ul class="tour-page time-table-price-include">
							{#each detail?.facilities as data}
								<li><i class="ti-check"></i>{data.item}</li>
							{/each}
						</ul>
					</div>
				{/if}

				<!-- Gallery -->
				{#if detail?.images}
					<h6 class="mb-0">Foto Penginapan</h6>
					<div class="row">
						{#each detail?.images as img}
							<div class="col-md-4 gallery-item">
								<a href={img?.path} title="" class="img-zoom">
									<div class="gallery-box">
										<div class="gallery-img">
											<img src={img?.path} class="img-fluid mx-auto d-block" alt="work-img" />
										</div>
									</div>
								</a>
							</div>
						{/each}
					</div>
				{/if}
			</div>
			<!-- sidebar -->
			<div class="col-md-4">
				<div class="sidebar">
					<div class="right-sidebar">
						<div class="right-sidebar item">
							<h3>Pesan Sekarang</h3>
							<form method="post" class="right-sidebar item-form" action="">
								<div class="row">
									<div class="col-md-12 form-group">
										<input name="name" type="text" placeholder="Full Name" required="" />
									</div>
									<div class="col-md-12 form-group">
										<input name="email" type="email" placeholder="Email Address" required="" />
									</div>
									<div class="col-md-12 form-group input1_inner">
										<input
											type="text"
											class="form-control input datepicker hasDatepicker"
											placeholder="Travel Date"
											name="date"
											required=""
										/>
									</div>
									<div class="col-md-12 form-group">
										<input name="people" type="text" placeholder="People" required="" />
									</div>
									<div class="col-md-12 form-group">
										<textarea
											name="message"
											id="message"
											cols="30"
											rows="4"
											placeholder="Your Enquiry"
										></textarea>
									</div>
									<div class="col-md-12">
										<button class="butn-dark"><a href="/"><span>Pesan Sekarang</span></a></button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<Testimonials data={information} />
<Footer data={information} />
