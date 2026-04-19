// Itinerary Data (5 days - Korean + fixed links + fixed images)
const itineraryData = {
  1: {
    title: "Bishkek 시티 + Ala-Archa + Ata-Beyit + Supara",
    location: "Bishkek / Ala-Archa",
    story:
      "Bishkek의 주요 명소와 역사, 그리고 Ala-Archa 국립공원의 자연을 경험하는 첫날 일정입니다.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li><strong>09:00</strong> — 공항 도착 / 미팅</li>
        <li><strong>10:00</strong> — <a href="/ko/bishkek.html">Bishkek</a> 시티 투어</li>
        <li><strong>11:00</strong> — Ala-Too 광장</li>
        <li><strong>11:30–12:30</strong> — 국립 역사 박물관</li>
        <li><strong>13:00</strong> — 점심</li>
        <li><strong>14:30</strong> — <a href="/ko/ala-archa.html">Ala-Archa</a> 이동</li>
        <li><strong>15:15–17:30</strong> — 자연 산책 및 사진</li>
        <li><strong>18:15–19:00</strong> — Ata-Beyit 기념관</li>
        <li><strong>19:30</strong> — <a href="/ko/super-chunkurchak.html">Supara</a> 저녁</li>
        <li><strong>21:00</strong> — 호텔 체크인</li>
      </ul>
    `,
    highlights: [
      '<a href="/ko/bishkek.html">Bishkek</a>',
      '<a href="/ko/ala-archa.html">Ala-Archa</a>',
      "국립 역사 박물관",
      "Ata-Beyit 기념관",
      '<a href="/ko/super-chunkurchak.html">Supara</a>'
    ],
    images: [
      "../../assets/bishkek.jpg",
      "../../assets/ala-too-square-bishkek.jpg",
      "../../assets/bishkek-history-museum.jpg",
      "../../assets/ala-archa.jpg",
      "../../assets/ata-beyit.jpg",
      "../../assets/supara-chunkurchak-yurts.jpg"
    ]
  },

  2: {
    title: "Bishkek → Burana Tower → Chon-Kemin → Cholpon-Ata",
    location: "Tokmok / Chon-Kemin",
    story:
      "Burana Tower와 자연 경관을 지나 Issyk-Kul로 이동하는 일정입니다.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li><strong>09:00</strong> — 출발</li>
        <li><strong>10:30–12:00</strong> — <a href="/ko/burana-tower.html">Burana Tower</a></li>
        <li><strong>14:00</strong> — Chon-Kemin</li>
        <li><strong>16:30</strong> — Cholpon-Ata 이동</li>
      </ul>
    `,
    highlights: [
      '<a href="/ko/burana-tower.html">Burana Tower</a>',
      "Chon-Kemin",
      "Issyk-Kul"
    ],
    images: [
      "../../assets/burana-chuy-silk-road.jpg",
      "../../assets/chon-kemin.jpg",
      "../../assets/issyk-kul-lake.jpg",
      "../../assets/ruh-ordo-cholpon-ata.jpg"
    ]
  },

  3: {
    title: "Issyk-Kul → Semenov Gorge → Karakol",
    location: "Issyk-Kul / Karakol",
    story:
      "호수와 산악 계곡을 지나 Karakol로 이동합니다.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li><strong>10:00</strong> — 보트 투어</li>
        <li><strong>12:30</strong> — <a href="/ko/semenov-gorge.html">Semenov Gorge</a></li>
        <li><strong>16:30</strong> — <a href="/ko/dungeon-mosque.html">Dungan Mosque</a></li>
        <li><strong>17:00</strong> — <a href="/ko/orthodox-church.html">Orthodox Church</a></li>
      </ul>
    `,
    highlights: [
      "Issyk-Kul",
      '<a href="/ko/semenov-gorge.html">Semenov Gorge</a>',
      '<a href="/ko/dungeon-mosque.html">Dungan Mosque</a>',
      '<a href="/ko/orthodox-church.html">Orthodox Church</a>'
    ],
    images: [
      "../../assets/issyk-kul-boat.jpg",
      "../../assets/semenovskoe-gorge.png",
      "../../assets/karakol-dungan-mosque.jpg",
      "../../assets/karakol-orthodox-church.jpg"
    ]
  },

  4: {
    title: "Karakol → Altyn-Arashan",
    location: "Altyn-Arashan",
    story:
      "산악 지형과 온천을 즐기는 모험적인 하루입니다.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li><strong>09:00</strong> — 출발</li>
        <li><strong>10:30</strong> — <a href="/ko/altyn-arashan.html">Altyn-Arashan</a></li>
        <li><strong>15:00</strong> — 온천</li>
      </ul>
    `,
    highlights: [
      '<a href="/ko/altyn-arashan.html">Altyn-Arashan</a>',
      "온천"
    ],
    images: [
      "../../assets/altyn-arashan.jpg",
      "../../assets/altyn-arashan-road.jpg",
      "../../assets/altyn-arashan-hot-springs.jpg",
      "../../assets/altyn-arashan-valley.jpg"
    ]
  },

  5: {
    title: "Jeti-Oguz → Skazka Canyon → Bishkek",
    location: "Issyk-Kul / Bishkek",
    story:
      "붉은 바위와 협곡을 지나 Bishkek으로 돌아옵니다.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li><strong>11:00</strong> — <a href="/ko/jeti-oguz.html">Jeti-Oguz</a></li>
        <li><strong>15:30</strong> — <a href="/ko/canyon-skazka.html">Skazka Canyon</a></li>
        <li><strong>22:30</strong> — <a href="/ko/bishkek.html">Bishkek</a> 도착</li>
      </ul>
    `,
    highlights: [
      '<a href="/ko/jeti-oguz.html">Jeti-Oguz</a>',
      '<a href="/ko/canyon-skazka.html">Skazka Canyon</a>'
    ],
    images: [
      "../../assets/jeti-oguz.jpg",
      "../../assets/jeti-oguz-broken-heart.jpg",
      "../../assets/skazka-rocks.png",
      "../../assets/stones-skazka.png",
      "../../assets/bishkek.jpg"
    ]
  }
};

// ── WA Widget helper ─────────────────────────────────
function hideWA() {
  const wa = document.getElementById('waWidget');
  if (wa) wa.style.display = 'none';
}
function showWA() {
  const wa = document.getElementById('waWidget');
  if (wa) wa.style.display = 'flex';
}

// ── Modal ────────────────────────────────────────────
function openModal(tourName) {
  document.querySelector('input[name="tour_name"]').value = tourName || '';
  document.getElementById('bookingModal').classList.add('active');
  document.body.style.overflow = 'hidden';
  hideWA();
}

function closeModal() {
  document.getElementById('bookingModal').classList.remove('active');
  document.body.style.overflow = '';
  showWA();
}

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });
  }
});

// ── Accordion ────────────────────────────────────────
function displayItinerary() {
  const display = document.getElementById('itinerary-display');
  let html = '<div class="accordion-container">';

  for (let day in itineraryData) {
    const data = itineraryData[day];
    html += `
      <div class="accordion-item">
        <button class="accordion-header" onclick="toggleAccordion(${day})">
          <div class="accordion-left">
            <span class="accordion-day"></span>
            <span class="accordion-title">Day ${day}. ${data.title}</span>
          </div>
          <i class="ri-arrow-down-s-line accordion-icon"></i>
        </button>
        <div class="accordion-content">
          <div class="accordion-inner">
            <div class="accordion-images">
              <img src="${data.images[0]}" alt="Day ${day} - Image 1">
              <img src="${data.images[1]}" alt="Day ${day} - Image 2">
            </div>
            <div class="accordion-story">
              <p>${data.story}</p>
            </div>
            <div class="accordion-highlights">
              <h4><i class="ri-star-fill"></i> Highlights</h4>
              <ul>
                ${data.highlights.map(h => `<li><i class="ri-check-line"></i> ${h}</li>`).join('')}
              </ul>
            </div>
            <button class="btn view-full-day-btn" onclick="openDayViewer(${day})">
              <i class="ri-eye-line"></i> View Full Day Details
            </button>
          </div>
        </div>
      </div>
    `;
  }

  html += '</div>';
  display.innerHTML = html;
}

function toggleAccordion(day) {
  const items = document.querySelectorAll('.accordion-item');
  const currentItem = items[day - 1];
  const wasActive = currentItem.classList.contains('active');
  items.forEach(item => item.classList.remove('active'));
  if (!wasActive) currentItem.classList.add('active');
}

document.querySelectorAll('.day-button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.day-button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    openDayViewer(parseInt(btn.dataset.day));
  });
});

// ── Day Viewer ───────────────────────────────────────
const dayViewer    = document.getElementById('dayViewer');
const viewerBg     = document.getElementById('viewerBg');
const viewerContent = document.getElementById('viewerContent');
const closeViewerBtn = document.getElementById('closeViewerBtn');
const prevDayBtn   = document.getElementById('prevDayBtn');
const nextDayBtn   = document.getElementById('nextDayBtn');
let currentViewerDay = 1;

function openDayViewer(day) {
  currentViewerDay = day;
  renderDayViewer(day);
  dayViewer.classList.add('active');
  document.body.style.overflow = 'hidden';
  hideWA(); // ← скрыть WA
}

function closeDayViewer() {
  dayViewer.classList.remove('active');
  document.body.style.overflow = '';
  showWA(); // ← вернуть WA
}
function renderDayViewer(day) {
  const data = itineraryData[day];
  const stats = data.stats || { duration: "—", accommodation: "—" };
  const difficulty = data.difficulty || { physical: 0, cultural: 0, photography: 0 };

  viewerBg.style.backgroundImage = `url(${data.images[0]})`;

  const progressPercent = (day / 5) * 100;

  const badges = [];
  if (difficulty.physical >= 3) badges.push({ icon: '🏔️', text: 'Mountain Explorer' });
  if (difficulty.cultural >= 4) badges.push({ icon: '🎭', text: 'Culture Enthusiast' });
  if (difficulty.photography >= 4) badges.push({ icon: '📸', text: 'Photography Paradise' });

  viewerContent.innerHTML = `
    <div class="progress-section">
      <div class="progress-bar-container">
        <div class="progress-bar-fill" style="width: ${progressPercent}%"></div>
      </div>
      <div class="progress-text">${day} / 5 Days</div>
    </div>

    ${badges.length > 0 ? `
      <div class="badges-container">
        ${badges.map((badge, i) => `
          <div class="badge" style="animation-delay: ${i * 0.1}s">
            <span>${badge.icon}</span>
            <span>${badge.text}</span>
          </div>
        `).join('')}
      </div>
    ` : ''}

    <div class="viewer-header">
      <div class="viewer-day-badge">Day ${day} of 5</div>
      <h1 class="viewer-title">${data.title}</h1>
      <div class="viewer-location">
        <i class="ri-map-pin-2-fill"></i>
        ${data.location}
      </div>
    </div>

    ${data.story ? `
      <div style="background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); padding: 25px; border-radius: 16px; margin-bottom: 30px; border-left: 4px solid #FDB913;">
        <p style="color: white; font-size: 18px; line-height: 1.8; font-style: italic; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
          ${data.story}
        </p>
      </div>
    ` : ''}

    <div class="viewer-stats">
      <div class="viewer-stat">
        <i class="ri-time-line"></i>
        <div>
          <div style="font-size: 12px; opacity: 0.8;">Duration</div>
          <div style="font-weight: 600;">${stats.duration}</div>
        </div>
      </div>
      <div class="viewer-stat">
        <i class="ri-hotel-line"></i>
        <div>
          <div style="font-size: 12px; opacity: 0.8;">Accommodation</div>
          <div style="font-weight: 600;">${stats.accommodation}</div>
        </div>
      </div>
    </div>

    ${data.difficulty ? `
      <div class="difficulty-section">
        <h4>📊 Activity Levels</h4>
        <div class="difficulty-grid">
          <div class="difficulty-item">
            <span class="difficulty-label">🏃‍♂️ Physical Difficulty</span>
            <div class="difficulty-bars">
              ${[1,2,3,4,5].map(i => `<div class="difficulty-bar ${i <= difficulty.physical ? 'active' : ''}"></div>`).join('')}
            </div>
          </div>
          <div class="difficulty-item">
            <span class="difficulty-label">🎭 Cultural Immersion</span>
            <div class="difficulty-bars">
              ${[1,2,3,4,5].map(i => `<div class="difficulty-bar ${i <= difficulty.cultural ? 'active' : ''}"></div>`).join('')}
            </div>
          </div>
          <div class="difficulty-item">
            <span class="difficulty-label">📸 Photography</span>
            <div class="difficulty-bars">
              ${[1,2,3,4,5].map(i => `<div class="difficulty-bar ${i <= difficulty.photography ? 'active' : ''}"></div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    ` : ''}

    <div class="viewer-description">
      <h3>Daily Schedule</h3>
      <div style="font-size: 16px; line-height: 1.8; color: #333;">
        ${data.description}
      </div>
      <h4 style="font-size: 20px; margin: 30px 0 20px 0; color: #1a1a1a;">
        <i class="ri-star-fill" style="color: #FDB913;"></i> Highlights
      </h4>
      <div class="viewer-highlights">
        ${data.highlights.map(h => `
          <div class="viewer-highlight-item">
            <i class="ri-check-line"></i>
            <span>${h}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="viewer-gallery">
      <h3>📸 Photo Gallery</h3>
      <div class="gallery-grid">
        ${data.images.map(img => `<img src="${img}" alt="Day ${day}">`).join('')}
      </div>
    </div>
  `;

  prevDayBtn.disabled = day === 1;
  nextDayBtn.disabled = day === 5;
  dayViewer.scrollTop = 0;
}

closeViewerBtn.addEventListener('click', closeDayViewer);

prevDayBtn.addEventListener('click', () => {
  if (currentViewerDay > 1) openDayViewer(currentViewerDay - 1);
});

nextDayBtn.addEventListener('click', () => {
  if (currentViewerDay < 5) openDayViewer(currentViewerDay + 1);
});

document.addEventListener('keydown', (e) => {
  if (!dayViewer.classList.contains('active')) return;
  if (e.key === 'Escape')                              closeDayViewer();
  else if (e.key === 'ArrowLeft'  && currentViewerDay > 1) openDayViewer(currentViewerDay - 1);
  else if (e.key === 'ArrowRight' && currentViewerDay < 5) openDayViewer(currentViewerDay + 1);
});

// ── Init ─────────────────────────────────────────────
displayItinerary();

// View toggle
const viewToggle     = document.getElementById('viewToggle');
const interactiveView = document.getElementById('interactive-view');
const fullView       = document.getElementById('full-view');
let isFullView = false;

function generateFullView() {
  let html = '';
  for (let day = 1; day <= 5; day++) {
    const data = itineraryData[day];
    html += `
      <div class="full-itinerary-item">
        <h3>
          <span class="day-badge">Day&nbsp;${day}</span>
          ${data.title}
        </h3>
        <p>${data.description}</p>
      </div>
    `;
  }
  fullView.innerHTML = html;
}

generateFullView();

viewToggle.addEventListener('click', () => {
  isFullView = !isFullView;
  if (isFullView) {
    interactiveView.style.display = 'none';
    fullView.style.display = 'block';
    viewToggle.innerHTML = '<i class="ri-layout-grid-line"></i> Show Interactive View';
  } else {
    interactiveView.style.display = 'block';
    fullView.style.display = 'none';
    viewToggle.innerHTML = '<i class="ri-list-check"></i> Show Full Itinerary';
  }
});

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!wasActive) item.classList.add('active');
  });
});

// Smooth scroll to booking
document.querySelectorAll('a[href="#booking"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  });
});