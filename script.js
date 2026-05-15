// Dariusz Jemielniak landing page - minimal interactions.

(function () {
  "use strict";

  // Stamp the current year in the colophon.
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Scroll-reveal for sections (respects reduced-motion preference).
  const reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    return;
  }

  const targets = document.querySelectorAll(
    "section, .book, .theme, .paper-list li"
  );

  // Pre-reveal anything already in the viewport so the hero doesn't fade.
  const vh = window.innerHeight;
  targets.forEach((el) => {
    el.classList.add("reveal");
    const r = el.getBoundingClientRect();
    if (r.top < vh * 0.85) el.classList.add("in");
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
  );

  targets.forEach((el) => io.observe(el));
})();
