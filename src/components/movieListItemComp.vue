<template>
	<li class="list-group-item" id="data-item">
	  	<img src="https://picsum.photos/id/237/200/300">
		<router-link to="/movies/ray"><h5 class="font-weight-bold">Spider-Man</h5></router-link>
		<div class="progress">
			<div class="progress-bar bg-danger" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
		</div>
		<p>12-05-2020</p>
	</li>
</template>

<script>
	
	export default{
		name:'MovieListItemComp'
	}

</script>

<style scoped>
	li{
		width:150px;
		border: none;
		padding: 0;
		margin-right: 2rem;
	}
	li img{
		border-radius: 10px;
		width: 150px;
	}
</style>