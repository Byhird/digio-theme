(function() {
  'use strict';
  function init() {
    document.querySelectorAll('.typewriter-cycle').forEach(function(container) {
      var spans = container.querySelectorAll('span');
      if (!spans.length) return;
      spans.forEach(function(s) {
        s.dataset.text = s.textContent;
        s.textContent = '';
      });
      var delay = 6000;
      var idx = 0;
      var typingInterval = null;

      function show(index) {
        if (typingInterval) {
          clearInterval(typingInterval);
          typingInterval = null;
        }
        spans.forEach(function(s, i) {
          if (i === index) {
            s.classList.add('active');
            s.textContent = '';
          } else {
            s.classList.remove('active');
            s.textContent = '';
          }
        });
        var text = spans[index].dataset.text;
        var pos = 0;
        typingInterval = setInterval(function() {
          if (pos < text.length) {
            spans[index].textContent += text.charAt(pos);
            pos++;
          } else {
            clearInterval(typingInterval);
            typingInterval = null;
          }
        }, 30);
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
