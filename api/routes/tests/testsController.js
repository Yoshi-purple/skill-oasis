const Express = require ('express');

const cors = require ('cors');
const router = Express.Router ();

router.get ('/', (req, res, next) => {
  res.send ('ルーティング完了！');
});

module.exports = router;
