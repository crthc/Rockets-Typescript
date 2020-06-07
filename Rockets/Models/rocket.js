"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(id) {
        this.thrusters = new Array();
        this.id = id;
    }
    Rocket.prototype.addThruster = function (thruster) {
        this.thrusters.push(thruster);
    };
    return Rocket;
}());
