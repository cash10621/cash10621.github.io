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
    //   $("#meg").hide();
    var $button = $("#login");
    $button.click(
        function () {
            var $result = $("#meg");
            var $nameInput = $("#input");
            var name = $nameInput.val();
            $result.text("hello" + name);
            $result.show();
        });
});


function Pokemon(
    number, type, height, weight, abilities, japanese
) {
    this.number = number;
    this.type = type;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.japanese = japanese;
};

var type_html_start = '<buttom class="btn btn-default">';
var type_html_end = '</buttom>';

// 宣告變數不能用大寫頭
var pokemon = new Pokemon(132, ["cool", "big"], 1.6, 1.2, "speeh", "sanda");
var pokemon1 = new Pokemon(133, ["cool", "small"], 1.0, 2.2, "speeh", "undefind");


$(function () {
    $("#number").text(pokemon.number);
    $("#type").html(type_html_start + pokemon.type + type_html_end);
    $("#height").text(pokemon.height);
    $("#weight").text(pokemon.weight);
    $("#abilities").text(pokemon.abilities);
    $("#japanese").text(pokemon.japanese);
    $("#meg").html("Hello <b>world</b>!");
});


// 用function定義類別(第一個字大寫)
function Student(name, phone, city) {
    this.name = name;
    this.phone = phone;
    this.city = city;
};
var student1 = new Sutdent("aaa", "0917534512", "taipei");
var student2 = new Sutdent("bbb", "0917534545", "taipei");
// END--- 用function定義類別