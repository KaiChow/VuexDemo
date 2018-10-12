import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0,
  sum: 0
};

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.  只能同步
const mutations = {
  increment(state) {
    state.count++;
   state.sum=state.count+10;
  },
  decrement(state) {
    state.count--;
    state.sum = state.count - 1;
  }
};

// actions are functions that cause side effects and can involve
// asynchronous operations.  异步同步都可以 ，只要是提交  mutation
const actions = {
  increment: ({ commit }) => commit("increment"),
  decrement: ({ commit }) => commit("decrement"),
  incrementIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit("increment");
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("increment");
        resolve();
      }, 1000);
    });
  }
};

// getters are functions  处理state的不同状态操作
const getters = {
  evenOrOdd: state => (state.count % 2 === 0 ? "even" : "odd"),
  name: state => {
    return state.count % 5 === 0 ? "tom" : "alex";
  }
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
