import Vue from 'vue';
import Vuex from 'vuex';

Vue.use (Vuex);

export default new Vuex.Store ({
  data () {
    return {
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
    userProfile: {},
  },
  getters: {
    authState (state) {
      return state.authState;
    },
    loginUser (state) {
      return state.loginUser;
    },
    userProfile (state) {
      return state.userProfile;
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
    setUserProfile (state, user) {
      state.userProfile = {
        profileName: user.profileName,
        goal: user.goal,
        introduction: user.introduction,
      };
    },
  },
  actions: {},
  modules: {},
});
