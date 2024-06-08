const cards = document.querySelectorAll('.card');

function observeCards() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.fade-in').forEach((element) => {
          element.classList.add('animate');
        });
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  });

  cards.forEach((card) => {
    observer.observe(card);
  });
}

observeCards();
