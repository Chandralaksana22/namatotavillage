<script lang="ts">
	const currentYear = new Date().getFullYear();
	export let data: any[] = [];
</script>

<footer class="footer clearfix">
	<div class="container">
		<!-- First footer -->
		<div class="first-footer">
			<div class="row">
				<div class="col-md-12">
					<div class="links dark footer-contact-links">
						<div class="footer-contact-links-wrapper">
							<div class="footer-contact-link-wrapper">
								<div class="image-wrapper footer-contact-link-icon">
									<div class="icon-footer"><i class="flaticon-phone-call"></i></div>
								</div>
								<div class="footer-contact-link-content">
									<h6>Hubungi Kami</h6>
									<p>{data[0]?.phone_number}</p>
								</div>
							</div>
							<div class="footer-contact-links-divider"></div>
							<div class="footer-contact-link-wrapper">
								<div class="image-wrapper footer-contact-link-icon">
									<div class="icon-footer"><i class="flaticon-message"></i></div>
								</div>
								<div class="footer-contact-link-content">
									<h6>Hubungi kami melalui email</h6>
									<p>{data[0]?.email}</p>
								</div>
							</div>
							<div class="footer-contact-links-divider"></div>
							<div class="footer-contact-link-wrapper">
								<div class="image-wrapper footer-contact-link-icon">
									<div class="icon-footer"><i class="flaticon-placeholder"></i></div>
								</div>
								<div class="footer-contact-link-content">
									<h6>Alamat</h6>
									<p>{data[0]?.address}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Second footer -->
		<div class="second-footer">
			<div class="row">
				<!-- about & social icons -->
				<div class="col-md-4 widget-area">
					<div class="widget clearfix">
						<!-- <div class="footer-logo"><img class="img-fluid" src="img/logo-light.png" alt="" /></div> -->
						<div class="widget-text">
							<p>
								Terletak di Pulau Namatota, Kabupaten Kaimana, Papua Barat, Desa Namatota dikenal
								sebagai “Permata Tersembunyi” yang menawarkan keindahan Teluk Triton, budaya lokal
								yang autentik, dan pesona alam yang memukau.
							</p>
							<p>
								Temukan pengalaman wisata unik di desa yang kaya tradisi dan keindahan eksotis Papua
								Barat.
							</p>
							<!-- <div class="social-icons">
								<ul class="list-inline">
									<li><a href="#"><i class="ti-instagram"></i></a></li>
									<li><a href="#"><i class="ti-twitter"></i></a></li>
									<li><a href="#"><i class="ti-facebook"></i></a></li>
									<li><a href="#"><i class="ti-youtube"></i></a></li>
								</ul>
							</div> -->
						</div>
					</div>
				</div>
				<!-- quick links -->
				<div class="col-md-3 offset-md-1 widget-area">
					<div class="widget clearfix usful-links">
						<h3 class="widget-title">Navigasi</h3>
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="/paket-wisata">Paket Wisata</a></li>
							<li><a href="/penginapan">Penginapan</a></li>
							<li><a href="/souvenir">Souvenir</a></li>
							<li><a href="/blog">Blog</a></li>
						</ul>
					</div>
				</div>
				<!-- subscribe -->
				<div class="col-md-4 widget-area">
					<div class="widget clearfix">
						<h3 class="widget-title">Langganan</h3>
						<p>Daftar blog bulanan kami untuk info terbaru perjalanan dan tur</p>
						<div class="widget-newsletter">
							<form action="#">
								<input type="email" placeholder="Email Address" required="" />
								<button type="submit">Send</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Bottom footer -->
		<div class="bottom-footer-text">
			<div class="row copyright">
				<div class="col-md-12">
					<p class="mb-0">
						©{currentYear} <a href="/">Desa Wisata Namatota</a>. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	</div>
</footer>
