/*
 * Work drawings: each card's drawing plays once, when its frame first comes fully into view. It never replays
 * (a pointer moving onto the card to click it must not erase the drawing's amber point). The card keeps
 * data-play once it has played; without it (no script) the drawing shows its static final frame. Under
 * prefers-reduced-motion the CSS turns every animation off, so nothing moves.
 * No library, no analytics.
 */
(() => {
  "use strict";

  const cards = [...document.querySelectorAll(".topic-card")]
    .filter(card => card.querySelector('.topic-image svg [class*="wk-"]') !== null);
  if (cards.length === 0) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  const play = card => {
    if (reduced.matches) return;
    card.setAttribute("data-play", "");
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        play(entry.target.closest(".topic-card"));
      }
    }, { threshold: 0.98 });
    for (const card of cards) observer.observe(card.querySelector(".topic-image"));
  }
})();
