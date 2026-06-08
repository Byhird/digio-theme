(function() {
  'use strict';
  function init() {
    document.querySelectorAll('.typewriter-cycle').forEach(function(container) {
      var spans = container.querySelectorAll('span');
      if (!spans.length) return;
      var delay = 6000;
      var idx = 0;
      function show(index) {
        spans.forEach(function(s, i) {
          if (i === index) {
            s.classList.add('active');
          } else {
            s.classList.remove('active');
            void s.offsetWidth;
          }
        });
      }
      show(0);
      setInterval(function() {
        idx = (idx + 1) % spans.length;
        show(idx);
      }, delay);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
