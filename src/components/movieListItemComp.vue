<template>
	<li class="list-group-item" id="data-item">
	  	<img :src="'https://www.themoviedb.org/t/p/w220_and_h330_face/'+poster">
		<a :href="'/'+type+'/'+id"><h5 class="font-weight-bold">{{name}}</h5></a>
		<div class="progress">
			<div :class="'progress-bar bg-danger'" role="progressbar" :style="'width:'+rate*10+'%'" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{rate*10}}%</div>
		</div>
		<p>{{date}}</p>
	</li>
</template>

<script>
	
	export default{
		name:'MovieListItemComp',
		props:["id","poster","date","rate","name","type"]
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