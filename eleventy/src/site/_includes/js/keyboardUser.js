document.body.addEventListener('mousedown', () => {
  document.body.classList.add('mouseUser');
});
document.body.addEventListener('keydown', e => {
  if (e.key === 'Tab') {
    document.body.classList.remove('mouseUser');
  }
});