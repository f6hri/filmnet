<template>
	<main id="search">
		<div class="container">
			
			<h2 class="text-center mt-2">Arama Yap</h2>
			<div class="input-group mt-4 w-75 mx-auto">
			  <input type="text" class="form-control" placeholder="Ne aramıştınız?" aria-label="Recipient's username" aria-describedby="basic-addon2">
			  <div class="input-group-append">
			    <button class="btn btn-outline-info" type="button">Ara</button>
			  </div>
			</div>

			<div id="search-result" class="d-flex flex-row flex-wrap justify-content-center mt-5">
				<MovieCardComp />
			</div>

		</div>
	</main>
</template>

<script>

	import MovieCardComp from '../components/movieCardComp.vue'

	export default{
		name:'Search',
		components:{
			MovieCardComp
		}
	}
</script>

<style scoped>
	#search-result .card{
		margin:1rem;
		border:none;
	}
</style>