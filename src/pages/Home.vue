<template>
	<main id="home">
		<div class="container">
			<SliderComp :data="trend" />
			<DataListComp title="Trend" :type="'watch'" :data="trend" />
			<DataListComp title="Popüler Filmler" :type="'watch'" :data="films" />
			<DataListComp title="Popüler Diziler" :type="'watch'" :data="TV" />
			<DataListComp title="Popüler Oyuncular" :type="'person'" :data="people" />
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
				return this.$store.getters.returnTrend
			},
			films(){
				return this.$store.getters.returnFilms
			},
			TV(){
				return this.$store.getters.returnTVs
			},
			people(){
				return this.$store.getters.returnPeople
			},
		}
	}

</script>

<style scoped>
	.container section{
		margin: 1rem 0;
	}
</style>