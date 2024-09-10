// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/calculate', (req, res) => {
  const { operand1, operand2, operator } = req.body;
  let result;

  switch (operator) {
    case '+':
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case '-':
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case '*':
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case '/':
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
    default:
      return res.status(400).json({ error: 'Invalid operator' });
  }

  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
