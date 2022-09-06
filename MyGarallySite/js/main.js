'use strict';

{
  /* Modal Window */
  const open = document.getElementById('open');
  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    open.classList.add('hidden');
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    close.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    open.classList.remove('hidden');
    mask.classList.add('hidden');
    modal.classList.add('hidden');
    close.classList.add('hidden');
  });

  /* Animation */
  function inViewCallback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  function onScrollCallback(entries, ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('show');
      } else {
        header.classList.remove('show');
      }
    });
  }

  const header = document.querySelector('header');
  const mainvisual = document.getElementById('mainvisual');

  const inViewObserver = new IntersectionObserver(inViewCallback, {
    threshold: 0.2,
  });

  document.querySelectorAll('.animate').forEach(el => {
    inViewObserver.observe(el);
  });

  const onScrollObserver = new IntersectionObserver(onScrollCallback);
    onScrollObserver.observe(mainvisual);

  
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

  const images = document.querySelectorAll('#mainvisual img');
  let currentIndex = 0;

  play();
}