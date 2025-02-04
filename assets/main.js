document.addEventListener('DOMContentLoaded', () => {

    $('#language_select').niceSelect()
    $('#region_select').niceSelect()

    if (document.querySelectorAll('[data-fancybox]').length) {
        Fancybox.bind('[data-fancybox]', {
        });
    }

    $('.regions_list li').on('click', function () {
        // Klik qilingan elementning indeksini olish
        let index = $(this).index();

        // Barcha li elementlardan active klassini olib tashlash
        $('.regions_list li').removeClass('active');

        // Hozirgi elementga active klassini qo'shish
        $(this).addClass('active');

        // Barcha region_item dan active klassini olib tashlash
        $('.regions_wrap .region_item').removeClass('active');

        // Indeksga mos region_item ga active klassini qo'shish
        $('.regions_wrap .region_item').eq(index).addClass('active');
    });

    $('.map_section .nice-select .option').on('click', function () {
        // Tanlangan elementning indeksini olish
        let index = $(this).index();

        // Barcha li elementlardan active klassini olib tashlash
        $('.regions_list li').removeClass('active');

        // Indeksga mos li elementga active klassini qo'shish
        $('.regions_list li').eq(index).addClass('active');

        // Barcha region_item dan active klassini olib tashlash
        $('.regions_wrap .region_item').removeClass('active');

        // Indeksga mos region_item ga active klassini qo'shish
        $('.regions_wrap .region_item').eq(index).addClass('active');

        // .nice-select ni yangilash
        $('.nice-select .option').removeClass('selected');
        $(this).addClass('selected');
        const selectedText = $(this).text();
        $('.nice-select .current').text(selectedText);
    });

    const swiper = new Swiper('.review_swiper', {
        loop: true,
        spaceBetween: 243,
        slidesPerView: 'auto',
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: '.review_wrap .next_btn',
        },
        autoplay: {
            delay: 10000,
            disableOnInteraction: false
        },
        breakpoints: {
            1500: {
                spaceBetween: 243,
            },
            1200: {
                spaceBetween: 100,
            },
            992: {
                spaceBetween: 100,
            },
            768: {
                spaceBetween: 100,
            },
            0: {
                spaceBetween: 50,
            },
        },
        on: {
            slideChange: () => {
                const svgCircle = document.querySelector('.review_swiper .next_btn svg circle');
                if (svgCircle) {
                    svgCircle.style.animation = 'none';
                    setTimeout(() => {
                        svgCircle.style.animation = '';
                    }, 10);
                }
            },
        },
    });
    const swiper2 = new Swiper('.blog_swiper', {
        loop: true,
        spaceBetween: 92,
        slidesPerView: 'auto',
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: '.blog_swiper .next_btn',
        },
        // autoplay: {
        //     delay: 10000,
        //     disableOnInteraction: false
        // },
        breakpoints: {
            1500: {
                spaceBetween: 92,
            },
            992: {
                spaceBetween: 50,
            },
            768: {
                spaceBetween: 50,
            },
            0: {
                spaceBetween: 20,
            },
        },
        on: {
            slideChange: () => {
                const svgCircle = document.querySelector('.blog_swiper .next_btn svg circle');
                if (svgCircle) {
                    svgCircle.style.animation = 'none';
                    setTimeout(() => {
                        svgCircle.style.animation = '';
                    }, 10);
                }
            },
        },
    });

    $('.review_item .read_more').click(function () {
        $(this).siblings('.description_main').addClass('show')
        $(this).addClass('d-none')
    })

    const phoneInput = document.getElementById('phone');
    if ($('#phone').length) {
        const im = new Inputmask("+7 (999) - 999 - 99 - 99");
        im.mask(phoneInput);
    }

    $('.blog_tabs div').click(function () {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')

        let i = $(this).index()

        $('.blog_swiper').removeClass('active')
        $('.blog_swiper').eq(i).addClass('active');
    })

    $('.hamburger').click(function () {
        $('.header_right').addClass('open')
    })
    $('.close_icon').click(function () {
        $('.header_right').removeClass('open')
    })

    function updateActiveSlideMargin(swiperInstance) {
        if($(window).width() > 1700){
            const slides = swiperInstance.slides;
            slides.forEach((slide) => {
                slide.style.marginRight = '40px';
            });

            const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
            if (activeSlide) {
                activeSlide.style.marginRight = '243px';
            }
        }
    }

    const swiper3 = new Swiper('.product_swiper', {
        loop: true,
        spaceBetween: 40,
        slidesPerView: 'auto',
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: '.product_swiper_wrap .next_btn',
        },
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1500: {
                spaceBetween: 40,
            },
            1200: {
                spaceBetween: 40,
            },
            992: {
                spaceBetween: 40,
            },
            768: {
                spaceBetween: 40,
            },
            0: {
                spaceBetween: 40,
            },
        },
        on: {
            init: function () {
                updateActiveSlideMargin(this);
            },
            slideChange: function () {
                updateActiveSlideMargin(this);
            },
        },
    });
    const swiper4 = new Swiper('.product_swiper2', {
        slidesPerView: 'auto',
        spaceBetween: 42,
        loop: true,
        breakpoints: {
            1700: {
                slidesPerView: 'auto',
            },
            1200: {
                spaceBetween: 42,
            },
            768: {
                spaceBetween: 40,
            },
            0: {
                spaceBetween: 20,
            },
        },
    });
    const swiper5 = new Swiper('.hero_swiper', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: true,
    });

    $('.faq_item .faq_top').click(function(){
        $(this).parent().toggleClass('open')
        $(this).parent().siblings().removeClass('open')
    })

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 284) {
            $('header.fixed').addClass('active');
        }
        else if($(this).scrollTop() < 1) {
            $('header.fixed').removeClass('active');
        }
    });

    $('.options_tab').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')

        $('.options_body .options_row').toggleClass('active')
        if($('.option_content').length){
            id = $(this).index()
            $('.option_content').removeClass('active')
            $('.option_content').eq(id).addClass('active');
        }
    })

    const swiper6 = new Swiper('.gallery_swiper', {
        slidesPerView: 'auto',
        spaceBetween: 80,
        loop: true,
        navigation: {
            nextEl: '.gallery_swiper .next_btn',
            prevEl: '.gallery_swiper .prev_btn',
        },
        autoplay: {
            delay: 10000,
            disableOnInteraction: false
        },
        breakpoints: {
            1500: {
                spaceBetween: 80,
            },
            992: {
                spaceBetween: 50,
            },
            768: {
                spaceBetween: 30,
            },
            0: {
                spaceBetween: 20,
            },
        },
        on: {
            slideChange: () => {
                const svgCircle = document.querySelector('.gallery_swiper .next_btn svg circle');
                if (svgCircle) {
                    svgCircle.style.animation = 'none';
                    setTimeout(() => {
                        svgCircle.style.animation = '';
                    }, 10);
                }
            },
        },
    })
    const swiper7 = new Swiper('.object_info_swiper', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })
    $('.left_btns .btn_').click(function(){
        $('.modal').addClass('open')
        $('.modal_bg').addClass('active')
    })
    $('.modal .close_icon2').click(function(){
        $('.modal').removeClass('open')
        $('.modal_bg').removeClass('active')
    })
    $('.modal_bg').click(function(){
        $('.modal').removeClass('open')
        $('.modal_bg').removeClass('active')
    })
})