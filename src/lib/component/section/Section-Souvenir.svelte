<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	export let data: any[] = [];
</script>

<Splide
	options={{
		rewind: false,
		gap: 3,
		perPage: 2,
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
				perPage: 2,
				gap: 10,
				perMove: 1
			},
			1280: {
				perPage: 2,
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
					<img src={item?.images[0]?.path} alt="images" />
				</div>

				<div class="con">
					<h5><a href="/">{item?.name}</a></h5>
					<div class="line"></div>
				</div>
			</div>
		</SplideSlide>
	{/each}
</Splide>
