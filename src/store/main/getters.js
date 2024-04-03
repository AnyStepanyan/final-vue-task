// src/store/main/getters.js

// Will contain getters to obtain the current values from the state variables in this module

let getters = {
  
    posts: (state) => {
        return state.posts;
    },
    currentPostComments:(state) => {
        return state.currentPostComments;
    },
    currentPostFromServer:(state) => {
        return state.currentPostFromServer;
    }
};

export default getters;