// src/store/main/index.js

// Will export our module with all the actions, getters, mutations and the state

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";

let main = {
    state,
    actions,
    mutations,
    getters,
};

export default main;