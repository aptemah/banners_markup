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