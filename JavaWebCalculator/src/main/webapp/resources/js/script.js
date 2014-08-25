$(document).ready(function() {
    var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length - 9, 9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        }
    };
    var number = "";
    var newnumber = "";
    var operator = "";
    var answer = 0;
    var totaldiv = $("#total");
    totaldiv.text("0");

    //input for numbers 
    $("#numbers > a").not("#clear,#clearall").click(function() {
        number += $(this).text();
        totaldiv.text(number);
        testNumLength(number);
    });
    //input for operators except =
    $("#operators > a").not("#equals").click(function() {
        operator = $(this).text();
        newnumber = number;
        number = "";
        totaldiv.text("0");
    });
    //clear button functionality
    $("#clear").click(function() {
        number = "";
        totaldiv.text("0");
    });
    //clear all button functionality
    $("#clearall").click(function() {
        number = "";
        newnumber = "";
        totaldiv.text("0");
    });
    //equals button functionality
    $("#equals").click(function() {
        if (operator === "+") {
            answer = parseInt(newnumber, 10) + parseInt(number, 10);
        }
        else if (operator === "-") {
            answer = parseInt(newnumber, 10) - parseInt(number, 10);
        }
        if (operator === "/") {
            answer = parseInt(newnumber, 10) / parseInt(number, 10);
        }
        if (operator === "*") {
            answer = parseInt(newnumber, 10) * parseInt(number, 10);
        }
        totaldiv.text(answer.toString());
        testNumLength(answer.toString());
        number = "";
        newnumber = "";
    });
});