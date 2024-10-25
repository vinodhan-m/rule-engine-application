const express = require('express');
const { create_rule, evaluate_rule, get_rules } = require('../controllers/ruleController');

const router = express.Router();

router.post('/create', create_rule);
router.post('/evaluate', evaluate_rule);
router.get('/all', get_rules);

module.exports = router;
