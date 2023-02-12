const button = document.querySelector('button');
button.onclick('submit', (e) => {
  e.preventDefault();
  alert('Task has been added');
});
