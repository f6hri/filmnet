<template>
	<main id="home">
		<div class="container">
			<SliderComp />
			<DataListComp title="Trend" type="trend" :data="trend" />
			<DataListComp title="Popüler Filmler" type="movie" :data="films" />
			<DataListComp title="Popüler Diziler" type="tv" :data="TV" />
			<DataListComp title="Popüler Oyuncular" type="people" :data="people" />
		</div>
	</main>
</template>

<script>
	
	import SliderComp from '../components/sliderComp.vue'
	import DataListComp from '../components/dataListComp.vue'

	export default{
		name:'Home',
		components:{
			SliderComp,
			DataListComp
		},
		created(){
			this.setData()
		},
		methods:{
			setData(){
				this.$store.dispatch('getTrend')
				this.$store.dispatch('getFilms')
				this.$store.dispatch('getTVs')
				this.$store.dispatch('getPeople')
			}
		},
		computed:{
			trend(){
				return this.$store.getters.returnTrend[0]
			},
			films(){
				return this.$store.getters.returnFilms[0]
			},
			TV(){
				return this.$store.getters.returnTVs[0]
			},
			people(){
				return this.$store.getters.returnPeople[0]
			},
		}
	}

</script>

<style scoped>
	.container section{
		margin: 1rem 0;
	}
</style>