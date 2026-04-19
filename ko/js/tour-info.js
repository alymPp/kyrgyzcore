const itineraryData = {
  1: {
    title: "Bishkek 도착 → Ala-Archa 국립공원 → Supara 환영 저녁",
    location: "Bishkek / Ala-Archa",
    story: "산의 신선한 공기와 알프스 풍경, 그리고 따뜻한 문화적 환영으로 시작하는 여유로운 첫날입니다.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 12px;"><strong>도착</strong> — <a href="/ko/bishkek.html">Bishkek</a> 공항 미팅</li>
        <li style="margin-bottom: 12px;"><strong>이동</strong> — 호텔 체크인 및 휴식</li>
        <li style="margin-bottom: 12px;"><strong>이후</strong> — <a href="/ko/ala-archa.html">Ala-Archa 국립공원</a> 이동</li>
        <li style="margin-bottom: 12px;"><strong>낮</strong> — 산책 및 자연 풍경 감상</li>
        <li style="margin-bottom: 12px;"><strong>저녁</strong> — <a href="/ko/super-chunkurchak.html">Supara</a> 민속 복합단지에서 환영 만찬</li>
        <li style="margin-bottom: 12px;"><strong>밤</strong> — 전통 공연 및 <a href="/ko/bishkek.html">Bishkek</a> 숙박</li>
      </ul>
    `,
    highlights: [
      '<a href="/ko/bishkek.html">Bishkek</a> 공항 픽업',
      '<a href="/ko/ala-archa.html">Ala-Archa 국립공원</a>',
      "산악 자연 산책",
      '<a href="/ko/super-chunkurchak.html">Supara</a> 민속 복합단지',
      "전통 환영 만찬 및 공연"
    ],
    stats: { distance: "—", duration: "반일", accommodation: "Bishkek 호텔" },
    difficulty: { physical: 1, cultural: 4, photography: 4 },
    images: [
      "../assets/bishkek-airport.jpg",
      "../assets/ala-archa.jpg",
      "../assets/supara.jpg"
    ]
  },

  2: {
    title: "Bishkek → Chon-Kemin 계곡 → 승마 체험",
    location: "Chon-Kemin",
    story: "자연 속에서의 승마와 여유로운 휴식이 어우러진 전원 풍경의 하루입니다.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 12px;"><strong>아침</strong> — <a href="/ko/bishkek.html">Bishkek</a> 출발</li>
        <li style="margin-bottom: 12px;"><strong>도착</strong> — Chon-Kemin 계곡</li>
        <li style="margin-bottom: 12px;"><strong>낮</strong> — 4시간 승마 체험</li>
        <li style="margin-bottom: 12px;"><strong>점심</strong> — 자연 속 피크닉</li>
        <li style="margin-bottom: 12px;"><strong>이후</strong> — 게스트하우스 휴식</li>
        <li style="margin-bottom: 12px;"><strong>저녁</strong> — 현지 가정식 식사</li>
      </ul>
    `,
    highlights: [
      '<a href="/ko/bishkek.html">Bishkek</a> 출발',
      "Chon-Kemin 이동",
      "4시간 승마 체험",
      "산림과 초원 풍경",
      "게스트하우스 숙박"
    ],
    stats: { distance: "—", duration: "종일", accommodation: "Chon-Kemin 게스트하우스" },
    difficulty: { physical: 3, cultural: 3, photography: 4 },
    images: [
      "../assets/chon-kemin-valley.jpg",
      "../assets/chon-kemin-horseback.jpg",
      "../assets/chon-kemin-guesthouse.jpg"
    ]
  },

  3: {
    title: "Chon-Kemin → Issyk-Kul 남쪽 → Bokonbaevo 전통 체험",
    location: "Bokonbaevo / Issyk-Kul 남쪽",
    story: "유목 문화와 전통을 깊이 체험하는 문화 중심의 하루입니다.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 12px;"><strong>아침</strong> — Issyk-Kul 남쪽 이동</li>
        <li style="margin-bottom: 12px;"><strong>도착</strong> — Bokonbaevo 마을</li>
        <li style="margin-bottom: 12px;"><strong>낮</strong> — 독수리 사냥 시연</li>
        <li style="margin-bottom: 12px;"><strong>이후</strong> — 전통 펠트 공예 체험</li>
        <li style="margin-bottom: 12px;"><strong>하루 종일</strong> — 문화 체험 및 이야기</li>
        <li style="margin-bottom: 12px;"><strong>저녁</strong> — <a href="/ko/destination.html">Issyk-Kul</a> 인근 숙박</li>
      </ul>
    `,
    highlights: [
      '<a href="/ko/destination.html">Issyk-Kul</a> 남쪽 이동',
      "독수리 사냥 체험",
      "펠트 공예 워크샵",
      "유목 문화 체험",
      "현지 라이프 경험"
    ],
    stats: { distance: "—", duration: "종일", accommodation: "게스트하우스 / 유르트" },
    difficulty: { physical: 1, cultural: 5, photography: 5 },
    images: [
      "../assets/bokonbaevo-eagle.jpg",
      "../assets/felt-workshop.jpg",
      "../assets/issyk-kul-south-shore.jpg"
    ]
  },

  4: {
    title: "Skazka Canyon → Barskoon → Jeti-Oguz → Altyn-Arashan",
    location: "Skazka / Barskoon / Jeti-Oguz / Altyn-Arashan",
    story: "협곡, 폭포, 붉은 바위, 그리고 오프로드 산악 이동까지 포함된 가장 드라마틱한 하루입니다.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li><strong>아침</strong> — <a href="/ko/canyon-skazka.html">Skazka Canyon</a> 탐방</li>
        <li><strong>이후</strong> — <a href="/ko/barskoon-gorge.html">Barskoon 협곡</a> 이동</li>
        <li><strong>낮</strong> — Barskoon 폭포 트레킹</li>
        <li><strong>오후</strong> — <a href="/ko/jeti-oguz.html">Jeti-Oguz</a> 사진 촬영</li>
        <li><strong>저녁</strong> — Karakol 도착 및 차량 변경</li>
        <li><strong>밤</strong> — <a href="/ko/altyn-arashan.html">Altyn-Arashan</a> 이동 및 숙박</li>
      </ul>
    `,
    highlights: [
      '<a href="/ko/canyon-skazka.html">Skazka Canyon</a>',
      '<a href="/ko/barskoon-gorge.html">Barskoon 협곡</a>',
      '<a href="/ko/jeti-oguz.html">Jeti-Oguz</a> 붉은 바위',
      "오프로드 체험",
      '<a href="/ko/altyn-arashan.html">Altyn-Arashan</a> 이동'
    ],
    stats: { distance: "—", duration: "종일", accommodation: "Altyn-Arashan 게스트하우스" },
    difficulty: { physical: 4, cultural: 2, photography: 5 },
    images: [
      "../assets/fairytale-canyon.jpg",
      "../assets/barskoon-gorge.jpg",
      "../assets/jeti-oguz.jpg",
      "../assets/altyn-arashan-road.jpg"
    ]
  },

  5: {
    title: "Altyn-Arashan 승마 → 온천 체험",
    location: "Altyn-Arashan",
    story: "산속 자연 속에서 승마와 온천으로 힐링하는 하루입니다.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li><strong>아침</strong> — <a href="/ko/altyn-arashan.html">Altyn-Arashan</a>에서 기상</li>
        <li><strong>낮</strong> — 승마 체험</li>
        <li><strong>점심</strong> — 자연 속 휴식</li>
        <li><strong>오후</strong> — <a href="/ko/aska-thermal-spa.html">온천 체험</a></li>
        <li><strong>저녁</strong> — <a href="/ko/altyn-arashan.html">Altyn-Arashan</a> 숙박</li>
      </ul>
    `,
    highlights: [
      '<a href="/ko/altyn-arashan.html">Altyn-Arashan</a> 계곡',
      "승마 체험",
      "파노라마 풍경",
      '<a href="/ko/aska-thermal-spa.html">온천</a>',
      "산속 숙박"
    ],
    stats: { distance: "—", duration: "종일", accommodation: "Altyn-Arashan 게스트하우스" },
    difficulty: { physical: 3, cultural: 2, photography: 5 },
    images: [
      "../assets/altyn-arashan-valley.jpg",
      "../assets/altyn-arashan-horse.jpg",
      "../assets/altyn-arashan-hot-springs.jpg"
    ]
  },

  6: {
    title: "Altyn-Arashan → Issyk-Kul 북쪽 → Bishkek",
    location: "Altyn-Arashan / Issyk-Kul / Bishkek",
    story: "호수와 협곡을 따라 Bishkek으로 돌아가는 마지막 날입니다.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li><strong>아침</strong> — 조식</li>
        <li><strong>이후</strong> — 오프로드 하산</li>
        <li><strong>낮</strong> — <a href="/ko/destination.html">Issyk-Kul</a> 북쪽 이동</li>
        <li><strong>정차</strong> — <a href="/ko/Semenov-gorge.html">Semenov 협곡</a> / Grigoriev 협곡</li>
        <li><strong>저녁</strong> — <a href="/ko/bishkek.html">Bishkek</a> 도착</li>
      </ul>
    `,
    highlights: [
      "오프로드 이동",
      '<a href="/ko/destination.html">Issyk-Kul</a> 북쪽',
      '<a href="/ko/Semenov-gorge.html">Semenov 협곡</a>',
      "Grigoriev 협곡",
      '<a href="/ko/bishkek.html">Bishkek</a> 귀환'
    ],
    stats: { distance: "—", duration: "종일", accommodation: "호텔 / 공항 이동" },
    difficulty: { physical: 2, cultural: 2, photography: 4 },
    images: [
      "../assets/semenov-gorge.jpg",
      "../assets/grigoriev-gorge.jpg",
      "../assets/issyk-kul-north-shore.jpg",
      "../assets/bishkek-evening.jpg"
    ]
  }
};

