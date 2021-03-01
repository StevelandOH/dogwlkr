const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const routesRouter = require('./routes.js');
const activitiesRouter = require('./activities.js');
const petsRouter = require('./pets.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/routes', routesRouter);
router.use('/activities', activitiesRouter);
router.use('/pets', petsRouter);

module.exports = router;
