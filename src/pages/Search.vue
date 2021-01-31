<template>
	<main id="search">
		<div class="container">
			
			<h2 class="text-center mt-2">Arama Yap</h2>
			<div class="input-group mt-4 w-75 mx-auto">
			  <input type="text" class="form-control" v-model="searchText" placeholder="Ne aramıştınız?" aria-label="Recipient's username" aria-describedby="basic-addon2">
			  <div class="input-group-append">
			    <button class="btn btn-outline-info" v-on:click="search()" type="button">Ara</button>
			  </div>
			</div>

			<div id="search-result" v-if="results && isLoading == false" class="d-flex flex-row flex-wrap justify-content-center mt-5">
					<CardComp 
						v-for="result in results" 
						:key="result.id"
						:id="result.id"
						:type="result.type"
						:name="result.name"
						:poster="result.image"
						:rate="result.rate"
						:date="result.date"
						:image="result.image"
						:job="result.job"  
					/>
			</div>
			<div v-if="!results && isLoading == false" class="d-flex flex-row flex-wrap justify-content-center align-self-center mt-5">
				<h2>Not Results</h2>
			</div>
			<div v-if="isLoading" class="d-flex flex-row flex-wrap justify-content-center align-self-center mt-5">
				<div class="spinner-border text-info" role="status">
				  <span class="sr-only">Loading...</span>
				</div>
			</div>
		</div>
	</main>
</template>

<script>

	import CardComp from '../components/cardComp.vue'

	export default{
		name:'Search',
		components:{
			CardComp,
		},
		data(){
			return{
				searchText:undefined,
			}
		},
		methods:{
			search(){
				if(this.searchText){
					let searchText = this.searchText.replace(" ","%20")
					this.$store.dispatch('getResults',{query:searchText})
				}else{
					alert('Arama kısmını boş')
				}
			}
		},
		computed:{
			results(){
				return this.$store.getters.returnResults
			},
			isLoading(){
				return this.$store.getters.isLoading
			}
		}
	}
</script>

<style scoped>
	#search-result .card{
		margin:1rem;
		border:none;
	}
</style>