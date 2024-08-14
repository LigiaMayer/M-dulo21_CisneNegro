document.addEventListener('DOMContentLoaded', function() {
    const chars = document.querySelectorAll('[data-perso-button]');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            return;
        }
        entry.target.classList.remove('in-view');
        });
    });

    const allAnimatedElements = document.querySelectorAll('.animate');
    
    allAnimatedElements.forEach((element) => observer.observe(element));


    //abas
    for (let i = 0; i < pers.length; i++) {
        persos[i].addEventListener('click', function(perso) {
            const currentperso = perso.currentTarget.dataset.persoButton;
            const persoacter = document.querySelector(`[data-perso-id=${currentperso}]`)
            hideperso();
            persoacter.classList.add('pers__content__data__select--crt')
            hidepersoButton();
            perso.currentTarget.classList.add('crt')
        })
    }
});

function hidePersoButton() {
    const pers = document.querySelectorAll('[data-perso-button]');

    for (let i = 0; i < persos.length; i++) {
        pers[i].classList.remove('crt')
    }
}

function hideperso() {
    const persInfo = document.querySelectorAll('[data-perso-id]');

    for (let i = 0; i < persosInfo.length; i++) {
        persInfo[i].classList.remove('pers__content__data__select--crt')
    }
}