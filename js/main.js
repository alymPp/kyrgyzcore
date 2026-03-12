function updateMenuTop() {
  const nav = document.querySelector('nav');
  const navLinks = document.getElementById('nav-links');
  if (!navLinks) return;
  
  const navBottom = nav.getBoundingClientRect().bottom;
  navLinks.style.top = navBottom + 'px';
  navLinks.style.height = `calc(100vh - ${navBottom}px)`;
}

document.getElementById('menu-btn').addEventListener('click', () => {
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

window.addEventListener('scroll', () => {
  if (document.getElementById('nav-links').classList.contains('open')) {
    updateMenuTop();
  }
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

// Dropdown (только если есть на странице)
const dropdown = document.querySelector(".dropdown");
if (dropdown) {
  const toggle = dropdown.querySelector(".dropdown__toggle");
  toggle.addEventListener("click", () => dropdown.classList.toggle("active"));
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) dropdown.classList.remove("active");
  });
}

function openModal(tourName) {
  document.querySelector('input[name="tour_name"]').value = tourName || '';
  document.getElementById("bookingModal").classList.add('active');
  document.body.style.overflow = 'hidden';
  document.getElementById("waWidget").style.display = 'none';
}

function closeModal() {
  document.getElementById("bookingModal").classList.remove('active');
  document.body.style.overflow = '';
  document.getElementById("waWidget").style.display = 'flex';
}

function toggleWA() {
  document.getElementById('waPopup').classList.toggle('open');
}

document.addEventListener('click', e => {
  const widget = document.getElementById('waWidget');
  if (!widget.contains(e.target)) {
    document.getElementById('waPopup').classList.remove('open');
  }
});
