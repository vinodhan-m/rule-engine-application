import React, { useState } from 'react';
import '../App.css'; // Import CSS

const RuleEvaluator = () => {
  const [rule, setRule] = useState('');
  const [userData, setUserData] = useState({
    age: '',
    department: '',
    salary: '',
    experience: ''
  });
  const [evaluationResult, setEvaluationResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setEvaluationResult(null);

    const userInputData = {
      age: parseInt(userData.age, 10) || 0,
      department: userData.department,
      salary: parseInt(userData.salary, 10) || 0,
      experience: parseInt(userData.experience, 10) || 0
    };

    try {
      const response = await fetch('http://localhost:5000/api/rules/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rule_string: rule, userData: userInputData })
      });
      const result = await response.json();
      if (response.ok) {
        setEvaluationResult(result.evaluation);
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError('Error evaluating rule: ' + error.message);
    }
  };

  return (
    <div className="container">
      <h1>Rule Evaluator</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={rule}
          onChange={(e) => setRule(e.target.value)}
          placeholder="Enter rule..."
          required
        />
        <input
          type="number"
          value={userData.age}
          onChange={(e) => setUserData({ ...userData, age: e.target.value })}
          placeholder="Age"
          required
        />
        <input
          type="text"
          value={userData.department}
          onChange={(e) => setUserData({ ...userData, department: e.target.value })}
          placeholder="Department"
          required
        />
        <input
          type="number"
          value={userData.salary}
          onChange={(e) => setUserData({ ...userData, salary: e.target.value })}
          placeholder="Salary"
          required
        />
        <input
          type="number"
          value={userData.experience}
          onChange={(e) => setUserData({ ...userData, experience: e.target.value })}
          placeholder="Experience"
          required
        />
        <button type="submit">Evaluate Rule</button>
      </form>
      {evaluationResult !== null && (
        <div className="result">Evaluation Result: {evaluationResult ? 'True' : 'False'}</div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default RuleEvaluator;
