// src/store/main/actions.js

// Will contain  all actions of this module
import axios from "axios";

let actions = {
  
getPosts: (state) => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
  state.commit('setPostData', res.data)
  })
},
getComments: (state) => {
  axios.get('https://jsonplaceholder.typicode.com/comments')
  .then(res => {
  state.commit('setCurrentPostComments', res.data)
  })
},
getCurrentPostFromServer: (state, payload) => {
  axios.get(`https://jsonplaceholder.typicode.com/posts/${payload}`)
  .then(res => {
  state.commit('setCurrentPostFromServer', res.data)
  })
}
}
export default actions;