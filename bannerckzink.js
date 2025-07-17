// ads-banner.js

window.atOptions = {
  'key': '9c7a0ba8968020f1c3a24f8dda4882cc',
  'format': 'iframe',
  'height': 250,
  'width': 300,
  'params': {}
};

// Buat elemen script dan sisipkan invoke.js ke halaman
(function () {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '//www.highperformanceformat.com/9c7a0ba8968020f1c3a24f8dda4882cc/invoke.js';
  document.body.appendChild(script);
})();
