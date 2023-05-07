let result = '';

function appendToResult(value) {
    result += value;
    document.getElementById('result').value = result;
}

function clearResult() {
    result = '';
    document.getElementById('result').value = result;
}

function calculate() {
    result = eval(result);
    document.getElementById('result').value = result;
}
