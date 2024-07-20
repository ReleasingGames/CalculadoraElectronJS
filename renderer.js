document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = Array.from(document.querySelectorAll(".buttons button"));
  let currentInput = "";
  let operator = "";
  let firstOperand = "";

  // Função para atualizar o display
  function updateDisplay(value) {
    display.value = value;
  }

  // Função para calcular a expressão
  function calculate() {
    try {
      const result = eval(currentInput);
      updateDisplay(result);
      currentInput = result;
    } catch (error) {
      updateDisplay("Error");
      currentInput = "";
    }
  }

  // Adiciona event listeners para os botões
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");

      if (value === "=") {
        calculate();
      } else if (value === "C") {
        currentInput = "";
        updateDisplay("");
      } else {
        currentInput += value;
        updateDisplay(currentInput);
      }
    });
  });
});