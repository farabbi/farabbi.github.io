// Load preview gif when hover on thumbnails
$(".with_preview").hover(
    function() {
        var src = $(this).attr("src");
        src = src.replace(".jpg", ".gif");
        $(this).attr("src", src);
    }, function() {
        var src = $(this).attr("src");
        src = src.replace(".gif", ".jpg");
        $(this).attr("src", src);
    }
);
