'use strict';

{
  /* ----------- Humburger Menu ------------*/
  const open = document.getElementById('open');
  const modal = document.getElementById('modal');
  const close = document.getElementById('close');
  const menu = document.querySelector('nav ul');
  
  open.addEventListener('click', () => {
    open.classList.add('hidden');
    modal.classList.add('appear');
    menu.classList.add('appear');
    close.classList.add('appear');
  });

  close.addEventListener('click', () => {
    open.classList.remove('hidden');
    modal.classList.remove('appear');
    menu.classList.remove('appear');
    close.classList.remove('appear');
  });

  modal.addEventListener('click', () => {
    close.click();
  });

  menu.addEventListener('click', () => {
    close.click();
  });

  /* ----------- to_top Scroll ------------*/
  function callback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        toTop.classList.add('show');
      } else {
        toTop.classList.remove('show');
      }
    });
  }

  const target = document.getElementById('target');
  const toTop = document.getElementById('to_top');

  const observer = new IntersectionObserver(callback);
  observer.observe(target);

  toTop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  /* ----------- #works img ------------*/
  function imgCallback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } 
        entry.target.classList.add('appear');
        obs.unobserve(entry.target);
    });
  }

  const targets = document.querySelectorAll('#works img');

  const imgObserver = new IntersectionObserver (imgCallback, {threshold: 0.1,});
  targets.forEach(target => {
    imgObserver.observe(target);
  });

}