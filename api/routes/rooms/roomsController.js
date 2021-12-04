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

//ルームを取得
router.get ('/:id', (req, res) => {
  const id = req.params.id;
  db.query (
    'SELECT * FROM rooms LEFT OUTER JOIN users ON rooms.senduser_id = users.id || users.id = rooms.receiveuser_id WHERE rooms.senduser_id = ? OR rooms.receiveuser_id = ?',
    [id, id],
    (err, result) => {
      if (err) throw err;
      const data = result;
      res.send (data);
      console.log (data);
    }
  );
});

//ルームを新規作成
router.post ('/:id', (req, res) => {
  const sendUserId = req.params.id;
  const receiveUserId = req.body.receiveUserId;
  db.query ('INSERT INTO rooms (senduser_id, receiveuser_id) VALUES (?,?)', [
    sendUserId,
    receiveUserId,
  ]);
});

router.get ('/', (req, res, next) => {
  res.send ('ROOMS!');
});

//SELECT * FROM rooms LEFT JOIN messages ON rooms.senduser_id = messages.sendinguser_id LEFT JOIN users ON messages.sendinguser_id || messages.receivinguser_id = users.id

module.exports = router;
