<template>
	<main id="detail">
		<div class="container">
			<div class="row mt-4">
				<div class="col d-flex flex-row justify-content-center">
					<div id="poster">
						<img :src="'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+info.poster_path" width="100%">
						<h3 class="mt-2">{{info.name || info.title}} <span class="text-dark">({{info.release_date || info.first_air_date || last_air_date}})</span></h3>
						<div class="progress">
							<div class="progress-bar bg-success" role="progressbar" :style="'width:'+ info.vote_average*10+'%;'" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{info.vote_average*10}}%</div>
						</div>
						<div class="d-flex mt-1">
							<a href="#" class="nav-link text-info">Beğen</a>
							<a href="#" class="nav-link text-info">Kaydet</a>
							<a href="#" class="nav-link text-info">Listeye Ekle</a>
						</div>
					</div>
				</div>
				<div class="col-9 mx-auto">
					<p>
						{{info.overview}}
					</p>
					<DataListComp />
				</div>		
			</div>
		</div>
	</main>
</template>

<script>
	
	import DataListComp from '../components/dataListComp.vue'

	export default{
		name:'Detail',
		components:{
			DataListComp
		},
		created(){
			this.$store.dispatch('getInfo',{type:this.$route.params.type,id:this.$route.params.id})
		},
		computed:{
			info(){
				return this.$store.getters.returnInfo
			}
		}
	}

</script>

<style scoped>
	.col-9 p{
		margin: 1rem 0
	}
</style>