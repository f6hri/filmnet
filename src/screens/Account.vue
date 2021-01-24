<template>
	<div>
		<SimpleHeaderComp />
		<router-view></router-view>
	</div>
</template>

<script>
	
	import SimpleHeaderComp from '../components/simpleHeaderComp.vue'

	export default{
		name:'Account',
		components:{
			SimpleHeaderComp
		}
	}

</script>

<style>

	#card{
		width: 30rem;
		border: none;
	}

	@media (max-width: 720px) {
	    #card{
			width: 100%
		}
	}
	
</style>