'use strict';

{
/* Modal Window */
const open = document.getElementById('open');
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  mask.classList.remove('hidden');
  modal.classList.remove('hidden');
  close.classList.remove('hidden');
  open.classList.add('hidden');
});

close.addEventListener('click', () => {
  mask.classList.add('hidden');
  modal.classList.add('hidden');
  close.classList.add('hidden');
  open.classList.remove('hidden');
});

mask.addEventListener('click', () => {
  mask.classList.add('hidden');
  modal.classList.add('hidden');
  close.classList.add('hidden');
  open.classList.remove('hidden');
  // close.click();
});

/* スライドショー */
function play() {
  setTimeout(() => {
    images[currentIndex].classList.remove('current');
    currentIndex++;
    if (currentIndex > images.length - 1) {
      currentIndex = 0;
    }
    images[currentIndex].classList.add('current');
    play();
  }, 5000);
}
const images = document.querySelectorAll('.slick-area img');
let currentIndex = 0;

play();

/* Intersection Observer API */
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.3,
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.animate');

  targets.forEach(target => {
    observer.observe(target);
  });
}

