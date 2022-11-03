import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    counter: 0,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    country: 'United Kingdom',
    age: 25,
    gender: 'male',
    picture: 'https://randomuser.me/api/portraits/men/11.jpg',
  },

  getters: {
  },

  mutations: {
    decreaseCounter(state) {
      state.counter--
    },
    increaseCounter(state) {
      state.counter++
    },
    decreaseCounterBy5(state) {
      state.counter -=5
    },
    increaseCounterBy5(state) {
      state.counter +=5
    },
    decreaseRandomNumber(state, randomNumber) {
      state.counter -= randomNumber
    },
    increaseRandomNumber(state, randomNumber) {
      state.counter += randomNumber
    },
    resetCounter(state) {
      state.counter = 0
    },
    getUser(state, newuser) {
      state.firstName = newuser.results[0].name.first
      state.lastName = newuser.results[0].name.last
      state.email = newuser.results[0].email
      state.country = newuser.results[0].location.country
      state.age = newuser.results[0].dob.age
      state.gender = newuser.results[0].gender
      state.picture = newuser.results[0].picture.large
      // console.log(newuser)
    },



  },

  actions: {
    decreaseRandomNumber({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('decreaseRandomNumber', response.data)
      })
    },
    increaseRandomNumber({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('increaseRandomNumber', response.data)
      })
    },
    getUser({ commit }) {
      axios('https://randomuser.me/api').then(response => {
        commit('getUser', response.data)
      })

    },
  },
  modules: {
  }
})
