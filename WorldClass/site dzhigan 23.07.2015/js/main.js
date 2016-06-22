    /*Установка блока по центру по горизонатли*/
    /*Елементу, который мы хотим выровнять по центру, должен быть присвоен класс "to-center"*/
    /*Скрипт желательно размещать последним*/

        var element = $(".to-center");
        for (var i = element.length - 1; i >= 0; i--) {
            var element = $(".to-center")[i];
            var parent = $("body")[0];
            var elementWidth = element.clientWidth;
            var parentWidth = parent.clientWidth;
            element.style.left = (parentWidth - elementWidth) / 2 + "px";
        };
    /*Скрипт выставляет высоту шрифта по высоте блока*/
var textTagForRubberFontInPercent = $(".rubber-font-in-percent");
var percentage112 = [];
for (var i = textTagForRubberFontInPercent.length - 1; i >= 0; i--) {
    percentage112[i] = parseInt(textTagForRubberFontInPercent.eq(i).css("fontSize"));
};
function rubberFontInPercent() {
    var text = $(".rubber-font-in-percent");
    for (var i = text.length - 1; i >= 0; i--) {
        var height = parseInt(text.eq(i).css("height"));
        var result = parseInt(height / 100 * percentage112[i]);
        text.eq(i).css("font-size", result + "px");
    };
};

function rubberFont() {
    var text = $(".rubber-font").each(function(){
        var height = parseInt($(this).css("height"));
        $(this).css("font-size", height + "px");
    });
}


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
