<template>
	<main id="detail">
		<div class="container">
			<div class="row mt-4">
				<div class="col d-flex flex-row justify-content-center">
					<div id="poster">
						<img src="https://picsum.photos/id/227/250/400">
						<h3 class="mt-2">Ray <span class="text-dark">(2020)</span></h3>
						<div class="progress">
							<div class="progress-bar bg-success" role="progressbar" style="width: 75%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
						</div>
						<div class="d-flex mt-1">
							<a href="#" class="nav-link"><i class="fas fa-heart"></i></a>
						</div>
					</div>
				</div>
				<div class="col-9 mx-auto">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
					<DataListComp />
				</div>		
			</div>
		</div>
	</main>
</template>

<script>
	
	import DataListComp from '../components/dataListComp.vue'

	export default{
		name:'Detail',
		components:{
			DataListComp
		}
	}

</script>

<style scoped>
	.col-9 p{
		margin: 1rem 0
	}
</style>