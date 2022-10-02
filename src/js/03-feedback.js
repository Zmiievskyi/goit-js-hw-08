import _ from 'lodash';
import { save, load } from './storage';

const obj = {};
const refs = {
  message: document.querySelector('textarea'),
  input: document.querySelector('input'),
  form: document.querySelector('form'),
};
console.log('ss');
refs.form.addEventListener('input', _.throttle(onInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
try {
  const localStorageInput = load('feedback-form-state');
  if (localStorageInput) {
    const storage = JSON.parse(localStorageInput);
    if (storage.email) {
      refs.input.value = storage.email;
    } else {
      refs.input.value = '';
    }
    if (storage.message) {
      refs.message.value = storage.message;
    } else {
      refs.message.value = '';
    }
  }
} catch (error) {}

function onInput(event) {
  event.preventDefault();
  if (event.currentTarget) {
    obj.email = event.currentTarget[0].value;
    obj.message = event.currentTarget[1].value;
  }
  save('feedback-form-state', JSON.stringify(obj));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const formElements = evt.currentTarget.elements;

  if (!formElements.email.value || !formElements.message.value) {
    alert('все поля должны быть заполнены');
  } else {
    obj.email = formElements.email.value;
    obj.message = formElements.message.value;
    console.log(obj);
    localStorage.clear();
    refs.input.value = '';
    refs.message.value = '';
  }
  return obj;
}
