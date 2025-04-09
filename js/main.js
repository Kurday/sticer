const swiper = new Swiper('.main__swiper', {
    loop: true,
    slidesPerView: 1, 
    spaceBetween: 0,
    speed: 500,
    autoplay: {
      delay: 2500, // Задержка между слайдами (мс)
      disableOnInteraction: false, // Продолжать после взаимодействия
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const swiper2 = new Swiper('.photo__swiper', {
    loop: true,
    slidesPerView: 3, 
    spaceBetween: 20,
    speed: 500,
    autoplay: {
      delay: 2500, // Задержка между слайдами (мс)
      disableOnInteraction: false, // Продолжать после взаимодействия
    },
    pagination: {
      el: '.swiper-wrapper-pagination',
      clickable: true,
    },
  });



  document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger-btn');
    const headerNav = document.querySelector('.header__nav');
    
    burgerBtn.addEventListener('click', function() {
        const isActive = this.classList.toggle('active');
        this.setAttribute('aria-expanded', isActive);
        if (headerNav) headerNav.classList.toggle('active');
    });
    
    // Закрытие при клике вне меню
    document.addEventListener('click', function(e) {
        if (burgerBtn.classList.contains('active') && 
            !e.target.closest('.burger-btn') && 
            !e.target.closest('.header__nav')) {
            burgerBtn.classList.remove('active');
            burgerBtn.setAttribute('aria-expanded', 'false');
            if (headerNav) headerNav.classList.remove('active');
        }
    });
});
