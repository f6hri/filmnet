<template>
	<section id="slider">
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
		  <ol class="carousel-indicators">
		    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
		    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
		    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
		  </ol>
		  <div class="carousel-inner">
		    <div class="carousel-item active">
		      <img src="https://picsum.photos/id/237/1280/600" class="d-block w-100" alt="img_1">
		    </div>
		    <div class="carousel-item">
		      <img src="https://picsum.photos/id/238/1280/600" class="d-block w-100" alt="img_2">
		    </div>
		    <div class="carousel-item">
		      <img src="https://picsum.photos/id/239/1280/600" class="d-block w-100" alt="img_3">
		    </div>
		  </div>
		  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
		    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
		    <span class="sr-only">Previous</span>
		  </a>
		  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
		    <span class="carousel-control-next-icon" aria-hidden="true"></span>
		    <span class="sr-only">Next</span>
		  </a>
		</div>
	</section>
</template>

<script>
	
	export default{
		name:'SliderComp'
	}

</script>

<style scoped>

</style>