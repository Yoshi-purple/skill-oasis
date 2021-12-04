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

//全てのレッスンを取得
router.get ('/', (req, res) => {
  db.query ('SELECT * FROM lessons', (err, result) => {
    if (err) throw err;
    const data = result;
    res.send (data);
    console.log (data);
  });
});

//レッスンを新規作成
const makeLessonSql =
  'INSERT INTO lessons (lesson_title,image,lesson_detail, coachinguser_id) VALUES(?,?,?,(SELECT id FROM users WHERE id = ?))';

router.post ('/:id', (req, res) => {
  const lessonTitle = req.body.lessonTitle;
  const introduce = req.body.introduce;
  const image = req.body.image;
  const id = req.params.id;
  db.query (
    makeLessonSql,
    [lessonTitle, image, introduce, id],
    (err, result) => {
      if (err) throw err;
      const data = result;
      res.send (data);
    }
  );
});

router.get ('/', (req, res, next) => {
  res.send ('レッスン！');
});

module.exports = router;
