<template>
	<main id="login">
		<div class="container">
			<div class="card mx-auto mt-5" id="card">
				<div class="card-head">
					<h2 class="text-center">Film.Net'e Katıl</h2>
				</div>
				<div class="card-body">
					<div class="input-group mb-3">
					  <div class="input-group-prepend">
					    <span class="input-group-text" id="inputGroup-sizing-default">Kullanıcı Adı</span>
					  </div>
					  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
					</div>
					<div class="input-group mb-3">
					  <div class="input-group-prepend">
					    <span class="input-group-text" id="inputGroup-sizing-default">E-Posta</span>
					  </div>
					  <input type="mail" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
					</div>
					<div class="input-group mb-3">
					  <div class="input-group-prepend">
					    <span class="input-group-text" id="inputGroup-sizing-default">Şifre</span>
					  </div>
					  <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
					</div>
					<div class="input-group mb-3">
					  <div class="input-group-prepend">
					    <span class="input-group-text" id="inputGroup-sizing-default">Şifre Tekrar</span>
					  </div>
					  <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
					</div>
					<button class="btn btn-info btn-block">Hesap Oluştur</button>
				</div>
				<div class="card-footer text-center border-0 bg-transparent">
					<p class="m-0">Zaten aramızda mısın?</p>
					<router-link to="/account/login" class="btn btn-link text-info">Giriş Yap</router-link>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	
	export default{
		name:'Register'
	}

</script>

<style scoped></style>