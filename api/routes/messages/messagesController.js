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

//全てのメッセージを取得
router.get ('/', (req, res) => {
  db.query ('SELECT * FROM messages ', (err, result) => {
    if (err) throw err;
    const data = result;
    res.send (data);
    console.log (data);
  });
});
//メッセージを新規作成
const sendMessageSql =
  'INSERT INTO messages (sendinguser_id,receivinguser_id,comment,image1,image2,image3) VALUES (?,?,?,?,?,?)';

router.post ('/:id', (req, res) => {
  const sendUserId = req.params.id;
  const receiveUserId = req.body.receiveUserId;
  const comment = req.body.comment;
  const image1 = req.body.image1;
  const image2 = req.body.image2;
  const image3 = req.body.image3;
  db.query (
    sendMessageSql,
    [sendUserId, receiveUserId, comment, image1, image2, image3],
    (err, result) => {
      if (err) throw err;
      const data = result;
      res.send (data);
    }
  );
});

//Idが一致するメッセージを取得
router.get ('/:id', (req, res) => {
  const id = req.params.id;
  db.query (
    'SELECT * FROM messages e JOIN users d ON e.sendinguser_id = d.id WHERE sendinguser_id XOR receivinguser_id = ?',
    [id, id, id],
    (err, result) => {
      if (err) throw err;
      const data = result;
      res.send (data);
      console.log (data);
    }
  );
});

router.get ('/', (req, res, next) => {
  res.send ('メッセージ！');
});

module.exports = router;

//'SELECT * FROM messages e JOIN users d ON e.sendinguser_id = d.id WHERE sendinguser_id || receivinguser_id = (?)',
