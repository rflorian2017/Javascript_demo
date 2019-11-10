console.log("Hello world!");

var inputName = document.getElementById('your_name');
var button = document.getElementById('clickme');

let name = document.getElementById('name');

button.onclick = function() {
    console.log(inputName.value);
    name.innerHTML = inputName.value;

}


var buttonSum = document.getElementById('clickSum');
buttonSum.onclick = function() {
    var first = document.getElementById('a').value;
    var second = document.getElementById('b').value;

    var res = +first + +second;

    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var suma = a + b;
    document.getElementById('sum').innerHTML = suma;

    console.log(sum);
}

var fact_suma_btn = document.getElementById('fact_suma_btn');
let fact_suma = document.getElementById('fact_suma');

var test_divs_added = false;

fact_suma_btn.onclick = function() {
    var sum = 0;
    var fact = 1;
    for (i = 1; i <= +fact_suma.value; i++) {
        // console.log("Indicele este " + i);
        sum = i + sum;
        // console.log("Suma este " + sum);
        fact = fact * i;
        // console.log("Fact este " + fact);
    }
    var div_factorial = document.getElementsByClassName('factorial')[0];

    if (test_divs_added) {
        var div_Result_Fact = div_factorial.getElementsByTagName('div')[0]; //first div from factorial
        var div_Result_Sum = div_factorial.getElementsByTagName('div')[1]; //second div from factorial
    } else {
        var div_Result_Fact = document.createElement('div');
        var div_Result_Sum = document.createElement('div');

        div_factorial.appendChild(div_Result_Fact);
        div_factorial.appendChild(div_Result_Sum);
        test_divs_added = true;
    }

    div_Result_Fact.innerHTML = fact;
    div_Result_Sum.innerHTML = sum;

}

var text = `Text
on 
multiple
lines `;

console.log(text);

var divElements = $("div");
console.log(divElements);

$("#change_style").click(function() {
    $(".red").attr("class", "blue");
});