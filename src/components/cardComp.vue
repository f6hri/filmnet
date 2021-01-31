<template>
	<div class="card">
		<div class="card-body">
			<img :src="poster||image?'https://www.themoviedb.org/t/p/w220_and_h330_face'+poster||image:not_image">
			<a :href="'/'+type+'/'+id"><h5 class="font-weight-bold">{{name}}</h5></a>
			<div class="progress" v-if="rate">
				<div class="progress-bar bg-danger" role="progressbar" :style="'width:'+rate*10+'%'" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{rate*10}}%</div>
			</div>
			<p v-if="date">{{date}}</p>
			<span class="badge badge-info m-1" v-if="job">
				{{job}}
			</span>
		</div>
	</div>
</template>

<script>
	
	export default{
		name:'cardComp',
		props:[
			'id',
			'type',
			'name',
			'poster',
			'rate',
			'date',
			'image',
			'job',
		],
		data(){
			return{
				not_image:'https://redi.eu/wp-content/uploads/2015/08/not-available.png'
			}
		},
	}

</script>

<style scoped>
	
	.card{
		border: none;
		width:35vh;
	}
	.card img{
		width: 100%;
	}

</style>