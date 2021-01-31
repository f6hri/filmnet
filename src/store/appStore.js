import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

const state = {
	trend:undefined,
	films:undefined,
	TV:undefined,
	people:undefined,
	info:{
		detail:undefined,
		credits:undefined,
		jobs:undefined
	},
	results:undefined,
	loading:false
}

const mutations = {
	setTrend(state){
		axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=29e7b4439494d1800a2ec9e690022f63')
		.then((res)=>{
			let data = res.data.results
			let output = []
			data.forEach(snap=>{
				output.push({
					name:snap.name||snap.title,
					id:snap.id,
					poster:snap.poster_path,
					date:snap.first_air_date||snap.release_date,
					rate:snap.vote_average,
					type:snap.media_type,
					path:snap.backdrop_path
				})
			})
			state.trend = output
		})
	},
	setFilms(state){
		axios.get('https://api.themoviedb.org/3/discover/movie?api_key=29e7b4439494d1800a2ec9e690022f63&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
		.then((res)=>{
			let data = res.data.results
			let output = []
			data.forEach(snap=>{
				output.push({
					name:snap.title,
					id:snap.id,
					poster:snap.poster_path,
					date:snap.release_date,
					rate:snap.vote_average,
					type:'movie'
				})
			})
			state.films = output
		})
	},
	setTVs(state){
		axios.get('https://api.themoviedb.org/3/discover/tv?api_key=29e7b4439494d1800a2ec9e690022f63&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false')
		.then((res)=>{
			let data = res.data.results
			let output = []
			data.forEach(snap=>{
				output.push({
					name:snap.name,
					id:snap.id,
					poster:snap.poster_path,
					date:snap.first_air_date,
					rate:snap.vote_average,
					type:'tv'
				})
			})
			state.TV = output
		})
	},
	setPeople(state){
		axios.get('https://api.themoviedb.org/3/person/popular?api_key=29e7b4439494d1800a2ec9e690022f63&language=en-US&page=1')
		.then((res)=>{
			let data = res.data.results
			let output = []
			data.forEach(snap=>{
				output.push({
					name:snap.name,
					id:snap.id,	
					image:snap.profile_path,
					job:snap.known_for_department,
					type:'people'
				})
			})
			state.people = output
		})
	},
	setInfo(state,info){
		axios.get(`https://api.themoviedb.org/3/${info.type}/${info.id}?api_key=29e7b4439494d1800a2ec9e690022f63&language=en-US`)
		.then((res)=>{
			let data = res.data
			state.info.detail = {
				id:data.id,
				name:data.title||data.name,
				date:data.first_air_date||data.release_date||`${data.birthday||'?'} // ${data.deathday||'?'}`,
				rate:data.vote_average,
				poster:data.poster_path||data.profile_path,
				overview:data.overview||data.biography,
				genres:data.genres,
				creators:data.created_by,
				networks:data.network,
				status:data.status,
				prod_comp:data.production_companies,
				job:data.known_for_department,
				also_known_as:data.also_known_as,
				place_of_birth:data.place_of_birth,
			}
		})
		if(info.type == 'movie'){
			axios.get(`https://api.themoviedb.org/3/movie/${info.id}/credits?api_key=29e7b4439494d1800a2ec9e690022f63&language=en-US`)
			.then((res)=>{
				let data = res.data.cast
				let output = []
				data.forEach(snap=>{
					output.push({
						id:snap.id,
						name:snap.name,
						image:snap.profile_path,
						character:snap.character
					})
				})
				state.info.credits = output
			})
		}else if(info.type == 'tv'){
			axios.get(`https://api.themoviedb.org/3/tv/${info.id}/aggregate_credits?api_key=29e7b4439494d1800a2ec9e690022f63&language=en-US`)
			.then((res)=>{
				let data = res.data.cast
				let output = []
				data.forEach(snap=>{
					output.push({
						id:snap.id,
						type:snap.media_type,
						name:snap.name,
						image:snap.profile_path,
						roles:snap.roles
					})
				})
				state.info.credits = output
			})
		}else if(info.type == 'person'){
			state.info.credits = undefined
			axios.get(`https://api.themoviedb.org/3/person/${info.id}/combined_credits?api_key=29e7b4439494d1800a2ec9e690022f63&language=en-US`)
			.then((res)=>{
				let data = res.data.cast
				let output = []
				data.forEach(snap=>{
					output.push({
						id:snap.id,
						type:snap.media_type,
						name:snap.name||snap.title,
						poster:snap.poster_path,
						rate:snap.vote_average,
						date:snap.release_date||snap.first_air_date
					})
				})
				state.info.jobs = output
			})
		}
	},
	setResults(state,query){
		state.results = undefined
		state.loading = true
		axios.get(`https://api.themoviedb.org/3/search/multi?api_key=29e7b4439494d1800a2ec9e690022f63&language=en-US&query=${query.query}&page=1&include_adult=false`)
		.then((res)=>{
			let data = res.data.results
			let output = []
			if(!data[0]){
				output = undefined
			}else{
				data.forEach(snap=>{
					output.push({
						id:snap.id,
						name:snap.name||snap.title,
						image:snap.poster_path||snap.profile_path,
						rate:snap.vote_average,
						type:snap.media_type,
						date:snap.release_date||snap.first_air_date,
						job:snap.known_for_department,
					})
				})
			}
			state.results = output
			state.loading = false
		})
		.catch((err)=>{
			console.log(err)
		})
	}
}

const actions = {
	getTrend({ commit }){
		commit('setTrend')
	},
	getFilms({ commit }){
		commit('setFilms')
	},
	getTVs({ commit }){
		commit('setTVs')
	},
	getPeople({ commit }){
		commit('setPeople')
	},
	getInfo({ commit },info){
		commit('setInfo',info)
	},
	getResults({ commit },query){
		commit('setResults',query)
	},
}

const getters = {
	returnTrend(state){
		return state.trend
	},
	returnFilms(state){
		return state.films
	},
	returnTVs(state){
		return state.TV
	},
	returnPeople(state){
		return state.people
	},
	returnInfo:(state)=>{
		return state.info
	},
	returnResults:(state)=>{
		return state.results
	},
	isLoading:(state)=>{
		return state.loading
	},
}

const app = {
	state,
	getters,
	mutations,
	actions
}

export default app

