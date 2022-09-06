'use strict';

{ 
  /* Intersection Observer API */
  function Callback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        modal.classList.add('appear');
        menu.classList.add('appear');
      } else {
        modal.classList.remove('appear');
        menu.classList.remove('appear');
      }
    });
  }

  const menu = document.querySelector('.menu');
  const modal = document.getElementById('modal');

  const Observer = new IntersectionObserver(Callback);
  Observer.observe(document.getElementById('target'));


  /* Humburger Menu */
  const open = document.getElementById('open');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    menu.classList.add('show');
    open.classList.add('hidden');
    close.classList.add('show');
  });

  close.addEventListener('click', () => {
    menu.classList.remove('show');
    open.classList.remove('hidden');
    close.classList.remove('show');
  });

}