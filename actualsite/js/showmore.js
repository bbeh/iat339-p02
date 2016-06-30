$(document).ready( function() {

var button = document.getElementById('showmore-button');

button.onclick = function() {
    var div = document.getElementById('product-showmore').className = "product-showmore";;
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    };


};
});