var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

let body = document.querySelector('body');

const burger = document.querySelector('.header__burger');

burger.addEventListener('click', function(event) {
    burger.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('.header').classList.toggle('active')
    // if (body.classList.contains('touch')) {
        // body.classList.toggle('lock');
    // }

});

window.addEventListener('scroll', function(e) {
    let header = body.querySelector('.header');
    if (this.window.scrollY !== 0) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll')
    }
})

const sliders = document.querySelectorAll('.slider');

for (let slider of sliders) {
    slider.addEventListener('click', function(event) {
        if (event.target.closest('.slider__title')) {
            this.classList.toggle('active');
        }
    })
}
// if (isMobile.any()) {
//     body.classList.add('touch');
//     let arrow = document.querySelectorAll('.arrow');
    
//     for (let i = 0; i < arrow.length; i++) {
//         let thisLink = arrow[i].previousElementSibling;
//         let subMenu = arrow[i].nextElementSibling;
//         let thisArrow = arrow[i];

//         thisLink.classList.add('parent');

//         arrow[i].addEventListener('click', function() {
//             subMenu.classList.toggle('open');
//             thisArrow.classList.toggle('active');
//         })
//     }
// } else {
//     body.classList.add('mouse');
// }

// // if (!isMobile.any()) {
// //     let header = document.querySelector('.header__menu');

// //     let arrowHeader = header.querySelectorAll('.arrow');

// //     for (let i = 0; i < arrowHeader.length; i++) {
// //         let thisLink = arrowHeader[i].previousElementSibling;
// //         let subMenu = arrowHeader[i].nextElementSibling;
// //         let thisArrow = arrowHeader[i];

// //         thisLink.classList.add('parent');
// //         arrowHeader[i].addEventListener('click', function() {
// //             subMenu.classList.toggle('open');
// //             thisArrow.classList.toggle('active');
// //         })
// //     }
// // }

const swiper = new Swiper('.swiper', {
    loop: true,
    effect: 'coverflow',
    simulateTouch: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerGroup: 1,
    breakpoints: {
        767: {
            slidesPerView: 2,
            effect: 'slide',
            spaceBetween: 20,
            coverflowEffect: {
                slideShadows: false,
            },
            slidesPerGroup: 2,
        },
        320: {
            slidesPerView: 1,   
            slidesPerGroup: 1,
            effect: 'slide',
            centeredSlides: true,
            centerInsufficientSlides: true,
            freeMode: {
                enabled: false,
            },
            coverflowEffect: {
                slideShadows: false,
            },
            spaceBetween: 100,
        },
        1296: {
            slidesPerView: 3,
            coverflowEffect: {
                rotate: 0,
                stretch: -40,
                slideShadows: true,
            },
            slidesPerGroup: 1,
        },
    },
    freeMode: {
        enabled: true,
        sticky: true,
    },
    autoplay: {
        delay: 1000,
      },
    
  });