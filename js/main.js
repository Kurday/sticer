const swiper = new Swiper('.main__swiper', {
    loop: true,
    slidesPerView: 1, 
    spaceBetween: 0,
    speed: 2400,
    parallax:true,
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
      delay: 2500, 
      disableOnInteraction: false, 
    },
    pagination: {
      el: '.photo-swiper-pagination',
      clickable: true,
    },
  });

// МЕНЮ БУРГЕР

  document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger-btn');
    const headerNav = document.querySelector('.header__nav');
    
    burgerBtn.addEventListener('click', function() {
        const isActive = this.classList.toggle('active');
        this.setAttribute('aria-expanded', isActive);
        if (headerNav) headerNav.classList.toggle('active');
        document.body.style.overflow = isActive ? 'hidden' : '';
    });
    
    // Закрытие при клике вне меню
    document.addEventListener('click', function(e) {
        if (burgerBtn.classList.contains('active') && 
            !e.target.closest('.burger-btn') && 
            !e.target.closest('.header__nav')) {
            burgerBtn.classList.remove('active');
            burgerBtn.setAttribute('aria-expanded', 'false');
            if (headerNav) headerNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});


// аккордеон часто задаваемые вопросы 


const questions = document.querySelectorAll('.question');

questions.forEach((item) => {
    item.addEventListener('click', () => {
        const currentItem = item.parentElement;

        document.querySelectorAll('.questions__item').forEach((el) => {
            if (el !== currentItem) {
                el.classList.remove('active');
                el.querySelector('.answer').style.maxHeight = null;
            }
        });

        const answer = currentItem.querySelector('.answer');
        const isActive = currentItem.classList.contains('active');

        if (isActive) {
            // Закрыть
            currentItem.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            // Открыть
            currentItem.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// __________________________________________________________________________
// КАЛЬКУЛЯТОР БЛОКИ С КАСТОМНЫМИ ЗНАЧЕНИЯМИ

function toggleCustomInput(show) {
  const customInputContainer = document.getElementById('customInputContainer');
  const qtyCustomLabel = document.getElementById('custom_qty_label');
  
  if (show) {
    customInputContainer.style.display = 'block';
    qtyCustomLabel.style.display = 'none';
  } else {
    customInputContainer.style.display = 'none';
    qtyCustomLabel.style.display = 'block';
  }
}
// Скрыть/показать поле при смене радио кнопок
document.querySelectorAll('input[name="quantity"]').forEach(el => {
  el.addEventListener('change', function () {
    toggleCustomInput(this.value === 'custom');
  });
});




function toggleCustomSizeInput(show) {
 console.log('log');
 const customSizeLabel = document.getElementById('customSizeLabel');
 const customSizeInput = document.getElementById('customSizeInput');

  if(show)
  {
    customSizeLabel.style.display = 'none'
    customSizeInput.style.display = 'block'
  }  
  else 
  {
    customSizeLabel.style.display = 'block'
    customSizeInput.style.display = 'none'
  }
  
 
}

document.querySelectorAll('input[name="size"]').forEach(el => {
  el.addEventListener('change', function () {
    toggleCustomSizeInput(this.value === 'custom');
  });
});




window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  if (header) {
    const headerHeight = header.offsetHeight;
    document.body.style.paddingTop = `${headerHeight}px`;
  }
});

// __________________________________________________________________________

// паралакс
/**
 * Инициализирует параллакс-эффект для указанного элемента
 * @param {string} selector - CSS-селектор элемента
 * @param {number} [intensity=0.03] - Сила эффекта (рекомендуется 0.01-0.05)
 */
function initMouseParallax(selector, intensity = 0.03) {
  const section = document.querySelector(selector);
  if (!section) return;

  // Создаем CSS-переменные если их нет
  section.style.setProperty('--parallax-x', '0');
  section.style.setProperty('--parallax-y', '0');

  // Добавляем необходимые CSS-стили
  const style = document.createElement('style');
  style.textContent = `
    ${selector}::before {
      transform: translate(
        calc(var(--parallax-x, 0) * 1),
        calc(var(--parallax-y, 0) * 1)
      );
    }
  `;
  document.head.appendChild(style);

  // Обработчик движения мыши
  section.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1..1
    const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1..1
    
    section.style.setProperty('--parallax-x', `${x * intensity * 100}%`);
    section.style.setProperty('--parallax-y', `${y * intensity * 100}%`);
  });
}

// Инициализация для нужных элементов
document.addEventListener('DOMContentLoaded', () => {
  initMouseParallax('.registration', 0.03);  // Эффект для регистрации
  initMouseParallax('.authorization', 0.02); // Эффект для авторизации 
  initMouseParallax('.cart', 0.02); // Эффект для корзины 
});






