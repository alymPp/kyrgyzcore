// Itinerary Data (6 days - English) — cleaned for tourists
const itineraryData = {
  1: {
    title: "Chunkurchak Mountains → Supara → Issyk-Kul → Cholpon-Ata",
    location: "Chunkurchak / Bishkek area / Cholpon-Ata",
    story: "A big first day: mountains, activities, traditional lunch, then a scenic drive to Issyk-Kul with an overnight in Cholpon-Ata.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 12px;"><strong>09:00</strong> — Departure → Chunkurchak Mountains</li>
        <li style="margin-bottom: 12px;"><strong>10:00</strong> — Arrival</li>
        <li style="margin-bottom: 12px;"><strong>10:00–12:30</strong> — Activities: swings, archery, horseback riding</li>
        <li style="margin-bottom: 12px;"><strong>12:30</strong> — Lunch</li>
        <li style="margin-bottom: 12px;"><strong>14:00</strong> — Departure</li>
        <li style="margin-bottom: 12px;"><strong>15:00</strong> — Supara (traditional complex)</li>
        <li style="margin-bottom: 12px;"><strong>16:30</strong> — Departure to Issyk-Kul</li>
        <li style="margin-bottom: 12px;"><strong>19:30</strong> — Dinner stop (local food)</li>
        <li style="margin-bottom: 12px;"><strong>21:00</strong> — Continue to Cholpon-Ata</li>
        <li style="margin-bottom: 12px;"><strong>23:00</strong> — Sleep / Rest</li>
      </ul>
    `,
    highlights: [
      "Chunkurchak Mountains",
      "Swings + Archery",
      "Horseback riding",
      "Supara (traditional complex)",
      "Drive to Issyk-Kul + overnight in Cholpon-Ata"
    ],
    stats: { distance: "—", duration: "Full day", accommodation: "Hotel / Guesthouse" },
    difficulty: { physical: 2, cultural: 3, photography: 4 },
    images: [
      "../assets/supara-chunkurchak-yurts.jpg",
      "../assets/supara-chunkurchak-archery.jpg",
      "../assets/supara-chunkurchak-horse.jpg",
      "../assets/supara-chunkurchak-restaurant.jpg",
      "../assets/supara-chunkurchak-river.jpg",
    ]
  },

  2: {
    title: "Rukh-Ordo → Bosteri → Yacht Ride → Kyrchyn",
    location: "Cholpon-Ata / Bosteri / Kyrchyn",
    story: "Culture and lake vibes in the morning, a yacht ride in the afternoon, then off to Kyrchyn for the evening.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 12px;"><strong>10:00</strong> — Departure → Rukh-Ordo</li>
        <li style="margin-bottom: 12px;"><strong>10:00–12:00</strong> — Walk + photos at the cultural complex</li>
        <li style="margin-bottom: 12px;"><strong>12:00</strong> — Arrival in Bosteri</li>
        <li style="margin-bottom: 12px;"><strong>12:00–13:00</strong> — Lunch</li>
        <li style="margin-bottom: 12px;"><strong>13:00–14:00</strong> — Yacht ride on Issyk-Kul</li>
        <li style="margin-bottom: 12px;"><strong>18:00</strong> — Departure → Kyrchyn</li>
        <li style="margin-bottom: 12px;"><strong>19:30</strong> — Arrival</li>
        <li style="margin-bottom: 12px;"><strong>Evening</strong> — Dinner • Rest • Sleep</li>
      </ul>
    `,
    highlights: [
      "Rukh-Ordo cultural complex",
      "Photo spots by the lake",
      "Bosteri lunch stop",
      "Yacht ride on Issyk-Kul",
      "Evening arrival to Kyrchyn"
    ],
    stats: { distance: "—", duration: "Full day", accommodation: "Camp / Guesthouse" },
    difficulty: { physical: 1, cultural: 4, photography: 4 },
    images: [
      "../assets/ruh-ordo-cholpon-ata.jpg",
      "../assets/bostery.jpg",
      "../assets/kyrchyn-issyk-kul.jpg",
    ]
  },

  3: {
    title: "Full Day in Kyrchyn (Relax + Activities)",
    location: "Kyrchyn",
    story: "A flexible day: sauna, nature, light outdoor activities and a cozy evening — then transfer to Karakol.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 12px;"><strong>Morning</strong> — Kyrchyn: sauna / banya</li>
        <li style="margin-bottom: 12px;"><strong>Daytime</strong> — Horses • walks • photos • optional outdoor activities</li>
        <li style="margin-bottom: 12px;"><strong>Evening</strong> — Dinner + rest</li>
        <li style="margin-bottom: 12px;"><strong>19:00</strong> — Departure → Karakol</li>
      </ul>
    `,
    highlights: [
      "Banya (sauna)",
      "Horses + outdoor walks",
      "Photo sessions in nature",
      "Relaxed day in the valley",
      "Evening transfer to Karakol"
    ],
    stats: { distance: "—", duration: "Full day", accommodation: "Karakol (after transfer)" },
    difficulty: { physical: 2, cultural: 3, photography: 5 },
    images: [
      "../assets/semenovskoe-gorge.png",
      "../assets/cow-semenov-gorge.jpg",
      "../assets/hourse-semenov-gorge.jpg",
      "../assets/semenov-gorge.html.jpg"
    ]
  },

  4: {
    title: "Ak-Suu Hot Springs → Karakol City → Jeti-Oguz",
    location: "Ak-Suu / Karakol / Jeti-Oguz",
    story: "Hot springs first, then Karakol’s main sights, and finish the day in Jeti-Oguz with red-rock landscapes and a gorge walk.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 12px;"><strong>08:30</strong> — Departure</li>
        <li style="margin-bottom: 12px;"><strong>09:00</strong> — Arrival in Ak-Suu</li>
        <li style="margin-bottom: 12px;"><strong>09:00–12:30</strong> — Hot springs</li>
        <li style="margin-bottom: 12px;"><strong>12:30</strong> — Lunch</li>
        <li style="margin-bottom: 12px;"><strong>After lunch</strong> — Karakol highlights: Dungan Mosque + Orthodox Church</li>
        <li style="margin-bottom: 12px;"><strong>14:00</strong> — Departure → Jeti-Oguz</li>
        <li style="margin-bottom: 12px;"><strong>15:00</strong> — Arrival</li>
        <li style="margin-bottom: 12px;"><strong>15:00–21:00</strong> — Broken Heart rock • photos • horses • gorge walk • waterfall</li>
        <li style="margin-bottom: 12px;"><strong>21:00</strong> — Return to Karakol • Dinner • Sleep</li>
      </ul>
    `,
    highlights: [
      "Ak-Suu hot springs",
      "Karakol: Dungan Mosque & Orthodox Church",
      "Jeti-Oguz red rocks",
      "Broken Heart rock + photos",
      "Gorge walk + waterfall"
    ],
    stats: { distance: "—", duration: "Full day", accommodation: "Hotel in Karakol" },
    difficulty: { physical: 2, cultural: 4, photography: 5 },
    images: [
      "../assets/aksuu-hot-spring.jpg",
      "../assets/jeti-oguz.jpg",
      "../assets/jeti-oguz-broken-heart.jpg",
      "../assets/jeti-oguz-valley.jpg",
      "../assets/jeti-oguz-scars.jpg"
    ]
  },

  5: {
    title: "Skazka Canyon → Dead Lake → Yurt Night",
    location: "Issyk-Kul South Shore",
    story: "A day of dramatic landscapes, a unique lake stop, and a cozy yurt night with traditional dinner.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 12px;"><strong>09:00</strong> — Departure</li>
        <li style="margin-bottom: 12px;"><strong>13:00</strong> — Arrival at Skazka Canyon</li>
        <li style="margin-bottom: 12px;"><strong>13:00–15:00</strong> — Walk + photos inside the canyon</li>
        <li style="margin-bottom: 12px;"><strong>—</strong> — Dead Lake stop</li>
        <li style="margin-bottom: 12px;"><strong>16:00</strong> — Arrival at yurt camp / check-in</li>
        <li style="margin-bottom: 12px;"><strong>Evening</strong> — Dinner (traditional Kyrgyz meal)</li>
        <li style="margin-bottom: 12px;"><strong>Night</strong> — Sleep in yurts</li>
      </ul>
    `,
    highlights: [
      "Skazka (Fairy Tale) Canyon",
      "Dead Lake stop",
      "Traditional dinner",
      "Overnight in yurts"
    ],
    stats: { distance: "—", duration: "Full day", accommodation: "Yurt camp" },
    difficulty: { physical: 2, cultural: 3, photography: 5 },
    images: [
      "../assets/skazka.jpg,
      "../assets/dead-lake-issyk-kul.jpg",
      "../assets/dead-lake-yurt.jpg",
      "../assets/besh-barmak.webp"
    ]
  },

  6: {
    title: "Return to Bishkek (Local Food Stop + Dinner with a View)",
    location: "Bishkek",
    story: "Easy return day back to Bishkek with a classic food stop, city arrival, dinner with a view, and airport transfer.",
    description: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 12px;"><strong>11:00</strong> — Departure → Bishkek</li>
        <li style="margin-bottom: 12px;"><strong>14:00</strong> — Local food stop</li>
        <li style="margin-bottom: 12px;"><strong>17:00</strong> — Arrival in Bishkek</li>
        <li style="margin-bottom: 12px;"><strong>Evening</strong> — Dinner with a mountain view</li>
        <li style="margin-bottom: 12px;"><strong>Later</strong> — Airport transfer</li>
      </ul>
    `,
    highlights: [
      "Scenic return to Bishkek",
      "Local food stop",
      "Arrive in Bishkek",
      "Dinner with a view",
      "Airport transfer"
    ],
    stats: { distance: "—", duration: "Half / Full day", accommodation: "—" },
    difficulty: { physical: 1, cultural: 2, photography: 3 },
    images: [
      "../assets/kattama-view.jpg",
      "../assets/mountain-view-bishkek.jpg",
      "../assets/mountain-view-bishkek-pool.jpg",
      "../assets/manas-international-airport.jpeg"
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
