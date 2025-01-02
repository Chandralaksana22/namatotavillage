<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	export let data: any[] = [];
</script>

<Splide
	options={{
		rewind: false,
		gap: 3,
		perPage: 4,
		type: 'loop',
		pagination: false,
		arrows: false,
		breakpoints: {
			640: {
				perPage: 1,
				gap: 5,
				perMove: 1
			},
			768: {
				perPage: 2,
				gap: 10,
				perMove: 1
			},
			1024: {
				perPage: 3,
				gap: 10,
				perMove: 1
			},
			1280: {
				perPage: 3,
				gap: 10,
				perMove: 1
			}
		}
	}}
>
	{#each data as item}
		<SplideSlide>
			<div class="item">
				<div class="position-re o-hidden">
					<img src={item.images[0]?.path} alt={item.name} style="height: 500px; object-fit:cover" />
				</div>
				<span class="category">
					<!-- svelte-ignore a11y-missing-attribute -->
					<a>{item.occupancy}</a>
				</span>
				<div class="con">
					<h5>
						<!-- svelte-ignore a11y-missing-attribute -->
						<a>
							<i class="ti-location-pin"></i>
							{item.name}
						</a>
					</h5>
					<div class="line"></div>
					<div class="row facilities">
						<div class="col col-md-8">
							<p>{item.price}</p>
						</div>
						<div class="col col-md-4 text-right">
							<div class="permalink">
								<a href="/">
									Explore <i class="ti-arrow-right"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</SplideSlide>
	{/each}
</Splide>
