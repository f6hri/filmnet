<template>
	<section id="profile-info" class="d-flex flex-wrap justify-content-center">
		<InfoCardComp />
		<InfoCardComp />
		<InfoCardComp />
	</section>
</template>

<script>
	
	import InfoCardComp from '../components/infoCardComp.vue'

	export default{
		name:'ProfileInfoView',
		components:{
			InfoCardComp
		}
	}

</script>

<style scoped>
	
</style>