var switchparam = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var change = 1;
var standard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var parabola = [0, 7, 14, 20, 25, 30, 35, 38, 42, 45, 47, 48, 49, 49, 48, 47, 45, 42, 38, 35, 30, 25, 20, 14, 7, 0];
var opposite = [1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99];
var linear = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50];
var oppositelinear = [0, 98, 4, 94, 8, 90, 12, 86, 16, 82, 20, 78, 24, 74, 28, 70, 32, 66, 36, 62, 40, 58, 44, 54, 48, 50];
var oppositeparabola = [0, 93, 14, 80, 25, 70, 35, 62, 42, 55, 47, 52, 50, 50, 48, 53, 45, 58, 38, 65, 30, 75, 20, 86, 7, 100];
var blockparam = 0;
var delayLength = 50;
var newShape = new Array;
var random = [];

function requestShape() {
    var shape = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 26; i++) {
        shape[i] = document.getElementById("slider" + i).value;
    }
    document.getElementById("outputShape").value = shape;
}

function setDelay(i) {
    delayLength = 1001 - parseInt(i);   
}

function readShape(shape) {
    var newNumberAsString = "";
    var newNumber = null;
    for (var i = 0; i < shape.length; i++) {
        if (shape[i] != ",") {
            newNumberAsString = newNumberAsString + shape[i];
        }
        else {
            newNumber = parseInt(newNumberAsString);
            newShape.push(newNumber);
            newNumber = null;
            newNumberAsString = "";
        }
    }

}

function loadShape() {
    for (var i = 0; i < newShape.length; i++) {
        document.getElementById("slider" + i).value = newShape[i];   
    }
}

function setSliders(shape) {
    if (shape === "standard") {
        for (var i = 0; i < 26; i++) {
            document.getElementById("slider" + i).value = standard[i];
        }
        switchparam = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        
    } else if (shape === "parabola") {
        for (var i = 0; i < 26; i++) {
            document.getElementById("slider" + i).value = parabola[i];
        }
        switchparam = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else if (shape === "opposite") {
        for (var i = 0; i < 26; i++) {
            document.getElementById("slider" + i).value = opposite[i];
        }
        switchparam = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
    } else if (shape === "linear") {
        for (var i = 0; i < 26; i++) {
            document.getElementById("slider" + i).value = linear[i];
        }
        switchparam = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else if (shape === "oppositelinear") {
        for (var i = 0; i < 26; i++) {
            document.getElementById("slider" + i).value = oppositelinear[i];
        }
        switchparam = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
    }
    else if (shape === "oppositeparabola") {
        for (var i = 0; i < 26; i++) {
            document.getElementById("slider" + i).value = oppositeparabola[i];
        }
        switchparam = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
    }
}

function slide(i) {
    if (blockparam === 0) {
        var j = null;
        if (switchparam[i] === 0) {
            j = parseInt(document.getElementById("slider" + i).value);
            j += 1;
            document.getElementById("slider" + i).value = j;
            delay();
        } else if (switchparam[i] === 1) {
            j = parseInt(document.getElementById("slider" + i).value);
            j += -1;
            document.getElementById("slider" + i).value = j;
            delay();

        }

        function delay() {
            window.setTimeout(function() {
                check()
            }, delayLength);
        }

        function check() {
            if (j === 100) {
                switchparam[i] = 1;
            } else if (j === 0) {
                switchparam[i] = 0;
            }
            slide(i);
            requestShape();
        }
    }
}

function toggle() {
    if (blockparam === 0) {
        blockparam = 1;   
        window.setTimeout(function(){ blockparam = 0; },100);
    }
    else {
        blockparam = 0;   
    }
}