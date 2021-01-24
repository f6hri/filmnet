<template>
	<div class="card">
		<div class="card-body">
			<img src="https://picsum.photos/id/237/200/300">
			<router-link to="/movies/ray"><h5 class="font-weight-bold">Spider-Man</h5></router-link>
			<div class="progress">
				<div class="progress-bar bg-danger" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
			</div>
			<p>12-05-2020</p>
		</div>
	</div>
</template>

<script>
	
	export default{
		name:'MovieCardComp'
	}

</script>

<style scoped>
	
	.card{
		border: none;
	}

</style>