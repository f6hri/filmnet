<template>
	<main id="movies">
		<div class="container">
			<div class="row mt-4">
				<div class="col">
					<h2>Filmler</h2>
					<ResultSettingComp />
				</div>
				<div class="col-9">
					<div id="result" class="d-flex flex-row justify-content-center flex-wrap">
						<MovieCardComp />
					</div>
				</div>	
			</div>
		</div>
	</main>
</template>

<script>
	
	import ResultSettingComp from '../components/resultSettingComp.vue'
	import MovieCardComp from '../components/movieCardComp.vue'

	export default{
		name:'Result',
		components:{
			ResultSettingComp,
			MovieCardComp
		}
	}

</script>

<style scoped>
	
	#result .card{
		margin: 1rem;
		border:none;
	}
	.card img{
		border-radius: 10px
	}

</style>