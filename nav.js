var path = window.location.pathname;
var categories = ["01_short_films", "02_games", "03_physical_computing", "04_photography"];
for (var i = 0; i < categories.length; i++) {
    if (path.indexOf(categories[i]) > -1) {
        break;
    }
}
$(document).ready(function() {
    $("#nav-placeholder").load("/index.html #navigation");
    $(".subnav").hide();
    if (i == 0) {
        $(".short_films").show();
    } else if (i == 1) {
        $(".games").show();
    } else if (i == 2) {
        $(".physical_computing").show();
    } else if (i == 3) {
        $(".photography").show();
    }
});