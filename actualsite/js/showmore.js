$(document).ready( function() {

var button = document.getElementById('showmore-button');

button.onclick = function() {
    var showmore = document.getElementById('product-showmore');
    if (showmore.style.display !== 'none') {
        showmore.style.display = 'none';
    }
    else {
        showmore.style.display = 'block';
    }
};

});