function createForm() {
  var newForm = document.createElement('div');
  newForm.classList.add('form-group', 'conversion-form');

  var inputText = document.createElement('input');
  inputText.type = 'text';
  inputText.classList.add('conversion-input');
  inputText.placeholder = '変換前';

  var outputText = document.createElement('input');
  outputText.type = 'text';
  outputText.classList.add('conversion-output');
  outputText.placeholder = '変換後';

  var removeButton = document.createElement('button');
  removeButton.type = 'button';
  removeButton.classList.add('remove-button');
  removeButton.textContent = '-';
  removeButton.addEventListener('click', function() {
    newForm.remove();
  });

  newForm.appendChild(inputText);
  newForm.appendChild(outputText);
  newForm.appendChild(removeButton);

  return newForm;
}

document.getElementById('main-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var inputText = document.getElementById('input-text').value;
  var conversionInputs = document.getElementsByClassName('conversion-input');
  var conversionOutputs = document.getElementsByClassName('conversion-output');

  for (var i = 0; i < conversionInputs.length; i++) {
    var input = conversionInputs[i].value;
    var output = conversionOutputs[i].value;
    var regex = new RegExp(input, 'g');
    inputText = inputText.replace(regex, output);
  }

  var outputTextArea = document.getElementById('output-text');
  outputTextArea.value = inputText;
  outputTextArea.select();
});

var conversionForms = document.getElementById('conversion-forms')
var addButton = document.createElement('button');
addButton.type = 'button';
addButton.textContent = '+';
addButton.addEventListener('click', function() {
  var newForm = createForm();
  conversionForms.appendChild(newForm);
});

conversionForms.appendChild(addButton);
