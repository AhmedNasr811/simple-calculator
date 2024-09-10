async function calculate() {
  const operand1 = document.getElementById('operand1').value;
  const operand2 = document.getElementById('operand2').value;
  const operator = document.getElementById('operator').value;

  const response = await fetch('/calculate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ operand1, operand2, operator })
  });

  const data = await response.json();
  const resultElement = document.getElementById('result');

  if (data.error) {
    resultElement.textContent = `Error: ${data.error}`;
  } else {
    resultElement.textContent = `Result: ${data.result}`;
  }
}