// Display accordion itinerary as fallback
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
            <!-- Images -->
            <div class="accordion-images">
              <img src="${data.images[0]}" alt="Day ${day} - Image 1">
              <img src="${data.images[1]}" alt="Day ${day} - Image 2">
            </div>
            
            <!-- Story -->
            <div class="accordion-story">
              <p>${data.story}</p>
            </div>
            
            <!-- Highlights -->
            <div class="accordion-highlights">
              <h4><i class="ri-star-fill"></i> Highlights</h4>
              <ul>
                ${data.highlights.map(h => `<li><i class="ri-check-line"></i> ${h}</li>`).join('')}
              </ul>
            </div>
            
            <!-- View Full Day Button -->
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

// Toggle accordion
function toggleAccordion(day) {
  const items = document.querySelectorAll('.accordion-item');
  const currentItem = items[day - 1];
  const wasActive = currentItem.classList.contains('active');
  
  // Close all
  items.forEach(item => item.classList.remove('active'));
  
  // Open current if it wasn't active
  if (!wasActive) {
    currentItem.classList.add('active');
  }
}

// Day button click handlers
document.querySelectorAll('.day-button').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active from all
    document.querySelectorAll('.day-button').forEach(b => b.classList.remove('active'));
    // Add active to clicked
    btn.classList.add('active');
    
    const day = parseInt(btn.dataset.day);
    openDayViewer(day);
  });
});

