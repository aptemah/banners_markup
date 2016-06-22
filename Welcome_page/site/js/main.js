
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
        $(this).hide().show(0);
    });
}
function rubberFontWh(classOfText, sizeOfText) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    $("." + classOfText).css("font-size", parseInt(h / 1000 * sizeOfText) + "px");
    console.log("rubberFontWh")
}
//global variables: "timer112" 
//Функция проверки ориентации экрана
function addClassesToElements() {
    wrap112 = document.getElementsByTagName("DIV")[0];
    var Height = wrap112.clientHeight;
    var Width = wrap112.clientWidth;
    // orientation112 = 1 — for portrait
    if ((Width * 0.7) < Height) {
        orientation112 = 1;
        //remove classes
        if (typeof classes112 == "object") {
            for (var i = classes112.length - 1; i >= 0; i--) {
                $("." + classes112[i]).removeClass(classes112[i] + "-l");
            };
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
        if (typeof classes112 == "object") {
            for (var i = classes112.length - 1; i >= 0; i--) {
                $("." + classes112[i]).addClass(classes112[i] + "-l");
            };
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
                if (typeof functionsOnOrientationflip112 == "object") {
                for (var i = functionsOnOrientationflip112.length - 1; i >= 0; i--) {
                    if (typeof functionsOnOrientationflip112[i] == "function") {
                        functionsOnOrientationflip112[i]();
                    }
                };
            };
        };
    } else {
            if (orientation112 == 1) {
                addClassesToElements();
                if (typeof functionsOnOrientationflip112 == "object") {
                for (var i = functionsOnOrientationflip112.length - 1; i >= 0; i--) {
                    if (typeof functionsOnOrientationflip112[i] == "function") {
                        functionsOnOrientationflip112[i]();
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
function frameOnFocus(){
    var i;
    for (i = 0; i < inputs112.length; i++) {
        $("." + inputs112[i] +" > input").focus(function() {
            $(this).parent().css("border-color","#494a4b");
        });
    };
    for (i = 0; i < inputs112.length; i++) {
        (function(i) {
            var parent, child;
            child = $("." + inputs112[i] +" > input");
            parent = $("." + inputs112[i]);
            child.blur(function(){parent.css("border-color","#343536")});
        })(i);
    };
}