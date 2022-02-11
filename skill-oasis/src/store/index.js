import Vue from 'vue';
import Vuex from 'vuex';
import {getDownloadURL, getStorage, ref, uploadString} from 'firebase/storage';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from 'firebase/auth';
import {
  where,
  setDoc,
  doc,
  getFirestore,
  getDoc,
  updateDoc,
  addDoc,
  collection,
  query,
  getDocs,
  onSnapshot,
  serverTimestamp,
  orderBy,
  deleteDoc,
} from 'firebase/firestore';
import router from '../router';
import algoliasearch from 'algoliasearch';

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
    newLessons: [],
    mylessons: [],
    targetUserLessons: [],
    targetUserStatus: [],
    myFollowList: [],
    recruitCards: [],
    searchLessons: [],
    myRecruits: [],
    messages: [],
    rooms: [],
    uid: '',
    reveiw: '',
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
    newLessons (state) {
      return state.newLessons;
    },
    searchLessons (state) {
      return state.searchLessons;
    },
    mylessons (state) {
      return state.mylessons;
    },
    targetUserLessons (state) {
      return state.targetUserLessons;
    },
    recruitCards (state) {
      return state.recruitCards;
    },
    myRecruits (state) {
      return state.myRecruits;
    },
    myFollowList (state) {
      return state.myFollowList;
    },
    targetUserStatus (state) {
      return state.targetUserStatus;
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
    review (state) {
      return state.reveiw;
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
    loggedIn (state) {
      state.authState = true;
    },
    signedOut (state) {
      state.authState = false;
    },
    setUserProfile (state, {uid, user, rate, followies, followers}) {
      state.userProfile = {
        uid: uid,
        user: user,
        rate: rate,
        followies: followies,
        followers: followers,
      };
    },
    setLessons (
      state,
      {
        lessonData,
        lessonId,
        coachProfile,
        rate,
        review,
        followies,
        followers,
        joinedRoom,
        followState,
      }
    ) {
      if (isNaN (rate)) {
        rate = 0;
      }
      state.lessons.push ({
        lessonData: lessonData,
        lessonId: lessonId,
        profile: coachProfile,
        rate: rate,
        review: review,
        followies: followies,
        followers: followers,
        joinedRoom: joinedRoom,
        followState: followState,
      });
      state.lessons.sort ((a, b) => {
        return b.rate - a.rate;
      });
    },
    setNewLessons (
      state,
      {
        lessonData,
        coachProfile,
        rate,
        review,
        followies,
        followers,
        joinedRoom,
        followState,
      }
    ) {
      state.newLessons.push ({
        lessonData: lessonData,
        profile: coachProfile,
        rate: rate,
        review: review,
        followies: followies,
        followers: followers,
        joinedRoom: joinedRoom,
        followState: followState,
      });
    },
    setSearchLessons (
      state,
      {
        lessonData,
        coachProfile,
        rate,
        followies,
        followers,
        joinedRoom,
        followState,
      }
    ) {
      state.searchLessons.push ({
        lessonData: lessonData,
        profile: coachProfile,
        rate: rate,
        followies: followies,
        followers: followers,
        joinedRoom: joinedRoom,
        followState: followState,
      });
    },
    setTargetUserLessons (state, {lessonData, lessonId}) {
      state.targetUserLessons.push ({
        lessonData: lessonData,
        lessonId: lessonId,
      });
    },
    setTargetUserStatus (
      state,
      {followers, followings, rate, joinedRoom, followState}
    ) {
      state.targetUserStatus.push ({
        followers: followers,
        followings: followings,
        rate: rate,
        joinedRoom: joinedRoom,
        followState: followState,
      });
    },
    cleanTargetUserStatus (state) {
      state.targetUserStatus.splice (0);
    },
    cleanLessons (state) {
      state.lessons.splice (0);
    },
    cleanNewLessons (state) {
      state.newLessons.splice (0);
    },
    cleanTargetLessons (state) {
      state.targetUserLessons.splice (0);
    },
    setMyLessons (state, {lessonData, lessonId}) {
      state.mylessons.push ({
        lessonData: lessonData,
        lessonId: lessonId,
      });
    },
    setMyRecruits (state, {recruitData, recruitId}) {
      state.myRecruits.push ({
        recruitData: recruitData,
        recruitId: recruitId,
      });
    },
    setMyFollowList (
      state,
      {userData, userId, rate, followies, followers, joinedRoom, followState}
    ) {
      state.myFollowList.push ({
        userData: userData,
        userId: userId,
        rate: rate,
        followies: followies,
        followers: followers,
        joinedRoom: joinedRoom,
        followState: followState,
      });
    },
    cleanMyFollowList (state) {
      state.myFollowList.splice (0);
    },
    cleanMyRecruits (state) {
      state.myRecruits.splice (0);
    },
    cleanMyLessons (state) {
      state.mylessons.splice (0);
    },
    setUsers (state, user) {
      state.users.push (user);
    },
    setRecruit (
      state,
      {
        recruitsData,
        recruitProfile,
        rate,
        followies,
        followers,
        joinedRoom,
        followState,
      }
    ) {
      state.recruitCards.push ({
        recruitsData: recruitsData,
        profile: recruitProfile,
        rate: rate,
        followies: followies,
        followers: followers,
        joinedRoom: joinedRoom,
        followState: followState,
      });
    },
    cleanRecruits (state) {
      state.recruitCards.splice (0);
    },
    setAllUsers (state, users) {
      state.users = users;
    },
    setMessages (state, data) {
      state.messages.push (data);
      state.messages.sort ((a, b) => {
        return b.data.createdAt - a.data.createdAt;
      });
    },
    cleanMessages (state) {
      state.messages.length = 0;
    },
    setRooms (state, data) {
      state.rooms.push (data);
    },
    setReveiw (state, data) {
      state.reveiw = data;
    },
  },
  actions: {
    //メールアドレス、パスワードで新規登録
    addNewUser ({commit, dispatch}, {name, email, password}) {
      const auth = getAuth ();
      const db = getFirestore ();
      createUserWithEmailAndPassword (auth, email, password)
        .then (userCredential => {
          // Signed in
          const user = userCredential.user;
          commit ('setUid', user.uid);
          setDoc (doc (db, 'users', user.uid), {
            username: name,
            profile_name: name,
            email: email,
            password: password,
          })
            .then (() => {
              getDoc (doc (db, 'users', user.uid)).then (docRef => {
                if (docRef.exists) {
                  commit ('setUserProfile', docRef.data ());
                  commit ('setLoginUser', {data: docRef.data (), id: doc.id});
                } else {
                  console.log ('No such document');
                }
              });
            })
            .then (() => {
              dispatch ('logIn', {
                email,
                password,
              });
            });
        })
        .catch (error => {
          console.log (error);
          // ..
        });
    },
    //Googleで新規登録
    async signUpWithGoogle({commit}) {
      const auth = getAuth ();
      const db = getFirestore ();
      const provider = new GoogleAuthProvider ();
      await signInWithPopup (auth, provider)
        .then (result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult (result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
          console.log (user, token);
          commit ('setUid', user.uid);
          setDoc (doc (db, 'users', user.uid), {
            username: user.displayName,
            profile_name: user.displayName,
            email: user.email,
            password: user.accessToken,
          }).then (() => {
            getDoc (doc (db, 'users', user.uid)).then (docRef => {
              if (docRef.exists) {
                commit ('setUserProfile', docRef.data ());
                commit ('setLoginUser', {data: docRef.data (), id: doc.id});
              } else {
                console.log ('No such document');
              }
            });
          });

          commit ('signInWithGoogle');
        })
        .catch (error => {
          console.log (error);
        });
    },
    //Goggleでログイン
    signInWithGoogle (commit) {
      const auth = getAuth ();
      const provider = new GoogleAuthProvider ();
      signInWithPopup (auth, provider).then (result => {
        const credential = GoogleAuthProvider.credentialFromResult (result);
        const token = credential.accessToken;
        const user = result.user;
        console.log (user, token);
        router.push ('Mypage');
        commit ('setUid', user.uid);
      });
    },

    //メールアドレス認証ログイン
    async logIn ({commit}, {email}) {
      const actionCodeSettings = {
        url: 'https://skill-oasis.web.app/Mypage',
        handleCodeInApp: true,
      };
      const auth = getAuth ();
      sendSignInLinkToEmail (auth, email, actionCodeSettings)
        .then (() => {
          window.localStorage.setItem ('emailForSignIn', email);
          commit ('sentMessage');
          router.push ('Sentmessage');
        })
        .catch (error => {
          console.log (error);
        });
    },

    //ログアウト
    signOut({commit}) {
      const auth = getAuth ();
      signOut (auth)
        .then (() => {
          commit ('signedOut');
          commit ('setAuthState');
        })
        .catch (err => {
          console.log (err);
        });
    },

    //ログインユーザーの情報取得
    onAuth({commit}) {
      const auth = getAuth ();
      const db = getFirestore ();
      const rateArr = [];
      const followingArr = [];
      const followerArr = [];

      //メール認証のログイン完了処理
      if (isSignInWithEmailLink (auth, window.location.href)) {
        let email = window.localStorage.getItem ('emailForSignIn');
        signInWithEmailLink (auth, email, window.location.href)
          .then (() => {
            window.localStorage.removeItem ('emailForSignIn');
            commit ('loggedIn');
          })
          .catch (error => {
            console.log (error);
          });
      }
      //ログイン後の情報取得
      onAuthStateChanged (auth, async user => {
        const loginUserRef = doc (db, 'users', user.uid);
        //評価の取得
        const reviewsRef = query (collection (loginUserRef, 'reviews'));
        const reviewsSnap = await getDocs (reviewsRef);
        reviewsSnap.forEach (doc => {
          rateArr.push (doc.data ().rate);
        });
        let sum = 0;
        rateArr.forEach (v => {
          sum += v;
        });
        const rate = sum / rateArr.length;
        //フォロイーの取得
        const followingRef = query (
          collection (db, 'follows'),
          where ('follower.id', '==', `${user.uid}`)
        );
        const followSnap = await getDocs (followingRef);
        followSnap.forEach (doc => {
          followingArr.push (doc.data ());
        });
        const followies = followingArr.length;

        //フォロワーの取得
        const followersRef = query (
          collection (db, 'follows'),
          where ('followedUser.id', '==', `${user.uid}`)
        );
        const followersSnap = await getDocs (followersRef);
        followersSnap.forEach (doc => {
          followerArr.push (doc.data ());
        });
        const followers = followerArr.length;
        //レッスンの取得

        await getDoc (loginUserRef).then (docRef => {
          if (docRef.exists ()) {
            commit ('setUserProfile', {
              uid: docRef.id,
              user: docRef.data (),
              rate: rate,
              followies: followies,
              followers: followers,
            });
            commit ('loggedIn');
          } else {
            commit ('signedOut');
            console.log ('No Such a Document');
          }
        });
      });
    },

    //プロフィール作成
    makeProfile ({commit}, {profileName, image, goal, comment}) {
      const auth = getAuth ();
      const db = getFirestore ();
      const storage = getStorage ();
      onAuthStateChanged (auth, user => {
        const userRef = ref (storage, `users/${user.uid}/profileImage`);
        uploadString (userRef, image, 'data_url').then (() => {
          console.log ('uploaded.');
        });
        getDownloadURL (ref (storage, `users/${user.uid}/profileImage`))
          .then (url => {
            updateDoc (doc (db, 'users', user.uid), {
              profile_name: profileName,
              image: url,
              goal: goal,
              introduce: comment,
            });
          })
          .then (docRef => {
            if (docRef.exists ()) {
              commit ('setUserProfile', docRef.data ());
              router.push ('/Myprofile');
            } else {
              return;
            }
          })
          .catch (err => {
            console.log (err);
          });
      });
    },
    //レッスン作成
    async makeLesson ({commit}, {lessonTitle, introduce, image}) {
      commit ('cleanMyLessons');
      const auth = getAuth ();
      const db = getFirestore ();
      const storage = getStorage ();
      const client = algoliasearch (
        process.env.VUE_APP_ALGOLIAID,
        process.env.VUE_APP_ALGOLIAAPIKEY
      );
      const index = client.initIndex ('focus');
      const user = auth.currentUser;
      const time = Date.now ();
      const lessonRef = ref (storage, `lessons/${user.uid}/${time}.jpg`);
      const coachUserRef = ref (doc (db, 'users', `${user.uid}`));
      uploadString (lessonRef, image, 'data_url').then (result => {
        getDownloadURL (
          ref (storage, `lessons/${user.uid}/${result.ref.name}`)
        ).then (async url => {
          const docRef = await addDoc (collection (db, 'lessons'), {
            coachingUser: {
              ref: coachUserRef,
              id: user.uid,
            },
            createdAt: serverTimestamp (),
            lessonTitle: lessonTitle,
            introduce: introduce,
            image: url,
          });
          getDoc (doc (db, 'lessons', docRef.id)).then (async lesson => {
            const loginUser = await getDoc (doc (db, 'users', user.uid));
            const loginUserReview = await getDocs (
              collection (db, 'users', user.uid, 'reviews')
            );
            const rateArr = [];
            loginUserReview.forEach (doc => {
              rateArr.push (doc.data ().rate);
            });
            let sum = 0;
            rateArr.forEach (v => {
              sum += v;
            });
            const rate = sum / rateArr.length;
            const rating =
              Math.floor (rate * Math.pow (10, 1)) / Math.pow (10, 1);
            const records = {
              lessonId: docRef.id,
              coachingUser: loginUser.data (),
              coachingUserId: loginUser.id,
              rate: rating,
              review: rateArr.length,
              createdAt: lesson.data ().createdAt,
              lessonTitle: lesson.data ().lessonTitle,
              introduce: lesson.data ().introduce,
              image: lesson.data ().image,
            };
            index
              .saveObject (records, {autoGenerateObjectIDIfNotExist: true})
              .then (objIds => {
                updateDoc (doc (db, 'lessons', docRef.id), {
                  objectId: objIds.objectID,
                });
              });
          });
        });

        router.push ('/Myprofile');
      });
    },
    async getLessons({commit, getters}) {
      const db = getFirestore ();
      const lessons = query (collection (db, 'lessons'));
      onSnapshot (lessons, lessonsSnap => {
        lessonsSnap.forEach (async doc => {
          const rateArr = [];
          const followingArr = [];
          const followerArr = [];
          const user = await getDoc (doc.data ().coachingUser.ref);
          //評価の取得
          const reviewsRef = query (
            collection (db, 'users', user.id, 'reviews')
          );
          const reviewsSnap = await getDocs (reviewsRef);
          reviewsSnap.forEach (doc => {
            rateArr.push (doc.data ().rate);
          });
          let sum = 0;
          rateArr.forEach (v => {
            sum += v;
          });
          const rate = sum / rateArr.length;
          const rating =
            Math.floor (rate * Math.pow (10, 1)) / Math.pow (10, 1);

          const lessonData = {
            data: doc.data (),
            userId: doc.data ().coachingUser.ref.id,
            id: doc.id,
          };
          //フォロイーの取得
          const followingRef = query (
            collection (db, 'follows'),
            where ('follower.id', '==', `${user.id}`)
          );

          const followSnap = await getDocs (followingRef);
          followSnap.forEach (doc => {
            followingArr.push (doc.data ().followedUser.id);
          });
          const followies = followingArr.length;
          //フォロワーの取得
          const followersRef = query (
            collection (db, 'follows'),
            where ('followedUser.id', '==', `${user.id}`)
          );

          const followersSnap = await getDocs (followersRef);
          followersSnap.forEach (doc => {
            followerArr.push (doc.data ().follower.id);
          });
          const followers = followerArr.length;
          const follow = followerArr.find (id => {
            return id === getters.userProfile.uid;
          });

          //メッセージルームがあれば取得
          const joinedRoom = await getters.rooms.find (room => {
            return room.roomUser.uid === user.id;
          });
          const coachProfile = user.data ();
          commit ('setLessons', {
            lessonData: lessonData.data,
            lessonId: lessonData.id,
            coachProfile: coachProfile,
            rate: rating,
            review: rateArr.length,
            followies: followies,
            followers: followers,
            joinedRoom: joinedRoom,
            followState: Boolean (follow),
          });
        });
      });
    },
    //ログインユーザーのレッスン取得
    async getMylessons({commit}) {
      const auth = getAuth ();
      const db = getFirestore ();
      onAuthStateChanged (auth, async user => {
        const myLessonsRef = query (
          collection (db, 'lessons'),
          where ('coachingUser.id', '==', `${user.uid}`)
        );
        onSnapshot (myLessonsRef, myLessonsSnap => {
          commit ('cleanMyLessons');
          myLessonsSnap.forEach (doc => {
            const mylessonData = {
              data: doc.data (),
              id: doc.id,
            };
            commit ('setMyLessons', {
              lessonData: mylessonData.data,
              lessonId: mylessonData.id,
            });
          });
        });
      });
    },
    //フォローリストを取得
    getMyFollowList({commit}) {
      commit ('cleanMyFollowList');
      const auth = getAuth ();
      const db = getFirestore ();
      onAuthStateChanged (auth, async user => {
        const followingRef = query (
          collection (db, 'follows'),
          where ('follower.id', '==', `${user.uid}`)
        );
        const followingSnap = await getDocs (followingRef);
        followingSnap.forEach (async doc => {
          const targetUser = await getDoc (doc.data ().followedUser.ref);
          commit ('setMyFollowList', {
            userData: targetUser.data (),
            userId: targetUser.id,
          });
        });
      });
    },
    //フォローリストから選択したユーザーのステータスを取得
    async getTargetUserStatus ({commit, getters}, userId) {
      commit ('cleanTargetUserStatus');
      const db = getFirestore ();
      //follower
      const followersRef = query (
        collection (db, 'follows'),
        where ('followedUser.id', '==', userId)
      );
      const followers = await getDocs (followersRef);
      const followerArr = [];
      const followingArr = [];
      const rateArr = [];
      followers.forEach (doc => {
        followerArr.push (doc.data ().follower.id);
      });
      //following
      const followingRef = query (
        collection (db, 'follows'),
        where ('follower.id', '==', userId)
      );
      const followingUsers = await getDocs (followingRef);
      followingUsers.forEach (doc => {
        followingArr.push (doc.data ());
      });
      //rate
      const rateRef = query (collection (db, 'users', userId, 'reviews'));
      const rates = await getDocs (rateRef);
      rates.forEach (doc => {
        rateArr.push (doc.data ().rate);
      });
      let sum = 0;
      rateArr.forEach (v => {
        sum += v;
      });
      const rate = sum / rateArr.length;
      const rating = Math.floor (rate * Math.pow (10, 1)) / Math.pow (10, 1);

      const follow = followerArr.find (id => {
        return id === getters.userProfile.uid;
      });

      //メッセージルームがあれば取得
      const joinedRoom = await getters.rooms.find (room => {
        return room.roomUser.uid === userId;
      });
      commit ('setTargetUserStatus', {
        followers: followerArr.length,
        followings: followingArr.length,
        rate: rating,
        joinedRoom: joinedRoom,
        followState: Boolean (follow),
      });
    },
    //レッスンを新着順に取得
    async getNewLessons({commit, getters}) {
      commit ('cleanNewLessons');
      const db = getFirestore ();
      const newLessonsRef = query (
        collection (db, 'lessons'),
        orderBy ('createdAt', 'desc')
      );
      onSnapshot (newLessonsRef, lessonsSnap => {
        lessonsSnap.forEach (async doc => {
          const rateArr = [];
          const followingArr = [];
          const followerArr = [];
          const user = await getDoc (doc.data ().coachingUser.ref);
          //評価の取得
          const reviewsRef = query (
            collection (db, 'users', user.id, 'reviews')
          );
          const reviewsSnap = await getDocs (reviewsRef);
          reviewsSnap.forEach (doc => {
            rateArr.push (doc.data ().rate);
          });
          let sum = 0;
          rateArr.forEach (v => {
            sum += v;
          });
          const rate = sum / rateArr.length;
          const rating =
            Math.floor (rate * Math.pow (10, 1)) / Math.pow (10, 1);

          const lessonData = {
            data: doc.data (),
            userId: doc.data ().coachingUser.ref.id,
            id: doc.id,
          };
          //フォロイーの取得
          const followingRef = query (
            collection (db, 'follows'),
            where ('follower.id', '==', `${user.id}`)
          );

          const followSnap = await getDocs (followingRef);
          followSnap.forEach (doc => {
            followingArr.push (doc.data ().followedUser.id);
          });
          const followies = followingArr.length;
          //フォロワーの取得
          const followersRef = query (
            collection (db, 'follows'),
            where ('followedUser.id', '==', `${user.id}`)
          );

          const followersSnap = await getDocs (followersRef);
          followersSnap.forEach (doc => {
            followerArr.push (doc.data ().follower.id);
          });
          const followers = followerArr.length;
          const follow = followerArr.find (id => {
            return id === getters.userProfile.uid;
          });

          //メッセージルームがあれば取得
          const joinedRoom = await getters.rooms.find (room => {
            return room.roomUser.uid === user.id;
          });
          const coachProfile = user.data ();
          commit ('setNewLessons', {
            lessonData: lessonData.data,
            coachProfile: coachProfile,
            rate: rating,
            review: rateArr.length,
            followies: followies,
            followers: followers,
            joinedRoom: joinedRoom,
            followState: Boolean (follow),
          });
        });
      });
    },

    //ログインユーザーのレッスン取得
    async getMyrecruits({commit}) {
      const auth = getAuth ();
      const db = getFirestore ();
      onAuthStateChanged (auth, async user => {
        const myRecruitsRef = query (
          collection (db, 'recruits'),
          where ('recruitUser.id', '==', `${user.uid}`)
        );
        // commit ('cleanMyRecruits');
        onSnapshot (myRecruitsRef, myRecruitSnapshot => {
          myRecruitSnapshot.forEach (doc => {
            commit ('setMyRecruits', {
              recruitData: doc.data (),
              recruitId: doc.id,
            });
          });
        });
      });
    },
    //ログインユーザーの選択された募集カードを削除
    async deleteRecruit ({commit}, {recruitId}) {
      commit ('cleanMyRecruits');
      const db = getFirestore ();
      const deleteRecruitRef = doc (db, 'recruits', `${recruitId}`);
      await deleteDoc (deleteRecruitRef);
    },

    //ログインユーザーの選択されたレッスンを削除
    async deleteLesson ({commit}, {lessonId, objectId}) {
      commit ('cleanMyLessons');
      const db = getFirestore ();
      const deleteLessonRef = doc (db, 'lessons', `${lessonId}`);
      const client = algoliasearch (
        process.env.VUE_APP_ALGOLIAID,
        process.env.VUE_APP_ALGOLIAAPIKEY
      );
      const index = client.initIndex ('focus');

      index.deleteObject (objectId);
      deleteDoc (deleteLessonRef);
    },

    //指定したユーザーのレッスンを取得
    async getTargetLessons ({commit}, userId) {
      commit ('cleanTargetLessons');
      const db = getFirestore ();
      const targetLessonRef = query (
        collection (db, 'lessons'),
        where ('coachingUser.id', '==', `${userId}`)
      );
      const targetLessonsSnap = await getDocs (targetLessonRef);
      targetLessonsSnap.forEach (doc => {
        const lessonData = {
          data: doc.data (),
          id: doc.id,
        };
        commit ('setTargetUserLessons', {
          lessonData: lessonData.data,
          lessonId: lessonData.id,
        });
      });
    },

    async getUsers({commit}) {
      const db = getFirestore ();
      const usersCollectionRef = query (collection (db, 'users'));
      const usersSnap = await getDocs (usersCollectionRef);
      usersSnap.forEach (async doc => {
        const userData = {
          data: doc.data (),
          id: doc.id,
        };
        commit ('setUsers', userData);
      });
    },

    async makeRecruitment ({commit}, {title, comment}) {
      commit ('cleanRecruits');
      const db = getFirestore ();
      const auth = getAuth ();
      const user = auth.currentUser;
      const recruitUserRef = ref (doc (db, 'users', `${user.uid}`));
      const docRef = await addDoc (collection (db, 'recruits'), {
        recruitUser: {
          ref: recruitUserRef,
          id: user.uid,
        },
        title: title,
        comment: comment,
      });
      commit ('setRecruit', docRef);
      // router.push ('Mypage');
    },

    async getRecruits({commit, getters}) {
      commit ('cleanRecruits');
      const db = getFirestore ();
      const recruits = query (collection (db, 'recruits'));
      onSnapshot (recruits, recruitsSnap => {
        recruitsSnap.forEach (async doc => {
          const rateArr = [];
          const followingArr = [];
          const followerArr = [];
          const user = await getDoc (doc.data ().recruitUser.ref);
          const reviewsRef = query (
            collection (db, 'users', `${user.id}`, 'reviews')
          );
          const reviewsSnap = await getDocs (reviewsRef);
          reviewsSnap.forEach (doc => {
            rateArr.push (doc.data ().rate);
          });
          let sum = 0;
          rateArr.forEach (v => {
            sum += v;
          });
          const rate = sum / rateArr.length;
          const recruitsData = {
            data: doc.data (),
            userId: doc.data ().recruitUser.ref.id,
            id: doc.id,
          };
          const followingRef = query (
            collection (db, 'follows'),
            where ('follower.id', '==', `${user.id}`)
          );

          const followSnap = await getDocs (followingRef);
          followSnap.forEach (doc => {
            followingArr.push (doc.data ().followedUser.id);
          });
          const followies = followingArr.length;

          //フォロワーの取得
          const followersRef = query (
            collection (db, 'follows'),
            where ('followedUser.id', '==', `${user.id}`)
          );

          const followersSnap = await getDocs (followersRef);
          followersSnap.forEach (doc => {
            followerArr.push (doc.data ().follower.id);
          });
          const followers = followerArr.length;
          const follow = followerArr.find (id => {
            return id === getters.userProfile.uid;
          });

          const joinedRoom = await getters.rooms.find (room => {
            return room.roomUser.uid === user.id;
          });
          const recruitProfile = user.data ();
          commit ('setRecruit', {
            recruitsData: recruitsData.data,
            recruitProfile: recruitProfile,
            rate: rate,
            followies: followies,
            followers: followers,
            joinedRoom: joinedRoom,
            followState: Boolean (follow),
          });
        });
      });
    },
    //ルームの作成とメッセージ送信(レッスンページから)
    sendFirstMessage ({commit}, {message, receiveUser}) {
      const db = getFirestore ();
      const auth = getAuth ();
      const user = auth.currentUser;
      const receiveUserRef = receiveUser;
      const receiveUserId = receiveUser.id;
      const roomsCollectionRef = collection (db, 'rooms');
      const sendUserRef = ref (doc (db, 'users', `${user.uid}`));
      const usersId = [receiveUserId, user.uid];

      addDoc (roomsCollectionRef, {
        users: {
          id: usersId,
          ref: {
            user1: receiveUserRef,
            user2: sendUserRef,
          },
        },
      }).then (room => {
        const messageRef = collection (roomsCollectionRef, room.id, 'messages');
        addDoc (messageRef, {
          message: message,
          createdAt: serverTimestamp (),
          sendUser: {
            ref: sendUserRef,
          },
        }).then (doc => {
          commit ('setRomms', doc);
        });
      });
    },
    //ルームの作成とメッセージ送信(ユーザーのページから)
    sendFirstMessageToTarget ({commit}, {message, receiveUserId}) {
      const db = getFirestore ();
      const auth = getAuth ();
      onAuthStateChanged (auth, user => {
        const receiveUserRef = ref (doc (db, 'users', `${receiveUserId}`));
        const roomsCollectionRef = collection (db, 'rooms');
        const sendUserRef = ref (doc (db, 'users', `${user.uid}`));
        const usersId = [receiveUserId, user.uid];

        addDoc (roomsCollectionRef, {
          users: {
            id: usersId,
            ref: {
              user1: receiveUserRef,
              user2: sendUserRef,
            },
          },
        }).then (room => {
          const messageRef = collection (
            roomsCollectionRef,
            room.id,
            'messages'
          );
          addDoc (messageRef, {
            message: message,
            createdAt: serverTimestamp (),
            sendUser: {
              ref: sendUserRef,
            },
          }).then (doc => {
            commit ('setRomms', doc);
          });
        });
      });
    },
    //ルームの中からメッセージ送信
    sendMessage ({commit}, {message, roomId}) {
      commit ('cleanMessages');
      const db = getFirestore ();
      const auth = getAuth ();
      const user = auth.currentUser;
      const messageRef = collection (db, 'rooms', roomId, 'messages');
      const sendUserRef = ref (doc (db, 'users', `${user.uid}`));
      const data = {
        message: message,
        createdAt: serverTimestamp (),
        sendUser: {
          ref: sendUserRef,
        },
      };
      addDoc (messageRef, data);
    },
    //ルームを取得
    async getRooms({commit}) {
      const db = getFirestore ();
      const auth = getAuth ();
      onAuthStateChanged (auth, async user => {
        const roomsRef = query (
          collection (db, 'rooms'),
          where ('users.id', 'array-contains', `${user.uid}`)
        );
        const roomsSnap = await getDocs (roomsRef);
        roomsSnap.forEach (async doc => {
          if (user.uid === doc.data ().users.ref.user2.id) {
            const roomUser = await getDoc (doc.data ().users.ref.user1);
            const roomsData = {
              data: doc.data (),
              roomUser: {data: roomUser.data (), uid: roomUser.id},
              id: doc.id,
            };
            commit ('setRooms', roomsData);
          } else if (user.uid === doc.data ().users.ref.user1.id) {
            const roomUser = await getDoc (doc.data ().users.ref.user2);
            const roomsData = {
              data: doc.data (),
              roomUser: {data: roomUser.data (), uid: roomUser.id},
              id: doc.id,
            };
            commit ('setRooms', roomsData);
          }
        });
      });
    },
    //ルーム内のメッセージを取得
    getMessages ({commit}, {roomId}) {
      const db = getFirestore ();
      const messageRef = query (
        collection (db, 'rooms', `${roomId}`, 'messages'),
        orderBy ('createdAt', 'desc')
      );
      onSnapshot (messageRef, messageSnapshot => {
        commit ('cleanMessages');
        messageSnapshot.forEach (async doc => {
          getDoc (doc.data ().sendUser.ref).then (user => {
            const messageData = {
              data: doc.data (),
              year: doc.data ().createdAt.toDate ().getFullYear (),
              month: doc.data ().createdAt.toDate ().getMonth () + 1,
              date: ('0' + doc.data ().createdAt.toDate ().getDate ()).slice (
                -2
              ),
              hours: ('0' + doc.data ().createdAt.toDate ().getHours ()).slice (
                -2
              ),
              minutes: ('0' +
                doc.data ().createdAt.toDate ().getMinutes ()).slice (-2),
              id: doc.id,
              sendUser: user.data (),
            };
            commit ('setMessages', messageData);
          });
        });
      });
    },
    //評価を送信
    sendReview ({commit}, {rate, userUid}) {
      const db = getFirestore ();
      const auth = getAuth ();
      const loginUser = auth.currentUser; //ログインユーザー
      const targetUserRef = collection (db, 'users');
      const sendUserRef = ref (doc (db, 'users', `${loginUser.uid}`));
      const data = {
        rate: rate,
        sendUser: {
          ref: sendUserRef,
        },
      };
      const reveiwRef = collection (targetUserRef, `${userUid}`, 'reviews');
      addDoc (reveiwRef, data);
      commit ('setReveiw');
    },
    //フォローする
    doFollow ({commit}, {targetUserId}) {
      const db = getFirestore ();
      const auth = getAuth ();
      const loginUserUid = auth.currentUser.uid;
      const followsCollectionRef = collection (db, 'follows');
      const followerRef = ref (doc (db, 'users', `${loginUserUid}`));
      const targetUserRef = ref (doc (db, 'users', `${targetUserId}`));
      const followData = {
        follower: {
          id: loginUserUid,
          ref: followerRef,
        },
        followedUser: {
          id: targetUserId,
          ref: targetUserRef,
        },
      };
      addDoc (followsCollectionRef, followData);
      commit ('doFollow');
    },
    //フォローをやめる
    async unFollow ({commit}, {targetUserId}) {
      const db = getFirestore ();
      const auth = getAuth ();
      const loginUserUid = auth.currentUser.uid;
      // const targetUserId = targetUser.id;
      const deleteFollowsRef = query (
        collection (db, 'follows'),
        where ('followedUser.id', '==', `${targetUserId}`),
        where ('follower.id', '==', `${loginUserUid}`)
      );
      const followSnap = await getDocs (deleteFollowsRef);
      followSnap.forEach (async doc => {
        await deleteDoc (doc.ref);
      });
      commit ('unFollow');
    },
  },
  modules: {},
});
