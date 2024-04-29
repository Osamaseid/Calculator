function clearResult() {
    var resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = "0";
    }
}
function appendCharacter(character) {
    var resultElement = document.getElementById("result");
    if (resultElement) {
        var result = resultElement.innerHTML;
        if (result === "0") {
            resultElement.innerHTML = character;
        }
        else {
            resultElement.innerHTML += character;
        }
    }
}
function calculateResult() {
    var resultElement = document.getElementById("result");
    if (resultElement) {
        var result = resultElement.innerHTML;
        var calculatedResult = eval(result);
        resultElement.innerHTML = calculatedResult.toString();
    }
}
