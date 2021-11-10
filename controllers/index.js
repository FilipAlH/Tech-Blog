const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apis = require('./api');

router.use('/', homeRoutes);
router.use('/api', apis);

module.exports = router;
