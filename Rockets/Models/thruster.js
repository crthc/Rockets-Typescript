"use strict";
var Thruster = /** @class */ (function () {
    function Thruster(maxPower) {
        this.maxPower = maxPower;
        this.actualPower = 0;
    }
    Thruster.prototype.accelerate = function () {
        this.actualPower += 10;
    };
    Thruster.prototype.break = function () {
        this.actualPower -= 10;
    };
    return Thruster;
}());
