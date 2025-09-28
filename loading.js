// loading.js
(function () {
  const loaderEl = document.getElementById('gsLoader');
  let domReady = document.readyState !== 'loading';
  let gridReady = false;

  function hideWhenReady() {
    if (!loaderEl) return;
    if (domReady && gridReady) {
      setTimeout(() => loaderEl.classList.add('hidden'), 120);
      setTimeout(() => loaderEl.remove(), 700);
    }
  }

  if (!domReady) {
    document.addEventListener('DOMContentLoaded', () => {
      domReady = true;
      hideWhenReady();
    });
  }

  // Public hooks
  window.GSLoader = {
    show() {
      if (!loaderEl) return;
      loaderEl.classList.remove('hidden');
    },
    done() {
      gridReady = true;
      hideWhenReady();
    },
    gridSkeleton(count = 8) {
      const grid = document.getElementById('gameGrid');
      if (!grid) return;
      grid.innerHTML = Array(count).fill(0).map(() => `
        <div class="skeleton-card">
          <div class="skeleton skeleton-image"></div>
          <div class="skeleton skeleton-card-title"></div>
          <div class="skeleton skeleton-card-subtitle"></div>
          <div class="skeleton skeleton-card-details"></div>
        </div>
      `).join('');
    }
  };

  // Safety: auto-hide after 6s even if data fails
  setTimeout(() => {
    domReady = true;
    gridReady = true;
    hideWhenReady();
  }, 1000);
})();