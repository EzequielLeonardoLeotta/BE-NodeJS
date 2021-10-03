const express = require('express');
const {exampleRoute} = require('../controllers/example-controller');
const {healthCheck} = require('../controllers/health');

const router = express.Router();
router.get('/example', exampleRoute);

router.get('/health', healthCheck);

module.exports = router;