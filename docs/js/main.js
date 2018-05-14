"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ball = (function () {
    function Ball() {
        this.gravity = 0.1;
        this.friction = 0.9;
        this.x = 0;
        this.y = 0;
        this.speedX = 5;
        this.speedY = -3;
        this.minWidth = 0;
        this.maxWidth = 0;
        this.maxHeight = 0;
        var content = document.getElementsByTagName("content")[0];
        this.htmlElement = document.createElement("ball");
        content.appendChild(this.htmlElement);
        this.maxHeight = window.innerHeight - this.htmlElement.clientHeight;
        this.maxWidth = window.innerWidth - this.htmlElement.clientWidth;
        this.x = Math.random() * this.maxWidth;
        this.y = 100;
    }
    Ball.prototype.draw = function () {
        this.htmlElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Ball;
}());
var Main = (function () {
    function Main() {
        this.balls = [];
        this.balls.push(new MoonBall());
        this.balls.push(new SpaceBall());
        this.gameLoop();
    }
    Main.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
            var ball = _a[_i];
            ball.update();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Main;
}());
window.addEventListener("load", function () { return new Main(); });
var MoonBall = (function (_super) {
    __extends(MoonBall, _super);
    function MoonBall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoonBall.prototype.update = function () {
        if (this.x < this.minWidth) {
            this.x = this.minWidth;
            this.speedX *= -1;
            this.speedX *= this.friction;
        }
        if (this.x > this.maxWidth) {
            this.x = this.maxWidth;
            this.speedX *= -1;
            this.speedX *= this.friction;
        }
        if (this.y + this.speedY > this.maxHeight) {
            this.y = this.maxHeight;
            this.speedY *= -1;
            this.speedY *= this.friction;
            this.speedX *= this.friction;
        }
        else {
            this.speedY += this.gravity;
        }
        this.x += this.speedX;
        this.y += this.speedY;
        this.draw();
    };
    return MoonBall;
}(Ball));
var SpaceBall = (function (_super) {
    __extends(SpaceBall, _super);
    function SpaceBall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpaceBall.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < this.minWidth || this.x > this.maxWidth) {
            this.speedX *= -1;
        }
        if (this.y < 0 || this.y > this.maxHeight) {
            this.speedY *= -1;
        }
        this.draw();
    };
    return SpaceBall;
}(Ball));
//# sourceMappingURL=main.js.map