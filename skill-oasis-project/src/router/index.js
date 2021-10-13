import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Makeprofile from '../views/Makeprofile.vue';
import Myprofile from '../views/Myprofile.vue';
import Editprofile from '../views/Editprofile.vue';
import Mypage from '../views/Mypage.vue';
import RegisterCoach from '../views/RegisterCoach.vue';
import Messagebox from '../views/Messagebox.vue';
import Messageroom from '../views/Messageroom.vue';
import Makereqruitcard from '../views/Makereqruitcard.vue';
import Userprofile from '../views/Userprofile.vue';
import Coachprofile from '../views/Coachprofile.vue';

Vue.use (VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Makeprofile',
    name: 'Makeprofile',
    component: Makeprofile,
  },
  {
    path: '/Myprofile',
    name: 'Myprofile',
    component: Myprofile,
  },
  {
    path: '/Editprofile',
    name: 'Editprofile',
    component: Editprofile,
  },
  {
    path: '/Mypage',
    name: 'Mypage',
    component: Mypage,
  },
  {
    path: '/RegisterCoach',
    name: 'RegisterCoach',
    component: RegisterCoach,
  },
  {
    path: '/Messagebox',
    name: 'Messagebox',
    component: Messagebox,
  },
  {
    path: '/Messageroom',
    name: 'Messageroom',
    component: Messageroom,
  },
  {
    path: '/Makereqruitcard',
    name: 'Makereqruitcard',
    component: Makereqruitcard,
  },
  {
    path: '/Userprofile',
    name: 'Userprofile',
    component: Userprofile,
  },
  {
    path: '/Coachprofile',
    name: 'Coachprofile',
    component: Coachprofile,
  },
];

const router = new VueRouter ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
