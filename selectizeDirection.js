/**
 * @author Mohammad Jamal Dashtaki <mjd.prg@gmail.com>
 */

Selectize.prototype.positionDropdown = function () {
    if (this.settings.openDirection == "down")
        return;
    var $control = this.$control;
    var $window = $(window);

    this.$dropdown.css({"position": "fixed"});

    var control_height = $control.outerHeight(false);
    var control_space_above = $control.offset().top - $window.scrollTop();
    var control_space_below = $window.height() - control_space_above - control_height;
    var dropdown_height = this.$dropdown.outerHeight(false);

    var up = ( dropdown_height > control_space_below) ? "true" : false;

    var offset = this.settings.dropdownParent === "body" ? $control.offset() : $control.position();
    offset.top += $control.outerHeight(true);

    if (up || this.settings.openDirection == "up") {

        offset.top = control_space_above - dropdown_height;
        offset.left = $control.offset().left;

        this.$dropdown.css({
            "border-top-color": "hsl(0, 0%, 72%)",
            "border-top-width": "1px",
            "border-top-style": "solid",
            "border-bottom-width": "0",
            width: $control.outerWidth(),
            position: "fixed",
            top: offset.top,
            left: offset.left,
            display: "block !important"
        });
    }
    else {
        this.$dropdown.css({
            width: $control.outerWidth(),
            top: offset.top,
            left: offset.left,
            position: "absolute",
            "border-bottom-color": "hsl(0, 0%, 72%)",
            "border-bottom-width": "1px",
            "border-bottom-style": "solid",
            "border-top-width": "0"
        });
    }
};