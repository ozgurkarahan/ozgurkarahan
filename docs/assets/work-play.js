/*
 * Work drawings: each card's drawing plays once when its frame first comes fully into view, and again when
 * the pointer enters the card. The card carries data-play while it plays; removing it snaps the drawing to its
 * static final frame. Under prefers-reduced-motion the CSS turns every animation off, so nothing moves.
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
    // A replay restarts from its first frame: remove, force a style recalculation, set again.
    card.removeAttribute("data-play");
    void card.offsetWidth;
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
  for (const card of cards) {
    card.addEventListener("pointerenter", event => {
      if (event.pointerType === "mouse") play(card);
    });
  }
})();
