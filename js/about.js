(function () {
  function setupInfiniteCarousel(root) {
    const viewport = root.querySelector(".carousel-viewport");
    const track = root.querySelector(".carousel-track");
    if (!viewport || !track) return;

    // 1) Дублируем слайды для бесшовного лупа
    // Если уже дублировал ранее — не повторяем
    if (!track.dataset.duplicated) {
      track.dataset.duplicated = "1";
      const originalSlides = Array.from(track.children);

      // клонируем 1 раз (достаточно для бесшовного loop)
      originalSlides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
      });
    }

    // 2) Настройки скорости
    // px в секунду (маленькое число = медленно)
    const speed = Number(root.dataset.speed || 20); // 20px/s по дефолту
    let paused = false;

    // 3) Для корректного “половинного” ресета нам нужно знать ширину оригинала
    function getHalfWidth() {
      // половина = ширина оригинальных слайдов
      return track.scrollWidth / 2;
    }

    // 4) Плавная анимация (requestAnimationFrame)
    let last = performance.now();

    function tick(now) {
      const dt = (now - last) / 1000;
      last = now;

      if (!paused) {
        viewport.scrollLeft += speed * dt;

        const half = getHalfWidth();
        // Когда дошли до конца оригинальной половины — возвращаемся в начало
        if (viewport.scrollLeft >= half) {
          viewport.scrollLeft -= half;
        }
      }

      requestAnimationFrame(tick);
    }

    // 5) Пауза при hover / focus
    root.addEventListener("mouseenter", () => (paused = true));
    root.addEventListener("mouseleave", () => (paused = false));
    root.addEventListener("focusin", () => (paused = true));
    root.addEventListener("focusout", () => (paused = false));

    // 6) Touch/Mouse drag (как “таскать”)
    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    function pointerDown(clientX) {
      isDown = true;
      paused = true;
      startX = clientX;
      startScroll = viewport.scrollLeft;
    }

    function pointerMove(clientX) {
      if (!isDown) return;
      const dx = clientX - startX;
      viewport.scrollLeft = startScroll - dx;
    }

    function pointerUp() {
      isDown = false;
      paused = false;
    }

    // мышь
    viewport.addEventListener("mousedown", (e) => pointerDown(e.clientX));
    window.addEventListener("mousemove", (e) => pointerMove(e.clientX));
    window.addEventListener("mouseup", pointerUp);

    // touch
    viewport.addEventListener("touchstart", (e) => {
      if (!e.touches[0]) return;
      pointerDown(e.touches[0].clientX);
    }, { passive: true });

    viewport.addEventListener("touchmove", (e) => {
      if (!e.touches[0]) return;
      pointerMove(e.touches[0].clientX);
    }, { passive: true });

    viewport.addEventListener("touchend", pointerUp);

    // 7) Стартуем в “нуле”
    viewport.scrollLeft = 0;
    requestAnimationFrame(tick);
  }

  // Инициализация всех каруселей
  document.querySelectorAll(".carousel[data-carousel]").forEach(setupInfiniteCarousel);
})();
