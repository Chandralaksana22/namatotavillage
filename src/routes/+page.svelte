<script lang="ts">
	import Footer from '$lib/component/navigation/Footer.svelte';
	import Navbar from '$lib/component/navigation/Navbar.svelte';
	import SectionAbout from '$lib/component/section/Section-about.svelte';
	import SectionTour from '$lib/component/section/Section-tour.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import type { PageServerData } from './$types';
	import Testimonials from '$lib/component/section/Testimonials.svelte';
	export let data: PageServerData;
	let information = data?.information;
	let packages = data?.packages;
	console.log(packages)
</script>

<svelte:head>
	<title>Desa Wisata Namatota</title>
</svelte:head>
<Navbar />
<section
	style="background-image:url('{information[0]?.images[0]?.path}'); height:100vh; background-size:cover; background-repeat:no-repeat; position:relative;"
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
<SectionAbout data={information}/>
<SectionTour data={packages}/>
<section class="numbers">
	<div
		class="section-padding bg-img bg-fixed back-position-center"
		data-background="{information[0]?.images[2]?.path}"
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
				<div class="owl-carousel owl-theme owl-loaded owl-drag">
					<div class="owl-stage-outer">
						<div
							class="owl-stage"
							style="transform: translate3d(-966px, 0px, 0px); transition: all; width: 3864px;"
						>
							<div class="owl-item active" style="width: 292px; margin-right: 30px;">
								<div class="item">
									<div class="position-re o-hidden">
										<img
											src="/img/destination/greece1.jpg"
											alt="images"
											style="height: 500px; object-fit:cover"
										/>
									</div>
									<span class="category"><a>New</a></span>
									<div class="con">
										<h5><a><i class="ti-location-pin"></i> Greece</a></h5>
										<div class="line"></div>
										<div class="row facilities">
											<div class="col col-md-8">
												<p>6 Tour Packages</p>
											</div>
											<div class="col col-md-4 text-right">
												<div class="permalink">
													<a href="/">Explore <i class="ti-arrow-right"></i></a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="owl-item" style="width: 292px; margin-right: 30px;">
								<div class="item">
									<div class="position-re o-hidden">
										<img
											src="/img/destination/france1.jpg"
											style="height: 500px; object-fit:cover"
											alt="images"
										/>
									</div>
									<span class="category"><a>15% OFF</a></span>
									<div class="con">
										<h5><a><i class="ti-location-pin"></i> France</a></h5>
										<div class="line"></div>
										<div class="row facilities">
											<div class="col col-md-8">
												<p>10 Tour Packages</p>
											</div>
											<div class="col col-md-4 text-right">
												<div class="permalink">
													<a href="/">Explore <i class="ti-arrow-right"></i></a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="owl-item" style="width: 292px; margin-right: 30px;">
								<div class="item">
									<div class="position-re o-hidden">
										<img
											src="/img/destination/dubai1.jpg"
											style="height: 500px; object-fit:cover"
											alt="images"
										/>
									</div>
									<span class="category"><a href="/">7 Tours</a></span>
									<div class="con">
										<h5><a href="/"><i class="ti-location-pin"></i> Dubai</a></h5>
										<div class="line"></div>
										<div class="row facilities">
											<div class="col col-md-8">
												<p>7 Tour Packages</p>
											</div>
											<div class="col col-md-4 text-right">
												<div class="permalink">
													<a href="/">Explore <i class="ti-arrow-right"></i></a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="owl-item" style="width: 292px; margin-right: 30px;">
								<div class="item">
									<div class="position-re o-hidden">
										<img
											src="/img/destination/maldives1.jpg"
											style="height: 500px; object-fit:cover"
											alt="images"
										/>
									</div>
									<span class="category"><a>New</a></span>
									<div class="con">
										<h5>
											<a href="/"><i class="ti-location-pin"></i> Maldives</a>
										</h5>
										<div class="line"></div>
										<div class="row facilities">
											<div class="col col-md-8">
												<p>4 Tour Packages</p>
											</div>
											<div class="col col-md-4 text-right">
												<div class="permalink">
													<a href="/">Explore <i class="ti-arrow-right"></i></a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="owl-item" style="width: 292px; margin-right: 30px;">
								<div class="item">
									<div class="position-re o-hidden">
										<img
											src="/img/destination/greece1.jpg"
											style="height: 500px; object-fit:cover"
											alt="images"
										/>
									</div>
									<span class="category"><a>New</a></span>
									<div class="con">
										<h5><a><i class="ti-location-pin"></i> Greece</a></h5>
										<div class="line"></div>
										<div class="row facilities">
											<div class="col col-md-8">
												<p>6 Tour Packages</p>
											</div>
											<div class="col col-md-4 text-right">
												<div class="permalink">
													<a href="/">Explore <i class="ti-arrow-right"></i></a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="owl-item" style="width: 292px; margin-right: 30px;">
								<div class="item">
									<div class="position-re o-hidden">
										<img
											src="/img/destination/france1.jpg"
											style="height: 500px; object-fit:cover"
											alt="images"
										/>
									</div>
									<span class="category"><a>15% OFF</a></span>
									<div class="con">
										<h5><a><i class="ti-location-pin"></i> France</a></h5>
										<div class="line"></div>
										<div class="row facilities">
											<div class="col col-md-8">
												<p>10 Tour Packages</p>
											</div>
											<div class="col col-md-4 text-right">
												<div class="permalink">
													<a href="/">Explore <i class="ti-arrow-right"></i></a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="owl-item" style="width: 292px; margin-right: 30px;">
								<div class="item">
									<div class="position-re o-hidden">
										<img
											src="/img/destination/dubai1.jpg"
											style="height: 500px; object-fit:cover"
											alt="images"
										/>
									</div>
									<span class="category"><a href="/">7 Tours</a></span>
									<div class="con">
										<h5><a href="/"><i class="ti-location-pin"></i> Dubai</a></h5>
										<div class="line"></div>
										<div class="row facilities">
											<div class="col col-md-8">
												<p>7 Tour Packages</p>
											</div>
											<div class="col col-md-4 text-right">
												<div class="permalink">
													<a href="/">Explore <i class="ti-arrow-right"></i></a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="tours1 section-padding">
	<div class="container">
		<div class="row mb-30">
			<div class="col-md-12">
				<div class="section-subtitle">Suvenir Eksklusif</div>
				<div class="section-title"><span>Suvenir</span> Namatota</div>
			</div>
		</div>
		<!-- Italy Tours -->
		<div class="row mb-90">
			<div class="col-md-5">
				<div class="country country1 mt-30">
					<p>
						Kami menyediakan berbagai macam suvenir unik dan menarik yang mencerminkan keindahan dan
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
				<div class="owl-carousel owl-theme owl-loaded owl-drag">
					<div class="owl-stage-outer">
						<div
							class="owl-stage"
							style="transform: translate3d(-849px, 0px, 0px); transition: all; width: 3396px;"
						>
							<div class="owl-item active" style="width: 253px; margin-right: 30px;">
								<div class="item">
									<div class="position-re o-hidden">
										<img src="/img/destination/venice1.jpg" alt="images" />
									</div>

									<div class="con">
										<h5><a href="/">Namatota</a></h5>
										<div class="line"></div>
									</div>
								</div>
							</div>
							<div class="owl-item" style="width: 253px; margin-right: 30px;">
								<div class="item">
									<div class="position-re o-hidden">
										<img src="/img/destination/milano.jpg" alt="images" />
									</div>
									<div class="con">
										<h5><a href="/">Namatota</a></h5>
										<div class="line"></div>
									</div>
								</div>
							</div>
							<div class="owl-item" style="width: 253px; margin-right: 30px;">
								<div class="item">
									<div class="position-re o-hidden">
										<img src="/img/destination/perugia1.jpg" alt="images" />
									</div>

									<div class="con">
										<h5><a href="/">Namatota</a></h5>
										<div class="line"></div>
									</div>
								</div>
							</div>
							<div class="owl-item" style="width: 253px; margin-right: 30px;">
								<div class="item">
									<div class="position-re o-hidden">
										<img src="/img/destination/parma1.jpg" alt="images" />
									</div>
									<div class="con">
										<h5><a href="/">Namatota</a></h5>
										<div class="line"></div>
									</div>
								</div>
							</div>
							<div class="owl-item" style="width: 253px; margin-right: 30px;">
								<div class="item">
									<div class="position-re o-hidden">
										<img src="/img/destination/aosta1.jpg" alt="images" />
									</div>
									<div class="con">
										<h5><a href="/">Namatota</a></h5>
										<div class="line"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- <div class="owl-nav disabled">
						<button type="button" role="presentation" class="owl-prev"
							><span class="lnr ti-angle-left"></span></button
						><button type="button" role="presentation" class="owl-next"
							><span class="lnr ti-angle-right"></span></button
						>
					</div>
					<div class="owl-dots">
						<button role="button" class="owl-dot active"><span></span></button><button
							role="button"
							class="owl-dot"><span></span></button
						><button role="button" class="owl-dot"><span></span></button>
					</div> -->
				</div>
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
				<Splide
					options={{
						rewind: false,
						gap: 5,
						perPage: 3,
						type: 'slide',
						arrows: true,
						pagination: false,
						breakpoints: {
							1024: {
								perPage: 3,
								gap: 10,
								padding: { right: '10%', left: '7%' }
							},
							768: {
								perPage: 1,
								gap: 10,
								padding: { right: '10%', left: '7%' }
							},
							480: {
								perPage: 1,
								gap: 10,
								padding: { right: '10%', left: '7%' }
							}
						}
					}}
				>
					<SplideSlide>
						<div class="item">
							<div class="position-re o-hidden">
								<img src="img/destination/aosta1.jpg" alt="" />
								<div class="date">
									<a href="/"> <span>Dec</span> <i>04</i> </a>
								</div>
							</div>
							<div class="con">
								<span class="category">
									<a href="/">Tours</a>
								</span>
								<h5><a href="/">Most Popular Yacht Charter Routes</a></h5>
							</div>
						</div>
					</SplideSlide>
				</Splide>
			</div>
		</div>
	</div>
</section>
<Testimonials data={information}/>
<Footer />
