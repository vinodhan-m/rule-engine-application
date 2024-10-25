const { evaluateRule } = require('../utils/ruleUtils');
const { parseRule } = require('../ast');
const { Rule } = require('../models/ruleModel');

exports.create_rule = async (req, res) => {
  const { rule_string } = req.body;
  
  try {
    const ast = parseRule(rule_string); // Parse rule string to AST
    const newRule = await Rule.create({ rule_string, ast: JSON.stringify(ast) }); // Store rule in DB
    res.status(201).json({ message: 'Rule created successfully', rule: newRule });
  } catch (error) {
    console.error('Error creating rule:', error);
    res.status(400).json({ error: 'Failed to create rule' });
  }
};

exports.evaluate_rule = async (req, res) => {
  const { rule_string, userData } = req.body;

  try {
    const ast = parseRule(rule_string); // Parse rule string to AST
    const evaluation = evaluateRule(ast, userData);
    return res.status(200).json({ evaluation });
  } catch (error) {
    console.error('Error evaluating rule:', error);
    return res.status(400).json({ error: 'Error evaluating rule: ' + error.message });
  }
};

exports.get_rules = async (req, res) => {
  try {
    const rules = await Rule.findAll();
    res.status(200).json(rules);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve rules' });
  }
};
