<template>
	<li class="list-group-item" id="data-item">
	  	<img src="https://picsum.photos/id/250/200/300">
		<router-link to="/people/gal-godot"><h5 class="font-weight-bold">Gal Godot</h5></router-link>
		<p>Wonder Woman</p>
	</li>
</template>

<script>
	
	export default{
		name:'PeopleListItemComp'
	}

</script>

<style scoped>
	li{
		width:150px;
		border: none;
		padding: 0;
		margin-right: 2rem;
		text-align: center;
	}
	li img{
		border-radius: 100%;
		width: 150px;
		height: 150px;
	}
</style>