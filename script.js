function changeState (weapon) {
    if (weapon.hasClass("incomplete")) {
        weapon.removeClass("incomplete").addClass("complete")
    } else {
        weapon.removeClass("complete").addClass("incomplete")
    }
}

$(window).on("load", function() {
    $(".weapon").on("click", function() {
        changeState($(this))
    })
});