document.querySelectorAll('.plus-btn, .minus-btn').forEach(button => {
  button.addEventListener('click', function() {
    // Seleciona o parágrafo e os botões dentro da mesma div onde o botão foi clicado
    const paragraph = this.closest('.question').querySelector('.answer');
    const plusButton = this.closest('.question').querySelector('.plus-btn');
    const minusButton = this.closest('.question').querySelector('.minus-btn');
  
    // Alterna a classe 'visible' no parágrafo
    paragraph.classList.toggle('visible');
    
    // Alterna a visibilidade dos botões
    if (paragraph.classList.contains('visible')) {
      plusButton.hidden = true;
      minusButton.hidden = false;
    } else {
      plusButton.hidden = false;
      minusButton.hidden = true;
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

const sendMsgBtn = document.querySelector('#send-msg-btn');
const arrowSend = document.querySelector('#arrow-send')

sendMsgBtn.addEventListener('mouseover', () => {
    arrowSend.src = 'assets/icons/arrow-black.svg'
})

sendMsgBtn.addEventListener('mouseleave', () => {
  arrowSend.src = 'assets/icons/arrow-right.svg'
})
  
  