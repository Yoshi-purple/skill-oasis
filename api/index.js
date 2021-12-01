const express = require ('express');
const router = require ('./routes/index');
const mysql = require ('mysql');
const bodyParser = require ('body-parser');
const app = express ();
const cors = require ('cors');

app.use (bodyParser.json ());

app.use (function (req, res, next) {
  res.header ('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header (
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next ();
});

app.get ('/', (req, res) => res.send ('Hello Express!'));

app.use ('/api', router);

app.listen (3000, () => {
  console.log ('Start serv 3000');
});
