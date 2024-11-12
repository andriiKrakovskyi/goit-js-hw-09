const formData = { email: '', message: '' };

const formFeedback = document.querySelector('.feedback-form');

const storageGet = localStorage.getItem('feedback-form-state');

if (storageGet) {
  const parsedData = JSON.parse(storageGet);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
  formFeedback.elements.email.value = formData.email;
  formFeedback.elements.message.value = formData.message;
}

formFeedback.addEventListener('input', handleInput);
formFeedback.addEventListener('submit', handleSubmit);

function handleInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));

  return;
}

function handleSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    return alert('Fill please all fields');
  }
  localStorage.removeItem('feedback-form-state');

  formData.email = '';
  formData.message = '';

  event.target.reset();
  return;
}
