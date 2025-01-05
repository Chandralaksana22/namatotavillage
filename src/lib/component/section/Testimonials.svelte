<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	export let data: any = [];
</script>

<section class="testimonials">
	<div
		class="background bg-img bg-fixed section-padding pb-0"
		data-background={data[0]?.images[1]?.path}
		data-overlay-dark="5"
		style="background-image: url({data[0]?.images[3]?.path});"
	>
		<div class="container">
			<div class="row">
				<!-- Call Now  -->
				<div class="col-md-5 mb-30 mt-30">
					<p>
						<i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i
							class="star-rating"
						></i><i class="star-rating"></i>
					</p>
					<h5>Kami Menyediakan Destinasi Terbaik Khusus untuk Anda. Pesan Sekarang dan Nikmati!</h5>
					<div class="phone-call mb-10">
						<div class="icon color-1"><span class="flaticon-phone-call"></span></div>
						<div class="text">
							<p class="color-1">Hubungi Kami</p>
							<a class="color-1" href="tel:{data[0]?.phone_number}">{data[0]?.phone_number}</a>
						</div>
					</div>
				</div>
				<!-- Booking From -->
				<div class="col-md-5 offset-md-2">
					<div class="testimonials-box">
						<div class="head-box">
							<h6>Testimoni</h6>
							<h4>Kata Mereka</h4>
						</div>
						<div>
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
								<SplideSlide>
									<div class="item">
										<p>
											Travel dapibus asue metus the nec feusiate era the miss hendreri the vemante
											the lemon insan toleon nectan feugiat erat hendrerit necuis vesaire tours
											inilla neca ine the sene miss habitan.
										</p>
										<div class="info">
											<!-- <div class="author-img"><img src="img/team/05.png" alt="" /></div> -->
											<div class="cont">
												<div class="rating">
													<i class="star active"></i> <i class="star active"></i>
													<i class="star active"></i> <i class="star active"></i>
													<i class="star active"></i>
												</div>
												<h6>Emily Brown</h6>
												<span>Guest review</span>
											</div>
										</div>
									</div>
								</SplideSlide>
							</Splide>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
