<script lang="ts">
	import Footer from '$lib/component/navigation/Footer.svelte';
	import Navbar from '$lib/component/navigation/Navbar.svelte';

	import type { PageServerData } from './$types';
	import Testimonials from '$lib/component/section/Testimonials.svelte';
	export let data: PageServerData;
	let information = data?.information;

	console.log(information);
</script>

<svelte:head>
	<title>Desa Wisata Namatota</title>
</svelte:head>
<Navbar />
<div
	class="banner-header section-padding back-position-center valign bg-img bg-fixed"
	data-overlay-dark="5"
	data-background={information[0]?.images[0].path}
	style="background-image: url({information[0]?.images[0].path});"
>
	<div class="container">
		<div class="row">
			<div class="col-md-12 caption mt-90">
				<h5>Get in touch</h5>
				<h1>Contact <span>Us</span></h1>
			</div>
		</div>
	</div>
</div>
<section class="contact section-padding">
	<div class="container">
		<div class="row mb-90">
			<div class="col-md-6 mb-60">
				<h3>Desa Wisata Namatota</h3>
				<p>
					Terletak di Pulau Namatota, Kabupaten Kaimana, Papua Barat, Desa Namatota dikenal sebagai
					“Permata Tersembunyi” yang menawarkan keindahan Teluk Triton, budaya lokal yang autentik,
					dan pesona alam yang memukau.
				</p>
				<p>
					Temukan pengalaman wisata unik di desa yang kaya tradisi dan keindahan eksotis Papua
					Barat.
				</p>
				<div class="phone-call mb-30">
					<div class="icon"><span class="flaticon-phone-call"></span></div>
					<div class="text">
						<p>Kontak</p>
						<a href="tel:{information[0]?.phone_number}">{information[0]?.phone_number}</a>
					</div>
				</div>
				<div class="phone-call mb-30">
					<div class="icon"><span class="flaticon-message"></span></div>
					<div class="text">
						<p>Alamat Email</p>
						<a href="mailto:{information[0]?.email}">{information[0]?.email}</a>
					</div>
				</div>
				<div class="phone-call">
					<div class="icon"><span class="flaticon-placeholder"></span></div>
					<div class="text">
						<p>Lokasi</p>
						{information[0]?.address}
					</div>
				</div>
			</div>
			<div class="col-md-5 mb-30 offset-md-1">
				<div class="sidebar">
					<div class="right-sidebar">
						<div class="right-sidebar item">
							<h2>Get in touch</h2>
							<form method="post" class="right-sidebar item-form contact__form" action="mail.php">
								<!-- form message -->
								<div class="row">
									<div class="col-12">
										<div
											class="alert alert-success contact__msg"
											style="display: none"
											role="alert"
										>
											Your message was sent successfully.
										</div>
									</div>
								</div>
								<!-- form elements -->
								<div class="row">
									<div class="col-md-6 form-group">
										<input name="name" type="text" placeholder="Your Name *" required="" />
									</div>
									<div class="col-md-6 form-group">
										<input name="email" type="email" placeholder="Your Email *" required="" />
									</div>
									<div class="col-md-6 form-group">
										<input name="phone" type="text" placeholder="Your Number *" required="" />
									</div>
									<div class="col-md-6 form-group">
										<input name="subject" type="text" placeholder="Subject *" required="" />
									</div>
									<div class="col-md-12 form-group">
										<textarea
											name="message"
											id="message"
											cols="30"
											rows="4"
											placeholder="Message *"
											required=""
										></textarea>
									</div>
									<div class="col-md-12">
										<button class="butn-dark"><a href="#0"><span>Send Message</span></a></button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Map Section -->
		<div class="row">
			<div class="col-md-12 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2519.604349654549!2d133.91977554538246!3d-3.865163284372526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1736106555776!5m2!1sid!2sid"
					width="100%"
					height="600"
					style="border:0;"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	</div>
</section>
<Testimonials data={information} />
<Footer data={information} />
