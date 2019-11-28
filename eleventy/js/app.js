console.log(10);
function resizeDrawers() {
  var footer = document.getElementById('footer');
  var offset = window.innerHeight - footer.getBoundingClientRect().top;
  resize('drawerNav', offset);
  resize('tocNav', offset);
  console.log('Javascript is being loaded properly');
}

function resize(drawerId, offset) {
  var drawerContent = document.getElementById(drawerId);
  drawerContent.style.bottom = offset + 'px';
}

window.onresize = function(event) {
  resizeDrawers();
};

document.addEventListener("DOMContentLoaded", function(event) {
  resizeDrawers();
});

// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
var last_known_scroll_position = 0;
var ticking = false;

window.addEventListener('scroll', function(e) {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      resizeDrawers();
      ticking = false;
    });
    ticking = true;
  }
});

document.getElementById('toggleMenu').addEventListener('click', function(e){
  // siteContent_drawer
  console.log('toggle');
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