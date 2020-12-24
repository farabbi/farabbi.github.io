// Load navigation and footer according to the url
var path = window.location.pathname;
var categories = ["01_short_films", "02_games", "03_physical_computing", "04_photography", "00_work_samples"];
for (var cat_i = 0; cat_i < categories.length; cat_i++) {
    if (path.indexOf(categories[cat_i]) > -1) {
        break;
    }
}
$(document).ready(function() {
    $("#nav-placeholder").load("/index.html nav", function() {
        $(".subnav").hide();
        switch (cat_i) {
            case 0:
                $(".short_films").slideDown();
                break;
            case 1:
                $(".games").slideDown();
                break;
            case 2:
                $(".physical_computing").slideDown();
                break;
            case 3:
                $(".photography").slideDown();
                break;
            case 4:
                $(".work_samples").slideDown();
                break;
            default:
                break;
        }
    });
    $("#main-placeholder").load("/index.html main", function() {
        $(".wrapper").hide();
        switch (cat_i) {
            case 0:
                $(".short_films").fadeIn();
                break;
            case 1:
                $(".games").fadeIn();
                break;
            case 2:
                $(".physical_computing").fadeIn();
                break;
            case 3:
                $(".photography").fadeIn();
                break;
            case 4:
                $(".work_samples").fadeIn();
                break;
            default:
                break;
        }
        $.getScript("/js/preview.js");
    });
    $("#footer-placeholder").load("/index.html footer");
});