function updateMenuTop() {
  const nav = document.querySelector('nav');
  const navLinks = document.getElementById('nav-links');
  if (!navLinks) return;
  
  const navBottom = nav.getBoundingClientRect().bottom;
  navLinks.style.top = navBottom + 'px';
  navLinks.style.height = `calc(100vh - ${navBottom}px)`;
}

const menuBtn = document.getElementById('menu-btn');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    updateMenuTop();
    const navLinks = document.getElementById('nav-links');
    const icon = document.querySelector('#menu-btn i');
    
    navLinks.classList.toggle('open');
    
    if (navLinks.classList.contains('open')) {
      icon.classList.remove('ri-menu-3-fill');
      icon.classList.add('ri-close-line');
    } else {
      icon.classList.remove('ri-close-line');
      icon.classList.add('ri-menu-3-fill');
    }
  });
}

window.addEventListener('scroll', () => {
  const navLinks = document.getElementById('nav-links');
  if (navLinks && navLinks.classList.contains('open')) {
    updateMenuTop();
  }
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

const dropdown = document.querySelector(".dropdown");
if (dropdown) {
  const toggle = dropdown.querySelector(".dropdown__toggle");
  toggle.addEventListener("click", () => dropdown.classList.toggle("active"));
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) dropdown.classList.remove("active");
  });
}

function openModal(tourName) {
  const input = document.querySelector('input[name="tour_name"]');
  if (input) input.value = tourName || '';
  const modal = document.getElementById("bookingModal");
  if (modal) modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  const wa = document.getElementById("waWidget");
  if (wa) wa.style.display = 'none';
}

function closeModal() {
  const modal = document.getElementById("bookingModal");
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
  const wa = document.getElementById("waWidget");
  if (wa) wa.style.display = 'flex';
}

function toggleWA() {
  const popup = document.getElementById('waPopup');
  if (popup) popup.classList.toggle('open');
}

document.addEventListener('click', e => {
  const widget = document.getElementById('waWidget');
  if (widget && !widget.contains(e.target)) {
    document.getElementById('waPopup').classList.remove('open');
  }
});
