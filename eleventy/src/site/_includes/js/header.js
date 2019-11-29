document.getElementById('toggleMenu').addEventListener('click', function(e){
  // siteContent_drawer
  var siteContent_drawer = document.getElementById("siteContent_drawer");
  siteContent_drawer.classList.toggle("hide-sm");
});

document.body.addEventListener('mousedown', () => {
  document.body.classList.add('mouseUser');
});
document.body.addEventListener('keydown', e => {
  if (e.key === 'Tab') {
    document.body.classList.remove('mouseUser');
  }
});