/*Изменение изображения кнопки по наведению курсора*/
/*$(document).ready(function(){
        $(".continue img").mouseover(function(){
        $(".continue img").attr("src","img/continueA.png");
    });
        $(".continue img").mouseout(function(){
        $(".continue img").attr("src","img/continue.png");
    });
});*/
/*Установка блока по центру по горизонатли*/
/*Елементу, который мы хотим выровнять по центру, должен быть присвоен класс "to-center"*/
/*Скрипт желательно размещать последним*/
$(document).ready(function(){
    var element = $(".to-center");
    for (var i = element.length - 1; i >= 0; i--) {
        var element = $(".to-center")[i];
        var parent = $("body")[0];
        var elementWidth = element.clientWidth;
        var parentWidth = parent.clientWidth;
        element.style.left = (parentWidth - elementWidth) / 2 + "px";
    };
});
