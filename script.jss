// Roastify AI — UI interactions (theme toggle, mobile nav, demo points)
(function(){
  const root = document.documentElement;
  const THEME_KEY = 'roastify_theme';
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.rf-nav');
  const themeToggle = document.getElementById('themeToggle');
  const pointsValue = document.getElementById('pointsValue');

  // Theme initialisation
  function applyTheme(theme){
    if(theme === 'dark'){
      root.setAttribute('data-theme','dark');
      themeToggle.textContent = '☀️';
    } else {
      root.removeAttribute('data-theme');
      themeToggle.textContent = '🌙';
    }
    try { localStorage.setItem(THEME_KEY, theme); } catch(e){}
  }
  const saved = (function(){ try { return localStorage.getItem(THEME_KEY) } catch(e){ return null } })();
  applyTheme(saved || 'light');

  themeToggle.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    applyTheme(isDark ? 'light' : 'dark');
  });

  // Mobile menu
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    nav.parentElement.classList.toggle('open');
  });

  // Demo points (replace with real API integration)
  function fetchPointsDemo(){
    // Simulate async fetch — replace with fetch('/api/points') etc.
    return new Promise(resolve => setTimeout(()=> resolve(1250), 300));
  }
  fetchPointsDemo().then(points => {
    pointsValue.textContent = points.toLocaleString();
  });

  // Expose a demo function to add points (for local testing)
  window.RoastifyDemo = {
    addPoints(n=100){
      const current = Number(pointsValue.textContent.replace(/,/g,'')) || 0;
      const next = current + Number(n);
      pointsValue.textContent = next.toLocaleString();
    }
  };
})();
