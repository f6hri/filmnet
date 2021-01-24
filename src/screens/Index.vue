<template>
	<div>
		<HeaderComp />
		<router-view></router-view>
	</div>
</template>

<script>

	import HeaderComp from '../components/headerComp.vue'
	
	export default{
		name: 'Index',
		components:{
			HeaderComp
		}
	}

</script>

<style>
	a{
		color:black;
	}
	a:hover{
		text-decoration: none;
		color:black;
	}
</style>