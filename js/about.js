
  (function () {
    const root = document.querySelector('[data-carousel="journey"]');
    if (!root) return;

    const track = root.querySelector('.carousel-track');
    const cards = Array.from(root.querySelectorAll('.photo-card'));
    const prev = root.querySelector('[data-prev]');
    const next = root.querySelector('[data-next]');
    const bar  = root.querySelector('[data-bar]');

    let index = 0;
    let timer = null;

    function visibleCount() {
      // desktop: 3 cards visible, mobile: 1 (CSS делает 82%)
      return window.innerWidth <= 900 ? 1 : 3;
    }

    function maxIndex() {
      return Math.max(0, cards.length - visibleCount());
    }

    function cardStepPx() {
      // шаг = ширина карточки + gap (12px)
      const card = cards[0];
      if (!card) return 0;
      const rect = card.getBoundingClientRect();
      return rect.width + 12;
    }

    function set(i) {
      index = Math.min(Math.max(0, i), maxIndex());
      const x = -(index * cardStepPx());
      track.style.transform = `translateX(${x}px)`;
      restartProgress();
    }

    function restartProgress() {
      if (!bar) return;
      bar.style.transition = 'none';
      bar.style.width = '0%';
      // reflow
      bar.offsetHeight;
      bar.style.transition = 'width 3000ms linear';
      bar.style.width = '100%';
    }

    function start() {
      stop();
      restartProgress();
      timer = setInterval(() => {
        if (index >= maxIndex()) set(0);
        else set(index + 1);
      }, 2000);
    }

    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
    }

    prev?.addEventListener('click', () => { set(index - 1); start(); });
    next?.addEventListener('click', () => { set(index + 1); start(); });

    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);

    window.addEventListener('resize', () => {
      set(Math.min(index, maxIndex()));
      start();
    });

    // init
    set(0);
    start();
  })();
