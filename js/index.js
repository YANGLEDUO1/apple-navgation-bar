window.onload = function() {
    // ����˵�ʱ
    $(document).ready(function() {
        $('.burger').click(function() {
            $('.nav-menu').slideToggle("slow")
        });
        //���inputʱ
        $('.oINPUT').click(function() {
            $('.INPUT-menu').slideToggle("slow");
        });

    })

    var burger = document.querySelector('.burger_');
    var navmenu = document.querySelector('.nav-menu');
    var serch = document.querySelector('.serch');
    burger.addEventListener('click', function() {
        burger.classList.toggle('active')

    });

    // �������ʱ
    var SS = document.getElementById('SOUSUO');
    var INPUT = document.querySelector('.INPUT');
    var LOGO = document.querySelector('.logo');
    var guowu = document.getElementById('gouwu');

    SS.addEventListener('click', function() {
        INPUT.classList.toggle('active');
        navmenu.classList.toggle('uopen');
        LOGO.classList.toggle('ulogo');
        serch.style.cssText = "margin-left:50%;transform:translate(-50%)";
        SS.classList.toggle('ucencel');
        guowu.classList.toggle('ucencel');
    })




    // ���ȡ��ʱ
    var cancel = document.getElementById('cancel');
    cancel.addEventListener('click', function() {
        serch.style.cssText = "margin-left:5vw"
        INPUT.classList.toggle('active');
        navmenu.classList.toggle('uopen');
        LOGO.classList.toggle('ulogo');
        SS.classList.toggle('ucencel');
        guowu.classList.toggle('ucencel');
    });


}