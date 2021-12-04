const Router = require ('express');
const router = Router ();
const mysql = require ('mysql');
const bodyParser = require ('body-parser');
const cors = require ('cors');

router.use (bodyParser.json ());
router.use (function (req, res, next) {
  res.header ('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header (
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next ();
});

//SQLを変数に定義
const insertUserSql =
  'INSERT INTO users (username,email,password) VALUES(?,?,?)';

const makeProfileSql =
  'UPDATE users SET profile_name = ?,goal=?,introduce=?,image=? WHERE id = ?';

const db = mysql.createConnection ({
  host: 'database-skill-oasis-1.cxes6wajy3tt.us-east-2.rds.amazonaws.com',
  port: '3306',
  user: 'admin',
  password: 'oasis-7339',
});

db.query ('USE skill_oasis_project_db', (err, result) => {
  if (err) throw err;
  console.log (result);
});

//全てのユーザーを取得
router.get ('/', (req, res) => {
  db.query ('SELECT * FROM users', (err, result) => {
    if (err) throw err;
    const data = result;
    res.send (data);
  });
});

//一人のユーザープロフィールを取得(emailから)
router.get ('/:email', (req, res) => {
  const email = req.params.email;
  db.query ('SELECT * FROM users WHERE email =?', [email], (err, result) => {
    if (err) throw err;
    const data = result;
    console.log (data);
    res.send (data);
  });
});
//一人のユーザープロフィールを取得(idから)
router.get ('/:id', (req, res) => {
  const id = req.params.id;
  db.query ('SELECT * FROM users WHERE id =?', [id], (err, result) => {
    if (err) throw err;
    const data = result;
    console.log (data);
    res.send (data);
  });
});

//ユーザーを追加
router.post ('/', (req, res) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  db.query (insertUserSql, [userName, email, password], function (err, result) {
    if (err) throw err;
    const data = result;
    res.send (data);
  });
});
//プロフィールを作成,編集
router.post ('/:id', (req, res) => {
  const profileName = req.body.profileName;
  const goal = req.body.goal;
  const comment = req.body.comment;
  const id = req.params.id;
  const image = req.body.image;
  db.query (
    makeProfileSql,
    [profileName, goal, comment, image, id],
    (err, result) => {
      if (err) throw err;
      const data = result;
      res.send (data);
    }
  );
});

router.get ('/', (req, res, next) => {
  res.send ('ユーザー！');
});

module.exports = router;
