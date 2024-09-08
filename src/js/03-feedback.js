const form = document.querySelector('.feedback-form');
var throttle = require('lodash.throttle');
const formObject = {};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(`Email: ${formObject.email}`);
  console.log(`Message: ${formObject.message}`);

  localStorage.removeItem('feedback-form-state');
  for (const key in formObject) {
    if (Object.prototype.hasOwnProperty.call(formObject, key)) {
      delete formObject[key];
    }
  }

  form.reset();
});

form.addEventListener('input', throttle(savingData, 500));
function savingData(e) {
  formObject[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formObject));
}

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const SavedformObject = JSON.parse(savedData);
  form.elements.email.value = SavedformObject.email;
  form.elements.message.value = SavedformObject.message;
}
