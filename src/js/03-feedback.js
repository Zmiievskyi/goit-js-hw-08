import _ from 'lodash';
import { save, load } from './storage';

const obj = {};
const refs = {
  message: document.querySelector('textarea'),
  input: document.querySelector('input'),
  form: document.querySelector('form'),
};

refs.form.addEventListener('input', _.throttle(onInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

try {
  const localStorageInput = JSON.parse(load('feedback-form-state'));
  if (localStorageInput.email) {
    refs.input.value = localStorageInput.email;
  } else {
    refs.input.value = '';
  }
  if (localStorageInput.message) {
    refs.message.value = localStorageInput.message;
  } else {
    refs.message.value = '';
  }
} catch (error) {}

function onInput(event) {
  event.preventDefault();
  if (event.target.nodeName === 'INPUT') {
    obj.email = event.target.value;
  }
  if (event.target.nodeName === 'TEXTAREA') {
    obj.message = event.target.value;
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
  }
  return obj;
}


