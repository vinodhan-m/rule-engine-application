function evaluateRule(ast, data) {
  if (ast.type === 'operand') {
    const { field, operator, value } = ast.value;
    switch (operator) {
      case '>': return data[field] > value;
      case '<': return data[field] < value;
      case '==': return data[field] == value;
      case '>=': return data[field] >= value;
      case '<=': return data[field] <= value;
      default: return false; // Invalid operator
    }
  } else if (ast.type === 'operator') {
    const leftResult = evaluateRule(ast.left, data);
    const rightResult = evaluateRule(ast.right, data);
    switch (ast.value) {
      case 'AND': return leftResult && rightResult;
      case 'OR': return leftResult || rightResult;
      default: return false; // Invalid operator
    }
  }
  return false; // Default case
}

module.exports = { evaluateRule };
