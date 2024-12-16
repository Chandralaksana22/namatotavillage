<script lang="ts">
	export let data: any = [];
</script>

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
						<a href="https://wa.me/{data[0]?.phone_number}">{data[0]?.phone_number}</a>
					</div>
				</div>
			</div>
			<div class="col-md-5 offset-md-1 animate-box" data-animate-effect="fadeInUp">
				<div class="img-exp">
					<div class="about-img">
						<div class="img">
							<img src={data[0]?.images[1]?.path} class="img-fluid" alt="images" />
						</div>
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
