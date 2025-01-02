<script lang="ts">
	import Footer from '$lib/component/navigation/Footer.svelte';
	import Navbar from '$lib/component/navigation/Navbar.svelte';
	import SectionAbout from '$lib/component/section/Section-about.svelte';
	import SectionTour from '$lib/component/section/Section-tour.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import type { PageServerData } from './$types';
	import Testimonials from '$lib/component/section/Testimonials.svelte';
	import SectionRoom from '$lib/component/section/Section-Room.svelte';
	import SectionSouvenir from '$lib/component/section/Section-Souvenir.svelte';
	import SectionBlog from '$lib/component/section/Section-Blog.svelte';
	export let data: PageServerData;
	let information = data?.information;
	let packages = data?.packages;
	let room = data?.room;
	let souvenir = data?.souvenir
	let post = data?.post
	console.log(information);
</script>

<svelte:head>
	<title>Desa Wisata Namatota</title>
</svelte:head>
<Navbar />
<section
	style="background-image:url('{information[0]?.images[0]
		?.path}'); height:100vh; background-size:cover; background-repeat:no-repeat; position:relative;"
>
	<div
		style="background: rgba(0, 0, 0, 0.3); position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;"
	></div>

	<!-- Content -->
	<div
		class="kenburns-inner"
		style="position:relative; z-index:2; display: flex; justify-content: center; align-items: center; height: 65%;"
	>
		<div class="v-middle caption text-center">
			<div class="container">
				<div class="row h-100 justify-content-center">
					<div class="col-md-12 text-center">
						<h4>Ayo eksplorasi keindahan bersama kami</h4>
						<h1>Jelajahi Desa Wisata <span>Namatota</span></h1>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<SectionAbout data={information} />
<SectionTour data={packages} />
<section class="numbers">
	<div
		class="section-padding bg-img bg-fixed back-position-center"
		data-background={information[0]?.images[2]?.path}
		data-overlay-dark="6"
		style="background-image: url({information[0]?.images[2]?.path});"
	>
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="item text-center">
						<span class="icon">
							<i class="front flaticon-air-freight"></i>
							<i class="back flaticon-air-freight"></i>
						</span>
						<h3>35 km</h3>
						<h6>Dari Bandara</h6>
					</div>
				</div>
				<div class="col-md-4">
					<div class="item text-center">
						<span class="icon">
							<i class="font flaticon-house"></i>
							<i class="back flaticon-house"></i>
						</span>
						<h3>28 km</h3>
						<h6>Dari Pusat Kota</h6>
					</div>
				</div>
				<div class="col-md-4">
					<div class="item text-center">
						<span class="icon">
							<i class="front flaticon-ship"></i>
							<i class="back flaticon-ship"></i>
						</span>
						<h3>28 km</h3>
						<h6>Dari Pelabuhan</h6>
					</div>
				</div>
				<!-- <div class="col-md-3">
					<div class="item text-center">
						<span class="icon">
							<i class="front flaticon-tag"></i>
							<i class="back flaticon-tag"></i>
						</span>
						<h3 class="count">100</h3>
						<h6>Ticket Booking</h6>
					</div>
				</div> -->
			</div>
		</div>
	</div>
</section>
<section class="destination1 section-padding bg-lightnav">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="section-subtitle">Kamar Homestay Terbaik</div>
				<div class="section-title">Pilihan <span>Kamar Homestay</span></div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<SectionRoom data={room} />
			</div>
		</div>
	</div>
</section>
<section class="tours1 section-padding">
	<div class="container">
		<div class="row mb-30">
			<div class="col-md-12">
				<div class="section-subtitle">Cendera mata Eksklusif</div>
				<div class="section-title"><span>Cendera mata</span> Namatota</div>
			</div>
		</div>
		<!-- Italy Tours -->
		<div class="row mb-90">
			<div class="col-md-5">
				<div class="country country1 mt-30">
					<p>
						Kami menyediakan berbagai macam cendera mata unik dan menarik yang mencerminkan keindahan dan
						kekayaan budaya Namatota. Temukan koleksi eksklusif yang akan menjadi kenangan indah
						dari perjalanan Anda ke Namatota, dari kerajinan tangan lokal hingga barang-barang khas
						yang hanya dapat Anda temui di sini.
					</p>

					<div class="butn-dark mt-30 mb-30">
						<a href="/" data-scroll-nav="1" class=""
							><span>Explore <i class="ti-arrow-right"></i></span></a
						>
					</div>
				</div>
			</div>
			<div class="col-md-7">
				<SectionSouvenir data={souvenir}/>
			</div>
		</div>
	</div>
</section>
<section class="blog section-padding bg-navy">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="section-subtitle"><span>Travel Blog</span></div>
				<div class="section-title"><span>Pengalaman</span>perjalanan</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
			<SectionBlog data={post}/>
			</div>
		</div>
	</div>
</section>
<Testimonials data={information} />
<Footer data={information} />
