// Itinerary Data (5 days - English) — tourist-friendly
const itineraryData = {
  1: {
    title: "Bishkek City + Ala-Archa + Ata-Beyit + Supara",
    location: "Bishkek / Ala-Archa",
    story:
      "Arrival day with the best of Bishkek: city landmarks, history, and a true mountain escape to Ala-Archa — ending with dinner at Supara and a hotel night in Bishkek.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 12px;"><strong>09:00</strong> — Arrival / Meet at Manas International Airport</li>
        <li style="margin-bottom: 12px;"><strong>10:00</strong> — Bishkek city drive + first impressions</li>
        <li style="margin-bottom: 12px;"><strong>11:00</strong> — Ala-Too Square</li>
        <li style="margin-bottom: 12px;"><strong>11:30–12:30</strong> — State History Museum</li>
        <li style="margin-bottom: 12px;"><strong>13:00</strong> — Lunch in the city</li>
        <li style="margin-bottom: 12px;"><strong>14:30</strong> — Departure → Ala-Archa National Park</li>
        <li style="margin-bottom: 12px;"><strong>15:15–17:30</strong> — Nature walk + viewpoints + photos</li>
        <li style="margin-bottom: 12px;"><strong>18:15–19:00</strong> — Ata-Beyit Memorial Complex</li>
        <li style="margin-bottom: 12px;"><strong>19:30</strong> — Dinner at Supara Ethno Complex</li>
        <li style="margin-bottom: 12px;"><strong>21:00</strong> — Hotel check-in / rest in Bishkek</li>
      </ul>
    `,
    highlights: [
      "Manas Airport pickup",
      "Ala-Too Square",
      "State History Museum",
      "Ala-Archa National Park",
      "Ata-Beyit Memorial",
      "Supara ethno dinner"
    ],
    stats: { distance: "—", duration: "Full day", accommodation: "Hotel in Bishkek" },
    difficulty: { physical: 2, cultural: 4, photography: 4 },
    images: [
      "../assets/bishkek.jpg",
      "../assets/ala-too-square-bishkek.jpg",
      "../assets/bishkek-history-museum.jpg",
      "../assets/ala-archa.jpg",
      "../assets/ata-beyit.jpg",
      "../assets/supara-chunkurchak-yurts.jpg"
    ]
  },

  2: {
    title: "Bishkek → Burana Tower → Chon-Kemin → Cholpon-Ata",
    location: "Tokmok / Chon-Kemin / Cholpon-Ata",
    story:
      "A classic road day: Silk Road history at Burana Tower, nature in Chon-Kemin, and a smooth arrival to Issyk-Kul — sleeping in Cholpon-Ata.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 12px;"><strong>09:00</strong> — Departure → Burana Tower (Tokmok)</li>
        <li style="margin-bottom: 12px;"><strong>10:30–12:00</strong> — Burana Tower + museum area + photos</li>
        <li style="margin-bottom: 12px;"><strong>12:30</strong> — Lunch on the route</li>
        <li style="margin-bottom: 12px;"><strong>14:00–16:00</strong> — Chon-Kemin Gorge (easy walk + valley views)</li>
        <li style="margin-bottom: 12px;"><strong>16:30</strong> — Departure → Cholpon-Ata</li>
        <li style="margin-bottom: 12px;"><strong>18:30</strong> — Arrival / check-in</li>
        <li style="margin-bottom: 12px;"><strong>Evening</strong> — Dinner + lake walk (optional)</li>
      </ul>
    `,
    highlights: [
      "Burana Tower (Silk Road landmark)",
      "Chon-Kemin Gorge",
      "Issyk-Kul first views",
      "Overnight in Cholpon-Ata"
    ],
    stats: { distance: "—", duration: "Full day", accommodation: "Hotel in Cholpon-Ata" },
    difficulty: { physical: 2, cultural: 3, photography: 4 },
    images: [
      "../assets/burana-chuy-silk-road.jpg",
      "../assets/chon-kemin.jpg",
      "../assets/issyk-kul-lake.jpg",
      "../assets/ruh-ordo-cholpon-ata.jpg",  
    ]
  },

  3: {
    title: "Cholpon-Ata → Boat Ride → Semenov Gorge → Karakol City Sights",
    location: "Issyk-Kul / Semenov / Karakol",
    story:
      "Lake morning with a boat ride, then fresh alpine air in Semenov Gorge — finishing with Karakol’s famous wooden landmarks.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 12px;"><strong>09:30</strong> — Departure → boat ride</li>
        <li style="margin-bottom: 12px;"><strong>10:00–11:00</strong> — Issyk-Kul boat  (photos + lake views)</li>
        <li style="margin-bottom: 12px;"><strong>11:30</strong> — Departure → Semenov Gorge</li>
        <li style="margin-bottom: 12px;"><strong>12:30–14:30</strong> — Semenov Gorge walk + nature photos</li>
        <li style="margin-bottom: 12px;"><strong>15:00</strong> — Arrival in Karakol / lunch</li>
        <li style="margin-bottom: 12px;"><strong>16:30–18:00</strong> — Dungan Mosque + Orthodox Church</li>
        <li style="margin-bottom: 12px;"><strong>Evening</strong> — Hotel check-in + dinner + rest</li>
      </ul>
    `,
    highlights: [
      "Issyk-Kul boat ride",
      "Semenov Gorge",
      "Dungan Mosque (wooden architecture)",
      "Holy Trinity Orthodox Church",
      "Overnight in Karakol"
    ],
    stats: { distance: "—", duration: "Full day", accommodation: "Hotel in Karakol" },
    difficulty: { physical: 2, cultural: 4, photography: 5 },
    images: [
      "../assets/issyk-kul-boat.jpg",
      "../assets/semenovskoe-gorge.png",
      "../assets/semenov-gorge.html.jpg",
      "../assets/karakol-dungan-mosque.jpg",
      "../assets/karakol-orthodox-church.jpg",
      "../assets/karakol.jpg"
    ]
  },

  4: {
    title: "Karakol → Altyn-Arashan (4x4 + Hot Springs)",
    location: "Karakol / Altyn-Arashan",
    story:
      "The adventure day: leave the city behind and ride into the mountains to Altyn-Arashan — a legendary valley with hot springs and pure alpine vibes.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 12px;"><strong>09:00</strong> — Departure from Karakol</li>
        <li style="margin-bottom: 12px;"><strong>10:30</strong> — Arrival in Altyn-Arashan</li>
        <li style="margin-bottom: 12px;"><strong>11:00–13:00</strong> — Valley walk + photos</li>
        <li style="margin-bottom: 12px;"><strong>13:00</strong> — Lunch (guesthouse)</li>
        <li style="margin-bottom: 12px;"><strong>15:00–17:00</strong> — Hot springs (relax)</li>
        <li style="margin-bottom: 12px;"><strong>Evening</strong> — Dinner + rest</li>
      </ul>
    `,
    highlights: [
      "4x4 mountain road experience",
      "Altyn-Arashan alpine valley",
      "Hot springs",
      "Overnight in the mountains"
    ],
    stats: { distance: "—", duration: "Full day", accommodation: "Guesthouse in Altyn-Arashan" },
    difficulty: { physical: 3, cultural: 2, photography: 5 },
    images: [
      "../assets/altyn-arashan.jpg",
      "../assets/altyn-arashan-road.jpg",
      "../assets/altyn-arashan-hot-springs.jpg",
      "../assets/altyn-arashan-valley.jpg",
      "../assets/militaty-car-in-altyn-arashan.jpg",
      "../assets/altyn-arashan-yourts.jpg",
      "../assets/altyn-arashan-river-road.jpg",
    ]
  },

  5: {
    title: "Altyn-Arashan → Jeti-Oguz → Skazka Canyon → Bishkek",
    location: "Jeti-Oguz / South Shore Issyk-Kul / Bishkek",
    story:
      "A strong финал: red rock landscapes at Jeti-Oguz, surreal shapes in Skazka Canyon — and the return to Bishkek.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 12px;"><strong>08:30</strong> — Departure from Altyn-Arashan</li>
        <li style="margin-bottom: 12px;"><strong>11:00–13:00</strong> — Jeti-Oguz Gorge + red rocks + photos</li>
        <li style="margin-bottom: 12px;"><strong>13:30</strong> — Lunch on the route</li>
        <li style="margin-bottom: 12px;"><strong>15:30–17:00</strong> — Skazka (Fairytale) Canyon walk + photos</li>
        <li style="margin-bottom: 12px;"><strong>17:30</strong> — Departure → Bishkek</li>
        <li style="margin-bottom: 12px;"><strong>22:30</strong> — Arrival in Bishkek</li>
      </ul>
    `,
    highlights: [
      "Jeti-Oguz red rocks + gorge",
      "Skazka (Fairytale) Canyon",
      "South shore landscapes",
      "Return to Bishkek"
    ],
    stats: { distance: "—", duration: "Long day", accommodation: "—" },
    difficulty: { physical: 2, cultural: 2, photography: 5 },
    images: [
      "../assets/jeti-oguz.jpg",
      "../assets/jeti-oguz-broken-heart.jpg",
      "../assets/jeti-oguz-valley.jpg",
      "../assets/skazka-rocks.png",
      "../assets/stones-skazka.png",
      "../assets/bishkek.jpg"
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
  const progressPercent = (day / 5) * 100;
  
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
  nextDayBtn.disabled = day === 5;

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
  if (currentViewerDay < 5) {
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
  } else if (e.key === 'ArrowRight' && currentViewerDay < 5) {
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