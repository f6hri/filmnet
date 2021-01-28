import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

const state = {
	trend:[],
	films:[],
	TV:[],
	people:[],
	info:undefined
}

const mutations = {
	setTrend(state){
		axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=29e7b4439494d1800a2ec9e690022f63')
		.then((res)=>{
			state.trend.push(res.data.results)
		})
	},
	setFilms(state){
		axios.get('https://api.themoviedb.org/3/discover/movie?api_key=29e7b4439494d1800a2ec9e690022f63&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
		.then((res)=>{
			state.films.push(res.data.results)
		})
	},
	setTVs(state){
		axios.get('https://api.themoviedb.org/3/discover/tv?api_key=29e7b4439494d1800a2ec9e690022f63&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false')
		.then((res)=>{
			state.TV.push(res.data.results)
		})
	},
	setPeople(state){
		axios.get('https://api.themoviedb.org/3/person/popular?api_key=29e7b4439494d1800a2ec9e690022f63&language=en-US&page=1')
		.then((res)=>{
			state.people.push(res.data.results)
		})
	},
	setInfo(state,info){
		axios.get(`https://api.themoviedb.org/3/${info.type}/${info.id}?api_key=29e7b4439494d1800a2ec9e690022f63&language=en-US`)
		.then((res)=>{
			state.info = res.data
		})
	},
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
}

const app = {
	state,
	getters,
	mutations,
	actions
}

export default app

