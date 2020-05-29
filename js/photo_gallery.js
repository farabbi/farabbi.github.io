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
var titles = $("#photoGallery .imageTitle");
titles.hide();
$(titles[pho_i]).fadeIn();
var infos = $("#photoGallery .imageInfo");
infos.hide();
$(infos[pho_i]).fadeIn();

var prev_photo = function() {
    $(photos[pho_i]).hide();
    $(selectors[pho_i]).removeClass("selected");
    $(titles[pho_i]).hide();
    $(infos[pho_i]).hide();
    pho_i--;
    if (pho_i < 0) {
        pho_i += photos.length;
    }
    $(photos[pho_i]).fadeIn();
    $(selectors[pho_i]).addClass("selected");
    $(titles[pho_i]).fadeIn();
    $(infos[pho_i]).fadeIn();
};

var next_photo = function() {
    $(photos[pho_i]).hide();
    $(selectors[pho_i]).removeClass("selected");
    $(titles[pho_i]).hide();
    $(infos[pho_i]).hide();
    pho_i++;
    if (pho_i >= photos.length) {
        pho_i -= photos.length;
    }
    $(photos[pho_i]).fadeIn();
    $(selectors[pho_i]).addClass("selected");
    $(titles[pho_i]).fadeIn();
    $(infos[pho_i]).fadeIn();
};

var auto_display = window.setInterval(next_photo, 5000);
var stop_auto = function() {
    window.clearInterval(auto_display);
};

$("#photoGallery .prev").on("click", stop_auto);
$("#photoGallery .next").on("click", stop_auto);
$("#photoGallery .prev").on("click", prev_photo);
$("#photoGallery .next").on("click", next_photo);
