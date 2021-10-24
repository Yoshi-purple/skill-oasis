import Vue from 'vue';
import Vuex from 'vuex';

Vue.use (Vuex);

export default new Vuex.Store ({
  data () {
    return {
      userName: '',
      email: '',
      password: '',
      user: undefined,
      unsubscribeAuth: undefined,
    };
  },
  beforeDestroy () {
    this.unsubscribeAuth ();
  },
  state: {
    authState: false,
    users: [],
    loginUser: {},
  },
  getters: {
    authState (state) {
      return state.authState;
    },
    loginUser (state) {
      return state.loginUser;
    },
  },
  mutations: {
    addUser (state, user) {
      state.users.push ({
        userName: user.userName,
        email: user.email,
        password: user.password,
        uid: state.users.length,
      });
      state.loginUser = user;
    },
    setLoginUser (state, user) {
      state.loginUser = user;
      state.authState = true;
    },
    setAuthState (state) {
      if (state.authState) {
        state.authState = false;
      } else {
        state.authState = true;
      }
    },
  },
  actions: {},
  modules: {},
});
