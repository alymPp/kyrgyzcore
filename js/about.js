(function () {
  function perViewNow() {
    const w = window.innerWidth;
    if (w <= 640) return 1;
    if (w <= 980) return 2;
    return 3;
  }

  function init(root) {
    const viewport = root.querySelector(".carousel-viewport");
    const track = root.querySelector(".carousel-track");
    const prevBtn = root.querySelector("[data-prev]");
    const nextBtn = root.querySelector("[data-next]");
    const bar = root.querySelector(".c-bar");
    if (!viewport || !track) return;

    const AUTOPLAY_MS = Number(root.dataset.autoplay || 4500);
    let perView = perViewNow();
    let paused = false;
    let timer = null;

    const originals = Array.from(track.children);
    if (originals.length < 2) return;

    // clone edges (loop)
    function cloneForLoop() {
      // очистка старых клонов при resize (если были)
      Array.from(track.querySelectorAll('[data-clone="1"]')).forEach(n => n.remove());

      perView = perViewNow();

      const head = originals.slice(0, perView).map(n => n.cloneNode(true));
      const tail = originals.slice(-perView).map(n => n.cloneNode(true));

      head.forEach(c => { c.dataset.clone = "1"; c.setAttribute("aria-hidden", "true"); });
      tail.forEach(c => { c.dataset.clone = "1"; c.setAttribute("aria-hidden", "true"); });

      tail.reverse().forEach(c => track.insertBefore(c, track.firstChild));
      head.forEach(c => track.appendChild(c));
    }

    cloneForLoop();

    function gapPx() {
      const styles = getComputedStyle(track);
      const g = styles.gap || styles.columnGap || "12px";
      return parseFloat(g) || 12;
    }

    function slideSize() {
      const first = track.children[0];
      if (!first) return 0;
      return first.getBoundingClientRect().width + gapPx();
    }

    // index starts after left clones
    let index = perView;

    function setX(animate = true) {
      const sz = slideSize();
      if (!sz) return;
      track.style.transition = animate
        ? "transform 600ms cubic-bezier(.2,.8,.2,1)"
        : "none";
      track.style.transform = `translateX(${-index * sz}px)`;
    }

    function resetIfNeeded() {
      const originalsCount = originals.length;

      // moved after last original
      if (index >= originalsCount + perView) {
        index = perView;
        setX(false);
      }

      // moved before first original
      if (index < perView) {
        index = originalsCount + perView - 1;
        setX(false);
      }
    }

    track.addEventListener("transitionend", resetIfNeeded);

    function restartProgress() {
      if (!bar) return;
      bar.style.transition = "none";
      bar.style.width = "0%";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          bar.style.transition = `width ${AUTOPLAY_MS}ms linear`;
          bar.style.width = "100%";
        });
      });
    }

    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
      if (bar) bar.style.transition = "none";
    }

    function start() {
      stop();
      if (paused) return;
      restartProgress();
      timer = setInterval(() => {
        if (!paused) next();
      }, AUTOPLAY_MS);
    }

    function next() {
      index += 1;
      setX(true);
      restartProgress();
    }

    function prev() {
      index -= 1;
      setX(true);
      restartProgress();
    }

    // UI
    if (nextBtn) nextBtn.addEventListener("click", () => { next(); start(); });
    if (prevBtn) prevBtn.addEventListener("click", () => { prev(); start(); });

    // pause on hover/focus
    root.addEventListener("mouseenter", () => { paused = true; stop(); });
    root.addEventListener("mouseleave", () => { paused = false; start(); });
    root.addEventListener("focusin", () => { paused = true; stop(); });
    root.addEventListener("focusout", () => { paused = false; start(); });

    // drag/swipe
    let down = false, startX = 0, startTranslate = 0;

    function readTranslate() {
      const m = track.style.transform.match(/translateX\(([-0-9.]+)px\)/);
      return m ? parseFloat(m[1]) : 0;
    }

    function pointerDown(x) {
      down = true;
      paused = true;
      stop();
      startX = x;
      track.style.transition = "none";
      startTranslate = readTranslate();
    }

    function pointerMove(x) {
      if (!down) return;
      const dx = x - startX;
      track.style.transform = `translateX(${startTranslate + dx}px)`;
    }

    function pointerUp(x) {
      if (!down) return;
      down = false;

      const dx = x - startX;
      const sz = slideSize();
      const threshold = Math.min(90, sz * 0.25);

      track.style.transition = "transform 600ms cubic-bezier(.2,.8,.2,1)";

      if (dx < -threshold) index += 1;
      else if (dx > threshold) index -= 1;

      setX(true);
      paused = false;
      start();
    }

    viewport.addEventListener("mousedown", (e) => pointerDown(e.clientX));
    window.addEventListener("mousemove", (e) => pointerMove(e.clientX));
    window.addEventListener("mouseup", (e) => pointerUp(e.clientX));

    viewport.addEventListener("touchstart", (e) => {
      if (!e.touches[0]) return;
      pointerDown(e.touches[0].clientX);
    }, { passive: true });

    viewport.addEventListener("touchmove", (e) => {
      if (!e.touches[0]) return;
      pointerMove(e.touches[0].clientX);
    }, { passive: true });

    viewport.addEventListener("touchend", (e) => {
      const x = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : startX;
      pointerUp(x);
    });

    // resize => rebuild clones & reposition
    window.addEventListener("resize", () => {
      const newPV = perViewNow();
      if (newPV !== perView) {
        // reset to originals then rebuild clones
        // сначала убираем все элементы трека и вставляем только оригиналы
        track.innerHTML = "";
        originals.forEach(n => track.appendChild(n));
        cloneForLoop();
        index = perViewNow();
        setX(false);
        start();
      } else {
        setX(false);
      }
    });

    // init position + autoplay
    setX(false);
    start();
  }

  document.querySelectorAll(".carousel[data-carousel]").forEach(init);
})();