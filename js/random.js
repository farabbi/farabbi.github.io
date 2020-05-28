var wrappers = $(".wrapper");
var length = wrappers.length;
var orders = [];
for (var i = 1; i <= length; i++) {
    orders.push(i);
}

// Fisher–Yates Shuffle: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
    var m = array.length, t, i;
    
    // While there remain elements to shuffle...
    while (m) {
        
        // Pick a remaining element...
        i = Math.floor(Math.random() * m--);
        
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    
    return array;
}
shuffle(orders);
for (var i = 0; i < length; i++) {
    $(wrappers[i]).css("order", orders[i]);
}