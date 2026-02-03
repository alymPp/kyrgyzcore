const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');
const cards = document.querySelectorAll('.destination__card');
const tags = document.querySelectorAll('.tag');
const carouselContainer = document.querySelector('.carousel-container');

let currentSlide = 0;
let slidesPerView = 4;
let autoplayInterval = null;
let activeTag = 'all';
let visibleCards = Array.from(cards);

// ===== MOBILE CHECK =====
function isMobileDevice() {
  return window.innerWidth <= 768;
}

// ===== CLONE FOR INFINITE =====
function cloneCards() {
  track.querySelectorAll('.clone').forEach(c => c.remove());

  const arr = [...visibleCards];
  arr.forEach(card => {
    const c = card.cloneNode(true);
    c.classList.add('clone');
    track.appendChild(c);
  });

  arr.reverse().forEach(card => {
    const c = card.cloneNode(true);
    c.classList.add('clone');
    track.insertBefore(c, track.firstChild);
  });

  const w = visibleCards[0].offsetWidth + 20;
  track.style.transition = 'none';
  track.style.transform = `translateX(-${arr.length * w}px)`;
}

// ===== SLIDES PER VIEW =====
function updateSlidesPerView() {
  slidesPerView =
    window.innerWidth > 1200 ? 4 :
    window.innerWidth > 1024 ? 3 :
    window.innerWidth > 768 ? 2 : 1;

  if (activeTag === 'all') cloneCards();
  createDots();
  updateCarousel(false);
}

// ===== DOTS =====
function createDots() {
  dotsContainer.innerHTML = '';
  visibleCards.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle(
      'active',
      i === ((currentSlide % visibleCards.length + visibleCards.length) % visibleCards.length)
    );
  });
}

// ===== MOVE =====
function updateCarousel(transition = true) {
  if (!visibleCards.length) return;

  const w = visibleCards[0].offsetWidth + 20;
  const offset = activeTag === 'all' ? visibleCards.length * w : 0;

  track.style.transition = transition ? 'transform .4s ease' : 'none';
  track.style.transform = `translateX(-${offset + currentSlide * w}px)`;
  updateDots();
}

function goToSlide(i) {
  currentSlide = i;
  updateCarousel();
}

// ===== NEXT / PREV =====
function nextSlide() {
  if (activeTag !== 'all') return;

  currentSlide++;
  updateCarousel();

  if (currentSlide >= visibleCards.length) {
    setTimeout(() => {
      currentSlide = 0;
      updateCarousel(false);
    }, 400);
  }
}

function prevSlide() {
  if (activeTag !== 'all') return;

  currentSlide--;
  updateCarousel();

  if (currentSlide < 0) {
    setTimeout(() => {
      currentSlide = visibleCards.length - 1;
      updateCarousel(false);
    }, 400);
  }
}

// ===== AUTOPLAY (DESKTOP ONLY) =====
function startAutoplay() {
  stopAutoplay();
  if (isMobileDevice()) return;
  autoplayInterval = setInterval(nextSlide, 4000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = null;
}

// ===== FILTER =====
function filterCards(tag) {
  activeTag = tag;
  currentSlide = 0;
  visibleCards = [];

  cards.forEach(card => {
    const match =
      tag === 'all' || card.dataset.tags?.split(',').includes(tag);
    card.style.display = match ? 'block' : 'none';
    if (match) visibleCards.push(card);
  });

  track.querySelectorAll('.clone').forEach(c => c.remove());
  if (tag === 'all') cloneCards();

  createDots();
  updateCarousel(false);
  stopAutoplay();
  if (!isMobileDevice() && tag === 'all') startAutoplay();
}

// ===== SWIPE =====
let startX = 0, currentX = 0, dragging = false, startPos = 0;

track.addEventListener('pointerdown', e => {
  dragging = true;
  startX = e.clientX;
  startPos = track.getBoundingClientRect().left;
  track.style.transition = 'none';
  stopAutoplay();
});

track.addEventListener('pointermove', e => {
  if (!dragging) return;
  currentX = e.clientX;
  track.style.transform = `translateX(${startPos + currentX - startX}px)`;
});

track.addEventListener('pointerup', () => {
  if (!dragging) return;
  dragging = false;
  Math.abs(currentX - startX) > 60
    ? currentX > startX ? prevSlide() : nextSlide()
    : updateCarousel();
  if (!isMobileDevice() && activeTag === 'all') startAutoplay();
});

// ===== EVENTS =====
prevBtn.onclick = () => { prevSlide(); startAutoplay(); };
nextBtn.onclick = () => { nextSlide(); startAutoplay(); };

tags.forEach(t =>
  t.onclick = () => {
    tags.forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    filterCards(t.dataset.tag);
  }
);

carouselContainer.addEventListener('mouseenter', () => !isMobileDevice() && stopAutoplay());
carouselContainer.addEventListener('mouseleave', () => !isMobileDevice() && startAutoplay());

window.addEventListener('resize', () => {
  updateSlidesPerView();
  stopAutoplay();
  if (!isMobileDevice() && activeTag === 'all') startAutoplay();
});

document.addEventListener('visibilitychange', () => {
  document.hidden || isMobileDevice() ? stopAutoplay() : startAutoplay();
});

// ===== INIT =====
cloneCards();
updateSlidesPerView();
if (!isMobileDevice()) startAutoplay();
