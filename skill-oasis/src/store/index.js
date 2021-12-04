import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
// import {password} from '../../server/config/db.config';

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
  mounted: {},
  state: {
    authState: false,
    users: [],
    loginUser: {},
    userProfile: {},
    newUser: {},
    lessons: [],
    recruitCards: [],
    messages: [],
    rooms: [],
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
    lessons (state) {
      return state.lessons;
    },
    recruitCards (state) {
      return state.recruitCards;
    },
    users (state) {
      return state.users;
    },
    messages (state) {
      return state.messages;
    },
    rooms (state) {
      return state.rooms;
    },
  },
  mutations: {
    addNewUser (state, user) {
      state.newUser = {
        userName: user.userName,
        email: user.email,
        password: user.password,
      };
    },
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
      state.userProfile = user;
    },
    setLessons (state, lesson) {
      state.lessons = lesson;
    },
    setRecruit (state, recruitCard) {
      state.recruitCards = recruitCard;
    },
    setAllUsers (state, users) {
      state.users = users;
    },
    setMessages (state, data) {
      state.messages = data;
    },
    setRooms (state, data) {
      state.rooms = data;
      console.log (data);
    },
  },
  actions: {
    getUsers({commit}) {
      axios
        .get ('http://localhost:3000/api/users')
        .then (response => {
          commit ('setAllUsers', response.data);
        })
        .catch (error => console.log (error));
    },
    async addNewUser ({commit}, {userName, email, password}) {
      const param = {
        userName: userName,
        email: email,
        password: password,
      };
      try {
        const newUserResult = await axios
          .post ('http://localhost:3000/api/users', param)
          .then (response => console.log (response.data))
          .catch (error => console.log (error));
        commit ('addNewUser', param);
        commit ('setLoginUser', param);
        console.log (newUserResult);
      } catch (error) {
        alert ('処理に失敗しました。');
      }
    },

    async makeProfile ({getters}, {profileName, goal, comment, image}) {
      const id = getters.userProfile.id;
      try {
        const param = {
          profileName: profileName,
          goal: goal,
          comment: comment,
          image: image,
        };
        axios
          .post (`http://localhost:3000/api/users/${id}`, param)
          .then (response => console.log (response.data))
          .catch (error => console.log (error));
      } catch (error) {
        console.log (error);
      }
    },

    async makeLesson ({getters}, {lessonTitle, image, introduce}) {
      const id = getters.userProfile.id;
      try {
        const param = {
          lessonTitle: lessonTitle,
          introduce: introduce,
          image: image,
        };
        axios
          .post (`http://localhost:3000/api/lessons/${id}`, param)
          .then (res => console.log (res.data))
          .catch (err => console.log (err));
      } catch (error) {
        console.log (error);
      }
    },

    getLessons({commit}) {
      axios
        .get ('http://localhost:3000/api/lessons')
        .then (response => {
          commit ('setLessons', response.data);
        })
        .catch (error => console.log (error));
    },

    getRecruitCards({commit}) {
      axios
        .get ('http://localhost:3000/api/recruits')
        .then (response => {
          commit ('setRecruit', response.data);
        })
        .catch (error => console.log (error));
    },

    async makeRecruitment ({getters}, {comment, title}) {
      const id = getters.userProfile.id;
      try {
        const param = {
          comment: comment,
          title: title,
        };
        axios
          .post (`http://localhost:3000/api/recruits/${id}`, param)
          .then (res => console.log (res.data))
          .catch (err => console.log (err));
      } catch (error) {
        console.log (error);
      }
    },
    async sendMessage (
      {getters},
      {receiveUserId, comment, image01, image02, image03}
    ) {
      const id = getters.userProfile.id;
      // const receiveId = receiveUserId;

      try {
        const param = {
          receiveUserId: receiveUserId,
          comment: comment,
          image1: image01,
          image2: image02,
          image3: image03,
        };
        axios
          .post (`http://localhost:3000/api/messages/${id}`, param)
          .then (res => console.log (res.data))
          .catch (err => console.log (err));
        // axios
        //   .post (`http://localhost:3000/api/rooms/${id}`, param)
        //   .then (res => console.log (res.data))
        //   .catch (err => console.log (err));
      } catch (error) {
        console.log (error);
      }
    },

    async getMessages ({getters, commit}, partnerId) {
      const myId = getters.userProfile.id;
      const msgPartnerId = partnerId;
      try {
        // const param = {
        //   partnerId: partnerId,
        // };
        axios
          .get (`http://localhost:3000/api/messages/${myId}/${msgPartnerId}`)
          .then (res => {
            commit ('setMessages', res.data);
            console.log (res.data);
            console.log (msgPartnerId);
          })
          .catch (err => console.log (err));
      } catch (error) {
        console.log (error);
      }
    },

    async getRooms ({commit}, id) {
      try {
        console.log (id);
        axios
          .get (`http://localhost:3000/api/rooms/${id}`)
          .then (res => {
            const array = res.data;
            console.log (array);
            const users = array.filter (user => {
              return user.id !== id;
            });
            const result = users.filter ((element, index, self) => {
              return self.findIndex (e => e.id === element.id) === index;
            });
            console.log (result);
            commit ('setRooms', result);
          })
          .catch (err => console.log (err));
      } catch (error) {
        console.log (error);
      }
    },
  },
  modules: {},
});
