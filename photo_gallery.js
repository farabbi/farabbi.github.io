var index = 0;
var photos = $("#photoGallery .imageWrapper");
photos.hide();
$(photos[index]).fadeIn();
for (var i = 0; i < photos.length; i++) {
    var selector = $('<span class="selector">&bull;</span>');
    $("#photoGallery .selector-placeholder").append(selector);
}
var selectors = $("#photoGallery .selector");
$(selectors[index]).addClass("selected");



var prev_photo = function() {
    $(photos[index]).hide();
    $(selectors[index]).removeClass("selected");
    index--;
    if (index < 0) {
        index += photos.length;
    }
    $(photos[index]).fadeIn();
    $(selectors[index]).addClass("selected");
};

var next_photo = function() {
    $(photos[index]).hide();
    $(selectors[index]).removeClass("selected");
    index++;
    if (index >= photos.length) {
        index -= photos.length;
    }
    $(photos[index]).fadeIn();
    $(selectors[index]).addClass("selected");
};

var auto_display = window.setInterval(next_photo, 5000);
var stop_auto = function() {
    window.clearInterval(auto_display);
};

$("#photoGallery .prev").on("click", stop_auto);
$("#photoGallery .next").on("click", stop_auto);
$("#photoGallery .prev").on("click", prev_photo);
$("#photoGallery .next").on("click", next_photo);
