var pho_i = 0;
var photos = $("#photoGallery .imageWrapper");
photos.hide();
$(photos[pho_i]).fadeIn();
for (var i = 0; i < photos.length; i++) {
    var selector = $('<span class="selector">&#8226</span>');
    $("#photoGallery .selector-placeholder").append(selector);
}
var selectors = $("#photoGallery .selector");
$(selectors[pho_i]).addClass("selected");



var prev_photo = function() {
    $(photos[pho_i]).hide();
    $(selectors[pho_i]).removeClass("selected");
    pho_i--;
    if (pho_i < 0) {
        pho_i += photos.length;
    }
    $(photos[pho_i]).fadeIn();
    $(selectors[pho_i]).addClass("selected");
};

var next_photo = function() {
    $(photos[pho_i]).hide();
    $(selectors[pho_i]).removeClass("selected");
    pho_i++;
    if (pho_i >= photos.length) {
        pho_i -= photos.length;
    }
    $(photos[pho_i]).fadeIn();
    $(selectors[pho_i]).addClass("selected");
};

var auto_display = window.setInterval(next_photo, 5000);
var stop_auto = function() {
    window.clearInterval(auto_display);
};

$("#photoGallery .prev").on("click", stop_auto);
$("#photoGallery .next").on("click", stop_auto);
$("#photoGallery .prev").on("click", prev_photo);
$("#photoGallery .next").on("click", next_photo);
