<template>
	<main id="profile">
		<div class="container">
			<div class="row">
				<div class="col text-center">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/NYCS-bull-trans-F.svg/1024px-NYCS-bull-trans-F.svg.png" width="90%">
					<h3>fahrimdemir</h3>
					<ul class="nav flex-column">
					  <li class="nav-item">
					    <router-link class="nav-link text-info" to="/fahrimdemir">Genel</router-link>
					  </li>
					  <li class="nav-item">
					    <router-link class="nav-link text-info" to="/fahrimdemir/likes">Beğenilenler</router-link>
					  </li>
					  <li class="nav-item">
					    <router-link class="nav-link text-info" to="/fahrimdemir/saves">Kaydedilenler</router-link>
					  </li>
					  <li class="nav-item">
					    <router-link class="nav-link text-info" to="/fahrimdemir/watchList">İzlenecekler Listesi</router-link>
					  </li>
					  <li class="nav-item">
					    <router-link class="nav-link text-info" to="/fahrimdemir/settings">Ayarlar</router-link>
					  </li>
					</ul>
				</div>
				<div class="col-9 align-self-center mx-auto">
					<router-view></router-view>
				</div>
			</div>
		</div>
	</main>
</template>

<script>

	
	export default{
		name:'Profile'
	}

</script>

<style>
	@media (max-width: 720px) {
	    #card{
			width: 100%
		}
	}
</style>