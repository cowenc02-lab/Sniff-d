// Sniff'd theme JS — mobile nav + variant picker + add to cart

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.mobile-nav-toggle');
  var nav = document.querySelector('.site-header__nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
    });
  }

  // Variant swatch selection
  document.querySelectorAll('[data-variant-picker]').forEach(function (picker) {
    var swatches = picker.querySelectorAll('.variant-swatch');
    var input = document.querySelector(picker.dataset.target);
    swatches.forEach(function (swatch) {
      swatch.addEventListener('click', function () {
        swatches.forEach(function (s) { s.classList.remove('is-selected'); });
        swatch.classList.add('is-selected');
        if (input) input.value = swatch.dataset.variantId;
      });
    });
  });

  // Add to cart (AJAX)
  document.querySelectorAll('[data-add-to-cart-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var formData = new FormData(form);
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      })
        .then(function (res) { return res.json(); })
        .then(function () {
          var count = document.querySelector('.header-cart-count');
          if (count) {
            fetch('/cart.js')
              .then(function (r) { return r.json(); })
              .then(function (cart) { count.textContent = cart.item_count; });
          }
          var btn = form.querySelector('button[type="submit"]');
          if (btn) {
            var original = btn.textContent;
            btn.textContent = 'Added! 🐾';
            setTimeout(function () { btn.textContent = original; }, 1600);
          }
        })
        .catch(function (err) { console.error('Sniff\'d add to cart error', err); });
    });
  });
});
