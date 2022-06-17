//DECLARADO VARIAVEIS
var btnContact = document.querySelector('.jl-btn-contact');
var toggleModal = document.querySelectorAll('.jl-toggle-modal');
var toggleMenu = document.querySelectorAll('.jl-toggle-menu');
var menuMobile = document.querySelector('.jl-menu-mob');
var btnMenuMobIcon = document.querySelector('.jl-btn-menu-mob ion-icon')
    //PAGE PRELOADER
window.addEventListener('load', function() {
    var pagePreloader = document.querySelector('.jl-preloader');
    pagePreloader.classList.add('jl-fade-out');

    setTimeout(function() {
        pagePreloader.style.display = 'none';
    }, 2000);
});

//ABRINDO E FECHANDO AÇÕES DE CONTATO
btnContact.addEventListener('click', function() {
    var boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');
});

//ABRINDO E FECHANDO MENU
for (var m = 0; m < toggleMenu.length; m++) {
    toggleMenu[m].addEventListener('click', function() {
        var overlay = document.querySelector('.jl-menu-overlay');
        overlay.classList.toggle('jl-is-open');
        menuMobile.classList.toggle('jl-menu-is-closed');
        menuMobile.classList.toggle('jl-menu-is-open');

        var icon = btnMenuMobIcon.getAttribute('name');
        if (icon === 'menu') {
            btnMenuMobIcon.setAttribute('name', 'close');
        } else {
            btnMenuMobIcon.setAttribute('name', 'menu');
        }
    });
}
//ABRINDO E FECHANDO MODAL DE ORÇAMENTO

for (var i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function() {
        var overlay = document.querySelector('.jl-overlay');
        var modalOrcamento = document.querySelector('#jl-modal-orcamento');

        overlay.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-slide-top-in');
    });
}


//ANIMANDO ELEMENTOS TOPBAR
var triggerTopbar = document.querySelector('.jl-trigger-topbar');
var topbar = document.querySelector('.jl-topbar');
var logo = document.querySelector('.jl-logo');
var waypoint = new Waypoint({
    element: triggerTopbar,
    handler: function() {
        topbar.classList.toggle('jl-topbar-bg');
        logo.classList.toggle('jl-logo-shorten');
        logo.classList.toggle('jl-logo-big');
    },
    offset: '50px'
});