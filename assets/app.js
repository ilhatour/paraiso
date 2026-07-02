/* Pousada Paraíso · paraiso-site · v0.1.0 */
(function () {
  "use strict";

  /* ---- Menu mobile ---- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Sol assinatura: nasce conforme o scroll ---- */
  var sun = document.getElementById("sun");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (sun && !reduce) {
    var ticking = false;
    function place() {
      var max = document.body.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(1, window.scrollY / max) : 0; // 0 = amanhecer, 1 = luz plena
      // arco: sobe e cruza levemente para o centro
      var rise = -p * (window.innerHeight * 0.42);   // sobe
      var drift = -p * (window.innerWidth * 0.10);   // desliza p/ dentro
      var scale = 1 + p * 0.35;
      sun.style.transform = "translate(" + drift + "px," + rise + "px) scale(" + scale + ")";
      sun.style.opacity = (0.85 + p * 0.15).toString();
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(place); ticking = true; }
    }, { passive: true });
    window.addEventListener("resize", place);
    place();
  }

  /* ---- Nav: link ativo pela seção visível ---- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navA = Array.prototype.slice.call(document.querySelectorAll(".nav__links a"));
  if (sections.length && "IntersectionObserver" in window) {
    var byId = {};
    navA.forEach(function (a) { byId[a.getAttribute("href")] = a; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var a = byId["#" + en.target.id];
        if (a && en.isIntersecting) {
          navA.forEach(function (x) { x.classList.remove("is-active"); });
          a.classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { obs.observe(s); });
  }
})();
