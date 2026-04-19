
  (function () {
    const track = document.getElementById("relatedTrack");
    const btn = document.getElementById("relatedMore");
    if (!track || !btn) return;

    const items = Array.from(track.querySelectorAll(".related-item"));
    const step = 3;
    let visibleCount = 3;

    function render() {
      items.forEach((el, idx) => {
        el.style.display = idx < visibleCount ? "flex" : "none";
      });

      // если больше показывать нечего — прячем кнопку
      if (visibleCount >= items.length) {
        btn.style.display = "none";
      } else {
        btn.style.display = "block";
        btn.textContent = `Show more (${Math.min(step, items.length - visibleCount)})`;
      }
    }

    btn.addEventListener("click", () => {
      visibleCount += step;     // станет 6 после первого клика
      render();
    });

    render();
  })();
