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
  
  