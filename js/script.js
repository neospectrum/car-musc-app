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
        if (document.querySelector('.slider.active') !== null && document.querySelector('.slider.active') !== slider) {
            document.querySelector('.slider.active').classList.toggle('active') 
        };

            if (event.target.closest('.slider__title')) {
                this.classList.toggle('active');
            };
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

const swiper = new Swiper('.swiper-block', {
    loop: true,
    simulateTouch: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        320: {
            slidesPerView: 1,
            navigation: {
                enabled: false,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
                disabled: false,
              },
        },
        992: {
            navigation: {
                enabled: true,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                enabled: false,
              },
            slidesPerView: 2,
        },
        1296: {
            slidesPerView: 3,
        },      
    },
    
  });