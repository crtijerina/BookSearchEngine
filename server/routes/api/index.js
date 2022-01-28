let router = require('express').Router();
let userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;