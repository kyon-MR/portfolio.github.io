'use strict';

{
  /* Accordion UI */
  const dts = document.querySelectorAll('.consul dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');

    dts.forEach(el => {
      if (dt !== el) {
       el.parentNode.classList.remove('appear');
        }
      });
    });
  });


  /* FAQ Accordion UI */
  const faqDts = document.querySelectorAll('.faq dt');
  faqDts.forEach(faqDt => {
    faqDt.addEventListener('click', () => {
      faqDt.parentNode.classList.toggle('appear');

    faqDts.forEach(el => {
      if (faqDt !== el) {
        el.parentNode.classList.remove('appear');
        }
        });
      });
    });


    /* triangle scroll */
  function callback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        button.classList.add('show');
      } else {
        button.classList.remove('show');
      }
    });
  }

  const button = document.getElementById('triangle');

  const observer = new IntersectionObserver(callback);
  observer.observe(document.getElementById('target'));

  button.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}