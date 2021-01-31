<template>
	<section id="data-list-section">
		<div id="heading" class="d-flex flex-row justify-content-between">
			<h3>{{title}}</h3>
		</div>	
		<ul class="list-group list-group-horizontal" id="data-list" v-if="type == 'watch'">
		  
		 	<MovieListItemComp
		 		v-for="item in data" 
		 		:key="item.id"
		 		:id="item.id"
		 		:poster="item.poster"
		 		:date="item.date"
		 		:name="item.name"
		 		:rate="item.rate"
		 		:type="item.type"
		 	/>
		
		</ul>
		<ul class="list-group list-group-horizontal" id="data-list" v-if="type == 'person'">
		  
		 	<PeopleListItemComp
		 		v-for="item in data" 
		 		:key="item.id"
		 		:id="item.id"
		 		:image="item.image"
		 		:name="item.name"
		 		:job="item.job||item.character||item.roles"
		 		:type="type"
		 	/>
		
		</ul>
	</section>	 
</template>

<script>

	import MovieListItemComp from '../components/movieListItemComp.vue'
	import PeopleListItemComp from '../components/peopleListItemComp.vue'

	export default{
		name:'DataListComp',
		components:{
			MovieListItemComp,
			PeopleListItemComp
		},
		props:['title','type','data'],
	}

</script>

<style scoped>
	
	#data-list{
		overflow: hidden;
		overflow-x: scroll;
		width: 100%;
	}

	#selection{
		width:8rem;
	}

</style>