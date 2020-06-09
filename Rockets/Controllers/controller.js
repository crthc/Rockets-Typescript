"use strict";
var rocket1;
var rocket2;
document.getElementById("rocket1").addEventListener('click', function () {
    document.getElementById("rocket1").disabled = true;
    document.getElementById("rocket1").innerHTML = 'Created!';
    var id = '32WESSDS';
    rocket1 = new Rocket(id);
    var maxPower = [10, 30, 80]; // Potencia de cada propulsor. 
    // Creamos propulsores con sus respectivas potencias.
    for (var i = 0; i <= maxPower.length - 1; i++) {
        var thrusters = new Thruster(maxPower[i]);
        rocket1.addThruster(thrusters);
    }
    console.log(rocket1);
});
document.getElementById("rocket2").addEventListener('click', function () {
    var createRocket = document.getElementById("rocket2");
    createRocket.disabled = true;
    createRocket.innerHTML = 'Created!';
    var id = 'LDSFJA32';
    rocket2 = new Rocket(id);
    var maxPower = [30, 40, 50, 50, 30, 10]; // Potencia de cada propulsor. 
    // Creamos propulsores con sus respectivas potencias.
    for (var i = 0; i <= maxPower.length - 1; i++) {
        var thrusters = new Thruster(maxPower[i]);
        rocket2.addThruster(thrusters);
    }
    console.log(rocket2);
});
document.getElementById("accelerateRocket1").addEventListener('click', function () {
    accelerateRocket(rocket1);
});
document.getElementById("accelerateRocket2").addEventListener('click', function () {
    accelerateRocket(rocket2);
});
document.getElementById("breakRocket1").addEventListener('click', function () {
    breakRocket(rocket1);
});
document.getElementById("breakRocket2").addEventListener('click', function () {
    breakRocket(rocket2);
});
document.getElementById("printRocket1").addEventListener('click', function () {
    document.getElementById("showRocket1").innerHTML = printRocket(rocket1);
});
document.getElementById("printRocket2").addEventListener('click', function () {
    document.getElementById("showRocket2").innerHTML = printRocket(rocket2);
});
document.getElementById("printAll").addEventListener('click', function () {
    document.getElementById("showRocket1").innerHTML = printRocket(rocket1);
    document.getElementById("showRocket2").innerHTML = printRocket(rocket2);
});
function accelerateRocket(rocket) {
    for (var _i = 0, _a = rocket.thrusters; _i < _a.length; _i++) {
        var i = _a[_i];
        if (i.actualPower == i.maxPower) {
            i.actualPower = i.actualPower;
        }
        else if (i.actualPower < i.maxPower) {
            i.accelerate();
        }
    }
}
function breakRocket(rocket) {
    for (var _i = 0, _a = rocket.thrusters; _i < _a.length; _i++) {
        var i = _a[_i];
        if (i.actualPower == 0) {
            i.actualPower = i.actualPower;
        }
        else if (i.actualPower > 0) {
            i.break();
        }
    }
}
function printRocket(rocket) {
    // Sacamos potencias de cada propulsor.
    var thrustersPower = [];
    for (var _i = 0, _a = rocket.thrusters; _i < _a.length; _i++) {
        var i = _a[_i];
        thrustersPower.push(i.maxPower);
    }
    var thrustersActualPower = [];
    for (var _b = 0, _c = rocket.thrusters; _b < _c.length; _b++) {
        var i = _c[_b];
        thrustersActualPower.push(i.actualPower);
    }
    var totalmaxPower = thrustersPower.reduce(function (a, b) { return a + b; }, 0); // Potencia máxima total del cohete
    var actualPower = thrustersActualPower.reduce(function (a, b) { return a + b; }, 0); // Potencia actual del cohete
    return "Rocket " + rocket.id + " actual power is " + actualPower + ". <br>The " + rocket.thrusters.length + " thrusters actual power is " + thrustersActualPower.join(', ') + ". <br>Rocket maximum power is " + totalmaxPower + ". <br>Thrusters maximum power is " + thrustersPower.join(', ') + ".";
}
