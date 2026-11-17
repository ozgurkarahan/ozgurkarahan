/*
 * The rail under the opening: marks the building block in the middle of the window with aria-current and fills
 * the matching bar of the five-bar marker. One IntersectionObserver, no scroll handler. Back in the opening, nothing
 * is marked. Without this script the rail links still work and nothing is marked. No library, no analytics.
 */
(() => {
  const rail = document.querySelector('.rail');
  if (!rail || !('IntersectionObserver' in window)) return;
  const marker = rail.querySelector('.layer-marker');
  const links = [...rail.querySelectorAll('.rail-list a')];
  const sections = [...document.querySelectorAll('section.layer')];
  const opening = document.getElementById('opening');
  const watched = opening ? [opening, ...sections] : sections;
  const inBand = new Set();
  const mark = section => {
    links.forEach(link => {
      if (section && link.hash === '#' + section.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    if (marker) marker.dataset.layer = section ? String(sections.indexOf(section) + 1) : '0';
  };
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) inBand.add(entry.target); else inBand.delete(entry.target);
    }
    // The lowest watched element in the band wins; the opening means no block is current.
    const current = watched.filter(el => inBand.has(el)).pop();
    if (current) mark(current === opening ? null : current);
  }, { rootMargin: '-45% 0px -50% 0px' });
  watched.forEach(el => observer.observe(el));
})();
