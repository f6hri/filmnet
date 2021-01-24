<template>
	<main id="home">
		<div class="container">
			<SliderComp />
			<DataListComp />
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
		}
	}

</script>

<style scoped>
	.container section{
		margin: 1rem 0;
	}
</style>