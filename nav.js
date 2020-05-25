var path = window.location.pathname;
var categories = ["01_short_films", "02_games", "03_physical_computing", "04_photography"];
for (var i = 0; i < categories.length; i++) {
    if (path.indexOf(categories[i]) > -1) {
        break;
    }
}
$(document).ready(function() {
    $("#nav-placeholder").load("/index.html nav", function() {
        $(".subnav").hide();
        switch (i) {
            case 0:
                $(".short_films").show();
                break;
            case 1:
                $(".games").show();
                console.log("games");
                break;
            case 2:
                $(".physical_computing").show();
                break;
            case 3:
                $(".photography").show();
                break;
            default:
                break;
        }
    });
});