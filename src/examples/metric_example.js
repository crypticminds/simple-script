"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var metric_1 = require("../decorators/metric");
var MetricExample = /** @class */ (function () {
    function MetricExample() {
        this.methodExecutionTimeCalculator = function () { };
    }
    __decorate([
        metric_1["default"]("abcd", "xyz", "execution_time", function () { })
    ], MetricExample.prototype, "methodExecutionTimeCalculator");
    return MetricExample;
}());
