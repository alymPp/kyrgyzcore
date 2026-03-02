const places = [
  { name: "Altyn-Arashan", url: "./altyn-arashan.html" },
  { name: "Bishkek", url: "./bishkek.html" },
  { name: "Fairytale Canyon", url: "./canyon-skazka.html" },  
  { name: "Ala-Archa Park", url: "./ala-archa.html" },
  { name: "Jeti-Oguz Rocks", url: "./jeti-oguz.html" },
  { name: "Burana Tower", url: "./burana-tower.html" },
  { name: "Dungan Mosque", url: "./dungan-mosque-karakol.html" },
  { name: "The Dead Lake", url: "./the-dead-lake.html" },
  { name: "Orthodox Church", url: "https://kyrgyzcore.com/orthodox-church.html" },
  { name: "Supara Chunkurchak", url: "https://kyrgyzcore.com/supara-chunkurchak.html" },  
  { name: "Rukh Ordo", url: "https://kyrgyzcore.com/rukh-ordo.html" },
  { name: "Balykchy", url: "https://kyrgyzcore.com/balykchy.html" },
  { name: "Semenovskoe Gorge", url: "./Semenov-gorge.html" },
  { name: "Bosteri Resort", url: "https://kyrgyzcore.com/bosteri.html" },
  { name: "Aska Thermal Spa", url: "https://kyrgyzcore.com/aska-thermal-spa.html" },
];

document.querySelectorAll(".search-bar").forEach(bar => {
  const input = bar.querySelector("input");
  const list = bar.querySelector(".suggestions");
  const btn = bar.querySelector(".search-btn") || bar.querySelector("img");

  let filtered = [];
  let activeIndex = -1;

  function normalize(text) {
    return text.toLowerCase().replace(/[\s-_]/g, "");
  }

  function escapeHtml(str) {
    return str
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // подсветка по "видимому" вводу (без нормализации)
  function highlight(name, query) {
    const safe = escapeHtml(name);
    if (!query) return safe;

    const lowName = name.toLowerCase();
    const lowQ = query.toLowerCase();
    const i = lowName.indexOf(lowQ);

    if (i === -1) return safe;

    const before = escapeHtml(name.slice(0, i));
    const mid = escapeHtml(name.slice(i, i + query.length));
    const after = escapeHtml(name.slice(i + query.length));

    return `${before}<span class="hl">${mid}</span>${after}`;
  }

  function openList() {
    list.style.display = filtered.length ? "block" : "none";
  }

  function closeList() {
    list.style.display = "none";
    activeIndex = -1;
    updateActive();
  }

  function updateActive() {
    [...list.querySelectorAll("li")].forEach((li, idx) => {
      li.classList.toggle("active", idx === activeIndex);
    });
  }

  function render() {
    list.innerHTML = "";
    activeIndex = -1;

    const query = input.value.trim();
    filtered.forEach((place, idx) => {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.href = place.url;
      a.innerHTML = highlight(place.name, query);

      // (опционально) иконка "лупа" как в YouTube
      // a.insertAdjacentHTML("afterbegin", `<span style="opacity:.6">🔎</span>`);

      // чтобы клик по ссылке работал всегда, даже если есть какие-то слушатели
      a.addEventListener("click", () => {
        window.location.href = place.url;
      });

      li.appendChild(a);
      list.appendChild(li);
    });

    openList();
  }

  function goSelectedOrFirst() {
    if (!filtered.length) return;

    const idx = activeIndex >= 0 ? activeIndex : 0;
    window.location.href = filtered[idx].url;
  }

  input.addEventListener("input", () => {
    const q = normalize(input.value.trim());

    if (!q) {
      filtered = [];
      closeList();
      list.innerHTML = "";
      return;
    }

    filtered = places.filter(p => normalize(p.name).includes(q));
    render();
  });

  input.addEventListener("keydown", e => {
    if (list.style.display !== "block") {
      // если списка нет, Enter просто ничего не делает
      if (e.key === "Enter") e.preventDefault();
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, filtered.length - 1);
      updateActive();
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, 0);
      updateActive();
    }

    if (e.key === "Enter") {
      e.preventDefault();
      goSelectedOrFirst();
    }

    if (e.key === "Escape") {
      e.preventDefault();
      closeList();
    }
  });

  // клик по иконке → перейти на первый/выбранный
  btn?.addEventListener("click", () => {
    goSelectedOrFirst();
  });

  // клик вне → закрыть
  document.addEventListener("click", e => {
    if (!e.target.closest(".search-bar")) closeList();
  });

  // фокус/клик в поле → показать, если уже есть результаты
  input.addEventListener("focus", () => {
    if (filtered.length) openList();
  });
});