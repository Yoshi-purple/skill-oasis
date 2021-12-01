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

//全ての募集カードを取得
router.get ('/', (req, res) => {
  db.query ('SELECT * FROM recruitments e JOIN users d ON e.recruitinguser_id = d.id', (err, result) => {
    if (err) throw err;
    const data = result;
    res.send (data);
    console.log (data);
  });
});

const makerecruitmensql =
  'INSERT INTO recruitments (cardtext,recruit_title,recruitinguser_id) VALUES(?,?,(SELECT id FROM users WHERE id = ?))';

router.post ('/:id', (req, res) => {
  const id = req.params.id;
  const comment = req.body.comment;
  const title = req.body.title;
  db.query (makerecruitmensql, [comment, title, id], (err, result) => {
    if (err) throw err;
    const data = result;
    res.send (data);
  });
});

router.get ('/', (req, res, next) => {
  res.send ('募集カード！');
});

module.exports = router;
