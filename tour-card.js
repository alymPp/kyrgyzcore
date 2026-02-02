(() => {
  const journeyCards = document.querySelectorAll('.journey-card');
  const journeyProgressBar = document.querySelector('.progress-bar');
  let currentActiveJourney = 0;

  if (!journeyCards.length || !journeyProgressBar) return;

  function updateJourneyCards(activeIndex) {
    journeyCards.forEach((card, index) => {
      card.classList.toggle('small', index !== activeIndex);
    });

    const percentage = (activeIndex / (journeyCards.length - 1)) * 100;

    journeyProgressBar.style.width =
      `${33.33 + (percentage * 33.33) / 100}%`;

    journeyProgressBar.style.left =
      `${(activeIndex / journeyCards.length) * 100}%`;
  }

  journeyCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
      if (window.innerWidth > 900) {
        currentActiveJourney = index;
        updateJourneyCards(index);
      }
    });
  });

  updateJourneyCards(0);
})();
