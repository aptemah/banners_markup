    /*Скрипт выставляет высоту шрифта по высоте блока*/
var textTagForRubberFontInPercent = $(".rubber-font-in-percent");
var percentage = [];
for (var i = textTagForRubberFontInPercent.length - 1; i >= 0; i--) {
    percentage[i] = parseInt(textTagForRubberFontInPercent.eq(i).css("fontSize"));
};
function rubberFontInPercent() {
    var text = $(".rubber-font-in-percent");
    for (var i = text.length - 1; i >= 0; i--) {
        var height = parseInt(text.eq(i).css("height"));
        var result = parseInt(height / 100 * percentage[i]);
        text.eq(i).css("font-size", result + "px");
    };
};

function rubberFont() {
    var text = $(".rubber-font").each(function(){
        var height = parseInt($(this).css("height"));
        $(this).css("font-size", height + "px");
    });
}
//global variables: "timer112" 
//Функция проверки ориентации экрана
function addClassesToElements() {
    wrap112 = document.getElementsByTagName("DIV")[0];
    var Height = wrap112.clientHeight;
    var Width = wrap112.clientWidth;
    if ((Width * 0.7) < Height) {
        orientation112 = 1;
        //remove classes
        for (var i = classes112.length - 1; i >= 0; i--) {
            $("." + classes112[i]).removeClass(classes112[i] + "-l");
        };
        rubberFontInPercent();
        rubberFont();
        if (typeof functionsOnOrientationChange112 == "object") {
            for (var i = functionsOnOrientationChange112.length - 1; i >= 0; i--) {
                if (typeof functionsOnOrientationChange112[i] == "function") {
                    functionsOnOrientationChange112[i]();
                }
            };
        };
    } else {
        orientation112 = 2;
        //add classes
        for (var i = classes112.length - 1; i >= 0; i--) {
            $("." + classes112[i]).addClass(classes112[i] + "-l");
        };
        rubberFontInPercent();
        rubberFont();
        if (typeof functionsOnOrientationChange112 == "object") {
            for (var i = functionsOnOrientationChange112.length - 1; i >= 0; i--) {
                if (typeof functionsOnOrientationChange112[i] == "function") {
                    functionsOnOrientationChange112[i]();
                }
            };
        };
    }
}
function checkOrientation(){
    Height = wrap112.clientHeight;
    Width = wrap112.clientWidth;
    if ((Width * 0.7) < Height) {
            if (orientation112 == 2) {
                addClassesToElements();
                if (typeof functionsOnOrientationChange112 == "object") {
                for (var i = functionsOnOrientationChange112.length - 1; i >= 0; i--) {
                    if (typeof functionsOnOrientationChange112[i] == "function") {
                        functionsOnOrientationChange112[i]();
                    }
                };
            };
        };
    } else {
            if (orientation112 == 1) {
                addClassesToElements();
                if (typeof functionsOnOrientationChange112 == "object") {
                for (var i = functionsOnOrientationChange112.length - 1; i >= 0; i--) {
                    if (typeof functionsOnOrientationChange112[i] == "function") {
                        functionsOnOrientationChange112[i]();
                    }
                };
            };
        };
    }
}
var timer112 = setInterval(function(){ 
    checkOrientation ();
}, 500);

    /*Установка блока по центру по горизонатли*/
    /*Елементу, который мы хотим выровнять по центру, должен быть присвоен класс "to-center"*/
    /*Скрипт желательно размещать последним*/
function setToCenter() {
    var element = $(".to-center");
    for (var i = element.length - 1; i >= 0; i--) {
        var element = $(".to-center")[i];
        var parent = $(".wrap")[0];
        var elementWidth = element.clientWidth;
        var parentWidth = parent.clientWidth;
        element.style.left = (parentWidth - elementWidth) / 2 + "px";
    };
};
$( window ).resize(function() {
    setToCenter();
});