// Fullscreen Day Viewer
const dayViewer = document.getElementById('dayViewer');
const viewerBg = document.getElementById('viewerBg');
const viewerContent = document.getElementById('viewerContent');
const closeViewerBtn = document.getElementById('closeViewerBtn');
const prevDayBtn = document.getElementById('prevDayBtn');
const nextDayBtn = document.getElementById('nextDayBtn');
let currentViewerDay = 1;

function openDayViewer(day) {
  currentViewerDay = day;
  renderDayViewer(day);
  dayViewer.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDayViewer() {
  dayViewer.classList.remove('active');
  document.body.style.overflow = '';
}

function renderDayViewer(day) {
  const data = itineraryData[day];
  
  // Set background
  viewerBg.style.backgroundImage = `url(${data.images[0]})`;
  
  // Calculate progress percentage
  const progressPercent = (day / 6) * 100;
  
  // Determine badges based on day characteristics
  const badges = [];
  if (data.difficulty.physical >= 3) badges.push({ icon: '🏔️', text: 'Mountain Explorer' });
  if (data.difficulty.cultural >= 4) badges.push({ icon: '🎭', text: 'Culture Enthusiast' });
  if (data.difficulty.photography >= 4) badges.push({ icon: '📸', text: 'Photography Paradise' });
  
  // Render content
  viewerContent.innerHTML = `
    <div class="progress-section">
      <div class="progress-bar-container">
        <div class="progress-bar-fill" style="width: ${progressPercent}%"></div>
      </div>
      <div class="progress-text">${day} / 6 Days</div>
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
      <div class="viewer-day-badge">Day ${day} of 6</div>
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
          <div style="font-weight: 600;">${data.stats.duration}</div>
        </div>
      </div>
      <div class="viewer-stat">
        <i class="ri-hotel-line"></i>
        <div>
          <div style="font-size: 12px; opacity: 0.8;">Accommodation</div>
          <div style="font-weight: 600;">${data.stats.accommodation}</div>
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
              ${[1,2,3,4,5].map(i => `<div class="difficulty-bar ${i <= data.difficulty.physical ? 'active' : ''}"></div>`).join('')}
            </div>
          </div>
          <div class="difficulty-item">
            <span class="difficulty-label">🎭 Cultural Immersion</span>
            <div class="difficulty-bars">
              ${[1,2,3,4,5].map(i => `<div class="difficulty-bar ${i <= data.difficulty.cultural ? 'active' : ''}"></div>`).join('')}
            </div>
          </div>
          <div class="difficulty-item">
            <span class="difficulty-label">📸 Photography</span>
            <div class="difficulty-bars">
              ${[1,2,3,4,5].map(i => `<div class="difficulty-bar ${i <= data.difficulty.photography ? 'active' : ''}"></div>`).join('')}
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

  // Update navigation buttons
  prevDayBtn.disabled = day === 1;
  nextDayBtn.disabled = day === 6;

  // Scroll to top
  dayViewer.scrollTop = 0;
}

// Navigation handlers
closeViewerBtn.addEventListener('click', closeDayViewer);

prevDayBtn.addEventListener('click', () => {
  if (currentViewerDay > 1) {
    openDayViewer(currentViewerDay - 1);
  }
});

nextDayBtn.addEventListener('click', () => {
  if (currentViewerDay < 6) {
    openDayViewer(currentViewerDay + 1);
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!dayViewer.classList.contains('active')) return;
  
  if (e.key === 'Escape') {
    closeDayViewer();
  } else if (e.key === 'ArrowLeft' && currentViewerDay > 1) {
    openDayViewer(currentViewerDay - 1);
  } else if (e.key === 'ArrowRight' && currentViewerDay < 6) {
    openDayViewer(currentViewerDay + 1);
  }
});

// Initialize accordion display
displayItinerary();

// View toggle functionality
const viewToggle = document.getElementById('viewToggle');
const interactiveView = document.getElementById('interactive-view');
const fullView = document.getElementById('full-view');
let isFullView = false;

// Generate full itinerary HTML
function generateFullView() {
  let html = '';
  for (let day = 1; day <= 6; day++) {
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
    
    if (!wasActive) {
      item.classList.add('active');
    }
  });
});

// Smooth scroll to booking
document.querySelectorAll('a[href="#booking"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  });
});