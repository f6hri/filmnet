<template>
	<li class="list-group-item" id="data-item">
	  	<img :src="image?'https://www.themoviedb.org/t/p/w235_and_h235_face/'+image:not_image">
		<a :href="'/'+type+'/'+id"><h5 class="font-weight-bold">{{name}}</h5></a>
		<div  v-if="typeof job == 'string'">
			<span class="badge badge-info m-1">{{job}}</span>
		</div>
		<div v-else>
			<span class="badge badge-info m-1" v-for="role in job" :key="role.credit_id">
				{{role.character}}
			</span>
		</div>
	</li>
</template>

<script>
	
	export default{
		name:'PeopleListItemComp',
		props:['id','name','job','image','type'],
		data(){
			return{
				not_image:'https://redi.eu/wp-content/uploads/2015/08/not-available.png'
			}
		}
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