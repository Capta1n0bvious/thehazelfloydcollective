// Mobile menu toggle. The site works without JavaScript on desktop widths.
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-header nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Local preview helper: when a page is opened straight from disk (file://),
  // browsers show a folder listing for links like "bio/". Point them at the
  // index.html inside instead. Does nothing on the live site.
  if (location.protocol === 'file:') {
    document.querySelectorAll('a[href]').forEach(function (a) {
      var h = a.getAttribute('href');
      if (/^(https?:|mailto:|#)/.test(h)) return;
      if (h.charAt(h.length - 1) === '/') a.setAttribute('href', h + 'index.html');
    });
  }
})();
