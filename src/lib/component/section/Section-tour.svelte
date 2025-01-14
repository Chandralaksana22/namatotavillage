<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	export let data: any = [];
</script>

<section class="tours1 section-padding bg-lightnav" data-scroll-index="1">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="section-subtitle"><span>Temukan Destinasi Anda</span></div>
				<div class="section-title">Paket <span>Wisata</span></div>
			</div>
		</div>
	{#if data?.length > 0}
	<div class="row">
		<div class="col-md-8">
			<div class="item" style="height: 95%;">
				<div class="position-re o-hidden" style="height: 100%;">
					<img style="height: 100%;" src={data[0]?.images[0]?.path} alt="images" />
				</div>
				<span class="category"><a data-sveltekit-reload href="/paket-wisata/{data[0]?.slug}">{data[0]?.rate}</a></span>
				<div class="con">
					<h5><a data-sveltekit-reload href="/paket-wisata/{data[0]?.slug}">{data[0]?.name}</a></h5>
					<div class="line"></div>
					<div class="row facilities">
						<div class="col col-md-12">
							<ul>
								<li><i class="ti-time"></i> {data[0]?.duration}</li>
								<li><i class="ti-user"></i> {data[0]?.occupancy}</li>
								<li><i class="ti-location-pin"></i> {data[0]?.location}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="item" style="height: 95%;">
				<div class="position-re o-hidden" style="height: 100%;">
					<img
						style="height: 100%; object-fit:cover"
						src={data[1]?.images[0]?.path}
						alt="images"
					/>
				</div>
				<span class="category"><a data-sveltekit-reload href="/paket-wisata/{data[1]?.slug}">{data[1]?.rate}</a></span>
				<div class="con">
					<h5><a data-sveltekit-reload href="/paket-wisata/{data[1]?.slug}">{data[1]?.name}</a></h5>
					<div class="line"></div>
					<div class="row facilities">
						<div class="col col-md-12">
							<ul>
								<li><i class="ti-time"></i> {data[1]?.duration}</li>
								<li><i class="ti-user"></i> {data[1]?.occupancy}</li>
								<li><i class="ti-location-pin"></i> {data[1]?.location}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="item" style="height: 95%;">
				<div class="position-re o-hidden" style="height: 100%;">
					<img style="height: 100%;" src={data[2]?.images[0]?.path} alt="images" />
				</div>
				<span class="category"><a data-sveltekit-reload href="/paket-wisata/{data[2]?.slug}">{data[2]?.rate}</a></span>
				<div class="con">
					<h5><a data-sveltekit-reload href="/paket-wisata/{data[0]?.slug}">{data[2]?.name}</a></h5>
					<div class="line"></div>
					<div class="row facilities">
						<div class="col col-md-12">
							<ul>
								<li><i class="ti-time"></i> {data[2]?.duration}</li>
								<li><i class="ti-user"></i> {data[2]?.occupancy}</li>
								<li><i class="ti-location-pin"></i> {data[2]?.location}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="item" style="height: 95%;">
				<div class="position-re o-hidden" style="height: 100%;">
					<img style="height: 100%;" src={data[3]?.images[0]?.path} alt="images" />
				</div>
				<span class="category"><a data-sveltekit-reload href="/paket-wisata/{data[3]?.slug}">{data[3]?.rate}</a></span>
				<div class="con">
					<h5><a data-sveltekit-reload href="/paket-wisata/{data[3]?.slug}">{data[3]?.name}</a></h5>
					<div class="line"></div>
					<div class="row facilities">
						<div class="col col-md-12">
							<ul>
								<li><i class="ti-time"></i> {data[3]?.duration}</li>
								<li><i class="ti-user"></i> {data[3]?.occupancy}</li>
								<li><i class="ti-location-pin"></i> {data[3]?.location}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="item" style="height: 95%;">
				<div class="position-re o-hidden" style="height: 100%;">
					<img style="height: 100%;" src={data[4]?.images[0]?.path} alt="images" />
				</div>
				<span class="category"><a data-sveltekit-reload href="/paket-wisata/{data[4]?.slug}">{data[4]?.rate}</a></span>
				<div class="con">
					<h5><a data-sveltekit-reload href="/paket-wisata/{data[4]?.slug}">{data[4]?.name}</a></h5>
					<div class="line"></div>
					<div class="row facilities">
						<div class="col col-md-12">
							<ul>
								<li><i class="ti-time"></i> {data[4]?.duration}</li>
								<li><i class="ti-user"></i> {data[4]?.occupancy}</li>
								<li><i class="ti-location-pin"></i> {data[4]?.location}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/if}
	</div>
</section>
