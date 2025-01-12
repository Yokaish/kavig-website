const swiper = new Swiper('.swiper', {
    // Parâmetros opcionais
    direction: 'horizontal', // Navegação horizontal
    loop: true, // Permite rotação infinita dos slides
  
    // Quantidade de slides visíveis
    slidesPerView: 2.5, // Define 3 slides visíveis parcialmente
    spaceBetween: 20, // Espaçamento entre os slides
    
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
  });
  