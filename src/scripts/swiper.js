const swiper = new Swiper('.swiper', {
    // Parâmetros opcionais
    direction: 'horizontal', // Navegação horizontal
    loop: true, // Permite rotação infinita dos slides

    // Quantidade de slides visíveis
    slidesPerView: 'auto', // Define slides visíveis de forma automática
    spaceBetween: 40, // Espaçamento entre os slides
    
    // Força o próximo slide a alinhar à esquerda
    centeredSlides: false, // Garante alinhamento inicial no scroll
    slideToClickedSlide: true, // Alinha o slide clicado ou navegado

    // Paginação
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Setas de navegação
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Barra de rolagem
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    // Configurações de deslizamento
    slideActiveClass: 'swiper-slide-active',

    // Responsividade (breakpoints)
    breakpoints: {
        // Quando a largura da tela for menor que 768px (mobile)
        768: {
            slidesPerView: 1.5, // Exibe 1.5 slides por vez
            spaceBetween: 20, // Menor espaçamento entre os slides
        },
        // Quando a largura da tela for maior ou igual a 768px (tablets e desktops)
        768: {
            slidesPerView: 3, // Exibe 3 slides por vez
            spaceBetween: 40, // Maior espaçamento entre os slides
        },
    }
});

// Aplicar a largura e altura dos slides
swiper.slides.forEach((slide) => {
    slide.style.width = '420px';
    slide.style.height = '420px';
});
