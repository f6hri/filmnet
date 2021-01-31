<template>
	<main id="detail">
		<div class="container">
			<div class="row mt-4" v-if="info">
				<div class="col">
					<img :src="info.poster?'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+info.poster:not_image" width="100%">
					<h3 class="mt-2">{{info.name}} <span class="text-dark">({{info.date}})</span></h3>
					<div class="progress" v-if="rate">
						<div class="progress-bar bg-success" role="progressbar" :style="'width:'+ info.rate*10+'%;'" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{info.rate*10}}%</div>
					</div>
					<span v-else class="badge badge-info m-1">{{info.job}}</span>
				</div>
				<div class="col-9 mx-auto">
					<div id="overview" class="mt-3">
						<h3>Overview</h3>
						<p>
							{{info.overview}}
						</p>
						<hr>
					</div>
					<DataListComp v-if="credits" title="Credits" :type="'person'" :data="credits" />
					<DataListComp v-if="jobs" title="Jobs" :type="'watch'" :data="jobs" />
				</div>		
			</div>
			<div class="row mt-5">
				<div class="container">
					<div id="info" class="mt-1">
						<h3>Detail</h3>
						<div class="d-flex flex-row flex-wrap">
							<div class="card border-0">
								<div class="card-body text-center" v-if="genre">
									<h4>Genres</h4>
									<div class="container">
										<span class="badge badge-info m-1" v-for="genre in info.genres" :key="genre.id">{{genre.name}}</span>
									</div>
								</div>
							</div>
							<div class="card border-0" v-if="info.creator">
								<div class="card-body text-center">
									<h4>Created By</h4>
									<div class="container">
										<a href="#" class="text-info" v-for="creator in info.created_by" :key="creator.id">
											{{creator.name}}
										</a>
									</div>
								</div>
							</div>
							<div class="card border-0" v-if="info.networks">
								<div class="card-body text-center">
									<h4>Network</h4>
									<div class="container">
										<span class="badge badge-info m-1" v-for="network in info.networks" :key="network.id">
											{{network.name}}
										</span>
									</div>
								</div>
							</div>
							<div class="card border-0" v-if="info.status">
								<div class="card-body text-center">
									<h4>Status</h4>
									<div class="container">
										<span class="badge badge-info m-1">
											{{info.status}}
										</span>
									</div>
								</div>
							</div>
							<div class="card border-0" v-if="info.prod_comp">
								<div class="card-body text-center">
									<h4>Production Companies</h4>
									<div class="container">
										<span class="badge badge-info m-1" v-for="companies in info.prod_comp" :key="companies.id">
											{{companies.name}}
										</span>
									</div>
								</div>
							</div>
							<div class="card border-0" v-if="info.also_known_as">
								<div class="card-body text-center">
									<h4>Also Know As</h4>
									<div class="container">
										<span class="badge badge-info m-1" v-for="know in info.also_known_as" :key="know.id">
											{{know}}
										</span>
									</div>
								</div>
							</div>
							<div class="card border-0" v-if="info.place_of_birth">
								<div class="card-body text-center">
									<h4>Place Of Birth</h4>
									<div class="container">
										<span class="badge badge-info m-1">
											{{info.place_of_birth}}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
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
		data(){
			return{
				not_image:'https://redi.eu/wp-content/uploads/2015/08/not-available.png'
			}
		},
		created(){
			this.$store.dispatch('getInfo',{type:this.$route.params.type,id:this.$route.params.id})
		},
		computed:{
			info(){
				return this.$store.getters.returnInfo.detail
			},
			credits(){
				return this.$store.getters.returnInfo.credits
			},
			jobs(){
				return this.$store.getters.returnInfo.jobs
			}
		}
	}

</script>

<style scoped>
	.col-9 p{
		margin: 1rem 0
	}
</style>