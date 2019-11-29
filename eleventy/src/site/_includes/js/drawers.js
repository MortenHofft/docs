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

window.onresize = function (event) {
  resizeDrawers();
};

document.addEventListener("DOMContentLoaded", function (event) {
  resizeDrawers();
});

(function() {
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
  var ticking = false;
  window.addEventListener('scroll', function (e) {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        resizeDrawers();
        ticking = false;
      });
      ticking = true;
    }
  });
})();