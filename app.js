// Lê o config.js e liga a página: preços, botões de compra, pixel e políticas.
(function () {
  var C = window.SP_CONFIG || {};

  // Preenche os textos marcados com data-sp="chave"
  document.querySelectorAll('[data-sp]').forEach(function (el) {
    var v = C[el.getAttribute('data-sp')];
    if (v) el.textContent = v;
  });

  // Monta o link do checkout repassando as UTMs da campanha
  function linkCheckout() {
    if (!C.checkoutUrl) return '#preco';
    var url = new URL(C.checkoutUrl);
    var atual = new URLSearchParams(location.search);
    atual.forEach(function (valor, chave) {
      if (/^(utm_|src|sck|fbclid|gclid|ttclid|xcod)/.test(chave)) url.searchParams.set(chave, valor);
    });
    return url.toString();
  }

  document.querySelectorAll('[data-cta]').forEach(function (a) {
    a.href = linkCheckout();
    a.addEventListener('click', function () {
      if (C.checkoutUrl && window.fbq) fbq('track', 'InitiateCheckout', { value: parseFloat(C.preco.replace(',', '.')), currency: 'BRL' });
    });
  });

  // Pixel do Meta, só se tiver ID no config
  if (C.pixelId) {
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s) }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', C.pixelId);
    fbq('track', 'PageView');
    fbq('track', 'ViewContent', { content_name: C.produto, value: parseFloat(C.preco.replace(',', '.')), currency: 'BRL' });
  }

  // Lista de dores: marcar e desmarcar
  document.querySelectorAll('.dor').forEach(function (b) {
    b.addEventListener('click', function () { b.classList.toggle('marcada'); });
  });

  // Políticas em janela
  var modal = document.getElementById('modal');
  document.querySelectorAll('[data-politica]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var tpl = document.getElementById('pol-' + a.getAttribute('data-politica'));
      modal.querySelector('.modal__corpo').innerHTML = tpl.innerHTML;
      modal.querySelectorAll('[data-sp]').forEach(function (el) { var v = C[el.getAttribute('data-sp')]; if (v) el.textContent = v; });
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });
  function fechar() { modal.hidden = true; document.body.style.overflow = ''; }
  modal.addEventListener('click', function (e) { if (e.target === modal || e.target.closest('.modal__fechar')) fechar(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fechar(); });

  // Botão fixo no celular aparece depois do topo
  var fixo = document.querySelector('.cta-fixo');
  var hero = document.querySelector('.hero');
  if (fixo && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { fixo.classList.toggle('visivel', !en[0].isIntersecting); }).observe(hero);
  }
})();
