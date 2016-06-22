function rubberFont() {
    var text = $(".rubber-font").each(function(){
        var height = parseInt($(this).css("height"));
        $(this).css("font-size", height + "px");
    });
}