<template>
	<li class="list-group-item" id="data-item">
	  	<img :src="'https://www.themoviedb.org/t/p/w235_and_h235_face/'+image">
		<a :href="'/people/'+id"><h5 class="font-weight-bold">{{name}}</h5></a>
		<p>{{department}}</p>
	</li>
</template>

<script>
	
	export default{
		name:'PeopleListItemComp',
		props:['id','name','department','image']
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