const Express = require ('express');
const test = require ('./tests/testsController');
const user = require ('./users/usersController');
const lesson = require ('./lessons/lessonsController');
const recruit = require ('./recruits/recruitsController');
const message = require ('./messages/messagesController');
const room = require ('./rooms/roomsController');

const router = Express.Router ();

router.use ('/test', test);
router.use ('/users', user);
router.use ('/lessons', lesson);
router.use ('/recruits', recruit);
router.use ('/messages', message);
router.use ('/rooms', room);

module.exports = router;
