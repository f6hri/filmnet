<template>
	<div class="card">
		<div class="card-head">
			<h3 class="text-center p-4">Beğenilen Film/Dizi Sayısı</h3>
		</div>
		<div class="card-body">
			<h1 class="text-center font-weight-bold text-danger">50/40</h1>
		</div>
		<div class="card-footer">
		</div>
	</div>
</template>

<script>
	
	export default{
		name:'InfoCardComp'
	}

</script>

<style scoped>
	.card{
		width: 15rem;
		border: none;
	}
	.card .card-footer{
		border: none;
		background-color: transparent;
	}
</style>