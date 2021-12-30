const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('toggle-menu'),
  CloseMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show')
})

navMenu.addEventListener('click', () => {
  navMenu.classList.remove('show')
})

// É necessário colocar o nav como addEventListener, pois quando for clicado nele, feche o menuResponsivo.

/******************************
 ****** Slide  *******
 ******************************/

const swiper = new Swiper('.home .swiper', {
  // spaceBetween: 30,
  speed: 900,
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 2500
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

const slide = new Swiper('.lancamentos', {
  grabCursor: true,
  spaceBetween: 15,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3500
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    850: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    },
    1700: {
      slidesPerView: 3
    },
    1990: {
      slidesPerView: 4
    }
  }
})

/******************************
 ****** Página Principal *******
 ******************************/

ScrollReveal({
  reset: false /*Caso queira que a animação do scroll fique tanto na descida quanto na subida, trocar para true */,
  distance: '60px',
  duration: 2500,
  delay: 400
})

ScrollReveal().reveal('.info_detalhes', {
  delay: 100,
  origin: 'left'
})

ScrollReveal().reveal('.title-section, .sub-title', {
  delay: 100,
  origin: 'top',
  interval: 100
})

ScrollReveal().reveal('.produtos, .animation, .mapa', {
  delay: 300,
  origin: 'left',
  interval: 100
})

ScrollReveal().reveal('.links, .accordion-item', {
  delay: 600,
  origin: 'top',
  interval: 100
})

ScrollReveal().reveal('.accordion-item, .anim_footer, .box_footer_img', {
  delay: 400,
  origin: 'top',
  interval: 100
})

ScrollReveal().reveal(' .transicao_title, .transicao_icons', {
  delay: 400,
  origin: 'left',
  interval: 100
})



/******************************
 ****** Página Detalhes *******
 ******************************/

ScrollReveal().reveal('.descricao', {
  delay: 600,
  origin: 'left',
  interval: 100
})

ScrollReveal().reveal('.container-img', {
  delay: 600,
  origin: 'left',
  interval: 100
})

/*************************************************************************
**************************************************************************
                Transição do Navbar
**************************************************************************
**************************************************************************
*/

window.addEventListener('scroll', function () {
  var header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 740)

  /*  Ativar caso queria que tenha uma transição de cor do navbar do Header para o Main */
})
