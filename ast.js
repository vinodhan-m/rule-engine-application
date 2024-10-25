class Node {
  constructor(type, value = null, left = null, right = null) {
    this.type = type; // 'operator' or 'operand'
    this.value = value; // condition value if operand
    this.left = left;   // left child node
    this.right = right; // right child node
  }
}

const operators = ['AND', 'OR', '>', '<', '==', '>=', '<='];

function parseRule(ruleString) {
  const tokens = ruleString.match(/([a-zA-Z]+|\d+|>=|<=|==|>|<|AND|OR|\(|\))/gi);
  if (!tokens) throw new Error('Invalid rule format');

  let index = 0;

  function parseExpression() {
    let node;
    if (tokens[index] === '(') {
      index++;
      node = parseExpression();
      if (tokens[index] === ')') index++;
    } else {
      const field = tokens[index++];
      const operator = tokens[index++];
      const value = tokens[index++];
      node = new Node('operand', { field, operator, value: isNaN(value) ? value : parseInt(value, 10) });
    }

    while (index < tokens.length && operators.includes(tokens[index])) {
      const operator = tokens[index++];
      const rightNode = parseExpression();
      node = new Node('operator', operator, node, rightNode);
    }

    return node;
  }

  return parseExpression();
}

module.exports = { Node, parseRule };
