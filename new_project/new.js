var a = 1;
var b = 2;
console.log('hello world');

function add(x, y) {
    console.log(x + y);
};

add(1, 1);
var position = 3;

function moveFord(distance) {
    var position = 2;
    position = position + distance;
    return position;
};

position = moveFord(10);
console.log(position);

$(function () {
    var $button = $("button");
    $button.click(
        function () {
            var $result = $("#meg");
            var $nameInput = $("#input");
            var name = $nameInput.val();
            $result.text("hello" + name);
        });
});