<template>
	<section id="likes" class="d-flex flex-row flex-wrap justify-content-center">
		<MovieCardComp />
		<MovieCardComp />
		<MovieCardComp />
		<MovieCardComp />
	</section>
</template>

<script>
	
	import MovieCardComp from '../components/movieCardComp.vue'

	export default{
		name:'LikesView',
		components:{
			MovieCardComp
		}
	}

</script>

<style scoped></style>