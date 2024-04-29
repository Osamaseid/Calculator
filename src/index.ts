function clearResult() {
  const resultElement: HTMLElement | null = document.getElementById("result");
  if (resultElement) {
    resultElement.innerHTML = "0";
  }
}

function appendCharacter(character: string) {
  const resultElement: HTMLElement | null = document.getElementById("result");
  if (resultElement) {
    const result: string = resultElement.innerHTML;
    if (result === "0") {
      resultElement.innerHTML = character;
    } else {
      resultElement.innerHTML += character;
    }
  }
}

function calculateResult() {
  const resultElement: HTMLElement | null = document.getElementById("result");
  if (resultElement) {
    const result: string = resultElement.innerHTML;
    const calculatedResult: number = eval(result);
    resultElement.innerHTML = calculatedResult.toString();
  }
}