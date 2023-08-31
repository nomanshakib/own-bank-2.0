
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
};

function getTextElementValueById(textElementId) {
    const textElement = document.getElementById(textElementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
};

function setTextElementValueInDisplayById(textElementId, currentValue) {
    const textElement = document.getElementById(textElementId);
    textElement.innerText = currentValue;
};