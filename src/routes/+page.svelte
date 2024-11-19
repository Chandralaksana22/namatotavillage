<script>
	import Navbar from '$lib/component/navigation/Navbar.svelte';
</script>

<Navbar />
<section
	style="background-image:url('/img/hero.jpg'); height:100vh; background-size:cover; background-repeat:no-repeat; position:relative;"
>
	<!-- Overlay -->
	<div
		style="background: rgba(0, 0, 0, 0.5); position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;"
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

<section class="about cover section-padding">
	<div class="container">
		<div class="row">
			<div class="col-md-6 mb-30 animate-box" data-animate-effect="fadeInUp">
				<div class="section-subtitle">Permata Tersembunyi Papua</div>
				<div class="section-title">Eksplorasi <span>Desa Wisata Namatota</span></div>
				<p>
					Terletak di Pulau Namatota, Kabupaten Kaimana, Papua Barat, Desa Namatota dikenal sebagai
					“Permata Tersembunyi” yang menawarkan keindahan Teluk Triton, budaya lokal yang autentik,
					dan pesona alam yang memukau.
				</p>
				<p>
					Temukan pengalaman wisata unik di desa yang kaya tradisi dan keindahan eksotis Papua
					Barat.
				</p>

				<ul class="list-unstyled about-list mb-30">
					<li>
						<div class="about-list-icon"><span class="ti-check"></span></div>
						<div class="about-list-text">
							<p>Pilihan Tepat untuk Liburan Tanpa Batas</p>
						</div>
					</li>
					<li>
						<div class="about-list-icon"><span class="ti-check"></span></div>
						<div class="about-list-text">
							<p>Destinasi Memukau, Pengalaman Tiada Duanya</p>
						</div>
					</li>
				</ul>

				<!-- Info -->
				<div class="phone-call mb-30">
					<div class="icon"><span class="flaticon-phone-call"></span></div>
					<div class="text">
						<p>Informasi Lebih Lanjut</p>
						<a href="tel:62 822-8707-1864">62 822-8707-1864</a>
					</div>
				</div>
			</div>
			<div class="col-md-5 offset-md-1 animate-box" data-animate-effect="fadeInUp">
				<div class="img-exp">
					<div class="about-img">
						<div class="img"><img src="/img/about.jpeg" class="img-fluid" alt="" /></div>
					</div>
					<div id="circle">
						<svg
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							width="300px"
							height="300px"
							viewBox="0 0 300 300"
							enable-background="new 0 0 300 300"
							xml:space="preserve"
						>
							<defs>
								<path
									id="circlePath"
									d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
								/>
							</defs>
							<circle cx="150" cy="100" r="75" fill="none" />
							<g>
								<use xlink:href="#circlePath" fill="none" />
								<text fill="/f2454">
									<textPath xlink:href="#circlePath"> . desa namatota . desa namatota </textPath>
								</text>
							</g>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="tours1 section-padding bg-lightnav" data-scroll-index="1">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="section-subtitle"><span>Temukan Destinasi Anda</span></div>
				<div class="section-title">Atraksi <span>Wisata</span></div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-8">
				<div class="item">
					<div class="position-re o-hidden"><img src="/img/tours/maldives1.jpg" alt="" /></div>
					<span class="category"><a href="/">$2.500</a></span>
					<div class="con">
						<div class="rating">
							<i class="star active"></i> <i class="star active"></i> <i class="star active"></i>
							<i class="star active"></i> <i class="star"></i>
							<div class="reviews-count">(2 Reviews)</div>
						</div>
						<h5><a href="/">Namatota Tour</a></h5>
						<div class="line"></div>
						<div class="row facilities">
							<div class="col col-md-12">
								<ul>
									<li><i class="ti-time"></i> 10 Days</li>
									<li><i class="ti-user"></i> 12+</li>
									<li><i class="ti-location-pin"></i> Namatota</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="item">
					<div class="position-re o-hidden"><img src="/img/tours/italy1.jpg" alt="" /></div>
					<span class="category"><a href="/">$1.300</a></span>
					<div class="con">
						<h5><a href="/">Namatota Tour</a></h5>
						<div class="line"></div>
						<div class="row facilities">
							<div class="col col-md-12">
								<ul>
									<li><i class="ti-time"></i> 6 Days</li>
									<li><i class="ti-user"></i> 10+</li>
									<li><i class="ti-location-pin"></i> Namatota</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="item">
					<div class="position-re o-hidden"><img src="/img/tours/france1.jpg" alt="" /></div>
					<span class="category"><a href="/">$400</a></span>
					<div class="con">
						<h5><a href="/">Namatota Tour</a></h5>
						<div class="line"></div>
						<div class="row facilities">
							<div class="col col-md-12">
								<ul>
									<li><i class="ti-time"></i> 10 Days</li>
									<li><i class="ti-user"></i> 6+</li>
									<li><i class="ti-location-pin"></i> Namatota</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="item">
					<div class="position-re o-hidden"><img src="/img/tours/greece1.jpg" alt="" /></div>
					<span class="category"><a href="#">$500</a></span>
					<div class="con">
						<h5><a href="/">Namatota Tour</a></h5>
						<div class="line"></div>
						<div class="row facilities">
							<div class="col col-md-12">
								<ul>
									<li><i class="ti-time"></i> 10 Days</li>
									<li><i class="ti-user"></i> 12+</li>
									<li><i class="ti-location-pin"></i> Namatota</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="item">
					<div class="position-re o-hidden"><img src="/img/tours/canada1.jpg" alt="" /></div>
					<span class="category"><a href="/">$300</a></span>
					<div class="con">
						<h5><a href="/">Namatota Tour</a></h5>
						<div class="line"></div>
						<div class="row facilities">
							<div class="col col-md-12">
								<ul>
									<li><i class="ti-time"></i> 7 Days</li>
									<li><i class="ti-user"></i> 10+</li>
									<li><i class="ti-location-pin"></i> Namatota</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
