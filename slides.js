const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');
const cards = document.querySelectorAll('.destination__card');
const tags = document.querySelectorAll('.tag');

let currentSlide = 0;
let slidesPerView = 4;
let autoplayInterval;
let activeTag = 'all';
let visibleCards = Array.from(cards);

// Переменные для свайпа
let startX = 0;
let currentX = 0;
let isDragging = false;
let startPos = 0;

function cloneCards() {
  const clones = track.querySelectorAll('.clone');
  clones.forEach(clone => clone.remove());
  
  const visibleCardsArray = Array.from(visibleCards);
  
  visibleCardsArray.forEach(card => {
    const clone = card.cloneNode(true);
    clone.classList.add('clone');
    track.appendChild(clone);
  });
  
  visibleCardsArray.reverse().forEach(card => {
    const clone = card.cloneNode(true);
    clone.classList.add('clone');
    track.insertBefore(clone, track.firstChild);
  });
  
  const cardWidth = visibleCards[0].offsetWidth;
  const gap = 20;
  const offset = visibleCardsArray.length * (cardWidth + gap);
  track.style.transition = 'none';
  track.style.transform = `translateX(-${offset}px)`;
}

function updateSlidesPerView() {
  if (window.innerWidth > 1200) {
    slidesPerView = 4;
  } else if (window.innerWidth > 1024) {
    slidesPerView = 3;
  } else if (window.innerWidth > 768) {
    slidesPerView = 2;
  } else {
    slidesPerView = 1;
  }
  
  if (activeTag === 'all') {
    cloneCards();
  }
  
  createDots();
  updateCarousel();
}

function createDots() {
  dotsContainer.innerHTML = '';
  const totalSlides = visibleCards.length;
  if (totalSlides <= 0) return;
  
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
}

function updateCarousel(withTransition = true) {
  if (visibleCards.length === 0) {
    track.style.transform = 'translateX(0)';
    return;
  }
  
  const cardWidth = visibleCards[0].offsetWidth;
  const gap = 20;
  const initialOffset = activeTag === 'all' ? visibleCards.length * (cardWidth + gap) : 0;
  const moveDistance = initialOffset + (currentSlide * (cardWidth + gap));
  
  if (withTransition) {
    track.style.transition = 'transform 0.5s ease-in-out';
  } else {
    track.style.transition = 'none';
  }
  
  track.style.transform = `translateX(-${moveDistance}px)`;
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  const actualIndex = ((currentSlide % visibleCards.length) + visibleCards.length) % visibleCards.length;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === actualIndex);
  });
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
  if (activeTag === 'all') {
    startAutoplay();
  }
}

function nextSlide() {
  if (activeTag === 'all') {
    currentSlide++;
    updateCarousel(true);
    
    if (currentSlide >= visibleCards.length) {
      setTimeout(() => {
        currentSlide = 0;
        updateCarousel(false);
      }, 500);
    }
  } else {
    const maxSlide = visibleCards.length - slidesPerView;
    if (maxSlide <= 0) return;
    
    if (currentSlide < maxSlide) {
      currentSlide++;
      updateCarousel();
    } else {
      stopAutoplay();
    }
  }
}

function prevSlide() {
  if (activeTag === 'all') {
    currentSlide--;
    updateCarousel(true);
    
    if (currentSlide < 0) {
      setTimeout(() => {
        currentSlide = visibleCards.length - 1;
        updateCarousel(false);
      }, 500);
    }
  } else {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  }
}

function startAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = setInterval(nextSlide, 4000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

function filterCards(tag) {
  activeTag = tag;
  currentSlide = 0;
  
  visibleCards = [];
  
  cards.forEach(card => {
    if (tag === 'all') {
      card.style.display = 'block';
      visibleCards.push(card);
    } else {
      const cardTags = card.getAttribute('data-tags');
      if (cardTags && cardTags.split(',').includes(tag)) {
        card.style.display = 'block';
        visibleCards.push(card);
      } else {
        card.style.display = 'none';
      }
    }
  });
  
  const clones = track.querySelectorAll('.clone');
  clones.forEach(clone => clone.remove());
  
  if (tag === 'all') {
    cloneCards();
  } else {
    track.style.transition = 'none';
    track.style.transform = 'translateX(0)';
  }
  
  createDots();
  updateCarousel(false);
  
  if (tag === 'all') {
    startAutoplay();
  } else {
    stopAutoplay();
  }
}

// Свайп функционал
function handleDragStart(e) {
  isDragging = true;
  startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  
  const cardWidth = visibleCards[0].offsetWidth;
  const gap = 20;
  const initialOffset = activeTag === 'all' ? visibleCards.length * (cardWidth + gap) : 0;
  startPos = initialOffset + (currentSlide * (cardWidth + gap));
  
  track.style.transition = 'none';
  stopAutoplay();
}

function handleDragMove(e) {
  if (!isDragging) return;
  e.preventDefault();
  
  currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  const diff = currentX - startX;
  
  track.style.transform = `translateX(-${startPos - diff}px)`;
}

function handleDragEnd(e) {
  if (!isDragging) return;
  isDragging = false;
  
  const diff = currentX - startX;
  const threshold = 50;
  
  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      prevSlide();
    } else {
      nextSlide();
    }
  } else {
    updateCarousel();
  }
  
  if (activeTag === 'all') {
    startAutoplay();
  }
}

// События для мыши
track.addEventListener('mousedown', handleDragStart);
track.addEventListener('mousemove', handleDragMove);
track.addEventListener('mouseup', handleDragEnd);
track.addEventListener('mouseleave', handleDragEnd);

// События для тачскрина
track.addEventListener('touchstart', handleDragStart, { passive: true });
track.addEventListener('touchmove', handleDragMove, { passive: false });
track.addEventListener('touchend', handleDragEnd);

tags.forEach(tag => {
  tag.addEventListener('click', (e) => {
    tags.forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    filterCards(tag.getAttribute('data-tag'));
  });
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  if (activeTag === 'all') {
    startAutoplay();
  }
});

nextBtn.addEventListener('click', () => {
  nextSlide();
  if (activeTag === 'all') {
    startAutoplay();
  }
});

window.addEventListener('resize', updateSlidesPerView);

cloneCards();
updateSlidesPerView();
startAutoplay();

const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.addEventListener('mouseenter', () => {
  stopAutoplay();
});


