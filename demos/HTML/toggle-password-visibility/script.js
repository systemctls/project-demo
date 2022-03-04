// Query the element
const passwordEle = document.getElementById('password');
const toggleEle = document.getElementById('toggle');

toggleEle.addEventListener('click', () => {
  const type = passwordEle.getAttribute('type');
  passwordEle.setAttribute('type', type === 'password' ? 'text' : 'password');
});