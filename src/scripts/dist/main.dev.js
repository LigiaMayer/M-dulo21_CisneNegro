"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('[data-tab-button');
  var questions = document.querySelectorAll('[data-faq-question]');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (botao) {
      var abaAlvo = botao.target.dataset.tabButton;
      var aba = document.querySelector("[data-tab-id=".concat(abaAlvo, "]"));
      escondeTodasAbas();
      aba.classList.add('characters__content--is--active');
      removeBotaoAtivo();
      botao.target.classList.add('characters__tab__button--is--active');
    });
  }

  for (var _i = 0; _i < questions.length; _i++) {
    questions[_i].addEventListener('click', abreOuFechaResposta);
  }
});

function abreOuFechaResposta(elemento) {
  var classe = 'faq__questions__item--is--open';
  var elementoPai = elemento.target.parentNode;
  elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
  var buttons = document.querySelectorAll('[data-tab-button');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('characters__tab__button--is--active');
  }
}

function escondeTodasAbas() {
  var tabsContainer = document.querySelectorAll('[data-tab-id');

  for (var i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove('characters__content--is--active');
  }
}