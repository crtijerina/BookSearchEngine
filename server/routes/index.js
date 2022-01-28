let apiRoutes = require('./api');
let router = require('express').Router();
let path = require('path');

router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  });
  
module.exports = router;