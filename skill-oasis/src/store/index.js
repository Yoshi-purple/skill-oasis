import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {setDoc, doc, getFirestore, getDoc} from 'firebase/firestore';
import router from '../router';

// import 'firebase/compat/firestore';

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
    uid: '',
  },
  getters: {
    authState (state) {
      return state.authState;
    },
    uid (state) {
      return state.uid;
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
    addUser (state, user) {
      state.users.push ({
        userName: user.userName,
        email: user.email,
        password: user.password,
      });
      state.loginUser = user;
    },
    setUid (state, uid) {
      state.uid = uid;
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
    },
  },
  actions: {
    addNewUser ({commit}, {name, email, password}) {
      const auth = getAuth ();
      const db = getFirestore ();
      createUserWithEmailAndPassword (auth, email, password)
        .then (userCredential => {
          // Signed in
          const user = userCredential.user;
          console.log (user);
          commit ('setUid', user.uid);
          setDoc (doc (db, 'users', user.uid), {
            username: name,
            profile_name: name,
            email: email,
            password: password,
          }).then (() => {
            getDoc (doc (db, 'users', user.uid)).then (docRef => {
              if (docRef.exists) {
                console.log (docRef.data ());
                commit ('setLoginUser', docRef.data ());
              }
            });
          });
        })
        .catch (error => {
          console.log (error);
          // ..
        });
    },

    async logIn ({commit}, {email, password}) {
      try {
        const auth = getAuth ();
        const db = getFirestore ();
        signInWithEmailAndPassword (auth, email, password)
          .then (signedInUser => {
            const user = signedInUser.user;
            console.log (user);
            commit ('setUid', user.uid);
            getDoc (doc (db, 'users', user.uid)).then (docRef => {
              if (docRef.exists) {
                console.log (docRef.data ());
                commit ('setLoginUser', docRef.data ());
              } else {
                console.log ('No Such a Document');
              }
            });
          })
          .then (() => {
            router.push ('/Mypage');
          });
      } catch (error) {
        console.log (error);
      }
    },
    signOut () {
      const auth = getAuth ();
      signOut (auth)
        .then (() => {
          console.log ('success');
          router.push ('/');
        })
        .catch (err => {
          console.log (err);
        });
    },
  },
  modules: {},
});
