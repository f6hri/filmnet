<template>
	<section id="data-list-section">
		<div id="heading" class="d-flex flex-row justify-content-between">
			<h3>En Popüler</h3>
			<div class="input-group" id="selection">
			  <select class="custom-select" id="inputGroupSelect01">
			    <option selected>Tümü</option>
			    <option value="1">Filmler</option>
			    <option value="2">Diziler</option>
			  </select>
			</div>
		</div>	
		<hr>
		<ul class="list-group list-group-horizontal" id="data-list">
		  
		 	<MovieListItemComp />
		 	<PeopleListItemComp />
		
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
		}
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