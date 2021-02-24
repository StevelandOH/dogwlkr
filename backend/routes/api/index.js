const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const routesRouter = require('./routes.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/routes', routesRouter);

router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

module.exports = router;
