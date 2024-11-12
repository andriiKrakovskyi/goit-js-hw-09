const formData = { email: '', message: '' };

const formFeedback = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

const storageGet = JSON.parse(localStorage.getItem(localStorageKey));
console.log(storageGet);

if (storageGet) {
  formData.email = storageGet.email;
  formData.message = storageGet.message;
  formFeedback.elements.email.value = formData.email;
  formFeedback.elements.message.value = formData.message;
}

formFeedback.addEventListener('input', handleInput);
formFeedback.addEventListener('submit', handleSubmit);

function handleInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
  return;
}

function handleSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    return alert('Fill please all fields');
  }
  localStorage.removeItem(localStorageKey);

  formData.email = '';
  formData.message = '';

  event.target.reset();
  return;
}
