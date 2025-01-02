<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	export let data: any[] = [];
</script>

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
	{#each data as item}
		<SplideSlide>
			<div class="item">
				<div class="position-re o-hidden">
					<img src={item?.images[0]?.path} alt={item?.images[0]?.path} style="height: 30rem; object-fit:cover" />
					<div class="date">
						<a href="/">
							<span> {new Date(item.created_at).toLocaleString('id-ID', { month: 'short' })}</span>
							<i> {new Date(item.created_at).toLocaleString('id-ID', { day: 'numeric' })}</i>
						</a>
					</div>
				</div>
				<div class="con">
					<span class="category">
						<a href="/">{item?.category}</a>
					</span>
					<h5><a href="/">{item?.name}</a></h5>
				</div>
			</div>
		</SplideSlide>
	{/each}
</Splide>
