import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Amplify, * as AmplifyModules from 'aws-amplify';
import {AmplifyPlugin} from 'aws-amplify-vue';
import awsconfig from './aws-exports';

Amplify.configure (awsconfig);

Vue.use (AmplifyPlugin, AmplifyModules);

Vue.config.productionTip = false;

new Vue ({
  router,
  store,

  render: h => h (App),
}).$mount ('#app');

// const mysql = require ('mysql');
// const con = mysql.createConnection ({
//   host: 'localhost',
//   user: 'root',
//   password: 1234,
// });
// con.connect (err => {
//   if (err) throw err;

//   console.log ('接続完了');

//   con.query ('CREATE DATABASE NodeTest', (err, result) => {
//     if (err) throw err;
//     console.log ('データベースが作成されました');
//     console.log (result);
//   });
// });
