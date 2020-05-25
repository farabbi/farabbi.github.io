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
    console.log(i);
    switch (i) {
        case 0:
            $(".short_films").show();
            console.log("short_films");
            break;
        case 1:
            $(".games").show();
            console.log("games");
            break;
        case 2:
            $(".physical_computing").show();
            console.log("physical_computing");
            break;
        case 3:
            $(".photography").show();
            console.log("photography");
            break;
        default:
            break;
    }
});