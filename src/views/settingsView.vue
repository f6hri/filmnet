<template>
	<section id="setting">
		<div class="card mx-auto" id="card">
			<div class="card-body">
				<div class="input-group mb-3">
					<div class="input-group-prepend">
						<span class="input-group-text" id="inputGroup-sizing-default">Kullanıcı Adı</span>
					</div>
				  	<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="fahrimdemir">
				</div>
				<div class="input-group mb-3">
					<div class="input-group-prepend">
						<span class="input-group-text" id="inputGroup-sizing-default">Doğum Tarihi</span>
					</div>
				  	<input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
				</div>
				<button class="btn btn-primary btn-block" disabled>Kaydet</button>
				<button class="btn btn-warning btn-block">Bilgileri Sıfırla</button>
				<button class="btn btn-danger btn-block">Hesabı Sil</button>
				<button class="btn btn-info btn-block">Çıkış Yap</button>
			</div>
		</div>
	</section>
</template>

<script>
	
	export default{
		name:'SettingsView'
	}

</script>

<style scoped>

	.card{
		border: none;
		width: 60%;
	}
	
</style>