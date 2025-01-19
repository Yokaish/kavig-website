document.querySelectorAll('.plus-btn, .minus-btn').forEach(button => {
    button.addEventListener('click', function() {
      // Seleciona o parágrafo e os botões dentro da mesma div onde o botão foi clicado
      const paragraph = this.closest('.question').querySelector('p');
      const plusButton = this.closest('.question').querySelector('.plus-btn');
      const minusButton = this.closest('.question').querySelector('.minus-btn');
  
      // Alterna o atributo 'hidden' do parágrafo
      paragraph.toggleAttribute('hidden');
      
      // Alterna a visibilidade dos botões
      if (paragraph.hidden) {
        plusButton.hidden = false;
        minusButton.hidden = true;
      } else {
        plusButton.hidden = true;
        minusButton.hidden = false;
      }
    });
  });

  function toggleMenu() {
    let menu = document.getElementById('mobile-menu');
    let icon = document.getElementById('menu-icon');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        icon.src = "icons/hamb-menu.svg";
    } else {
        menu.classList.add('open');
        icon.src = "icons/hamb-menu-closed.svg";
    }
}
  
  