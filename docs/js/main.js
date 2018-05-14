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
    function Ball(minWidth, maxWidth, type) {
        if (type === void 0) { type = "ball"; }
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
        this.htmlElement = document.createElement(type);
        content.appendChild(this.htmlElement);
        maxWidth -= this.htmlElement.clientWidth;
        this.x = (Math.random() * (maxWidth - minWidth)) + minWidth;
        this.y = 100;
        this.minWidth = minWidth;
        this.maxWidth = maxWidth;
        this.maxHeight = window.innerHeight - this.htmlElement.clientHeight;
    }
    Ball.prototype.draw = function () {
        this.htmlElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Ball;
}());
var Main = (function () {
    function Main() {
        this.balls = [];
        this.balls.push(new MoonBall(0, window.innerWidth / 2));
        this.balls.push(new SpaceBall(window.innerWidth / 2, window.innerWidth));
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
    function MoonBall(minwidth, maxwidth) {
        var _this = _super.call(this, minwidth, maxwidth) || this;
        _this.behaviour = new Bouncing(_this);
        return _this;
    }
    MoonBall.prototype.update = function () {
        this.behaviour.update();
        this.draw();
    };
    return MoonBall;
}(Ball));
var SpaceBall = (function (_super) {
    __extends(SpaceBall, _super);
    function SpaceBall(minwidth, maxwidth) {
        var _this = _super.call(this, minwidth, maxwidth) || this;
        _this.behavioiur = new Floating(_this);
        return _this;
    }
    SpaceBall.prototype.update = function () {
        this.behavioiur.update();
        this.draw();
    };
    return SpaceBall;
}(Ball));
var Bouncing = (function () {
    function Bouncing(b) {
        console.log('bouncezzz');
        this.ball = b;
    }
    Bouncing.prototype.update = function () {
        if (this.ball.x < this.ball.minWidth) {
            this.ball.x = this.ball.minWidth;
            this.ball.speedX *= -1;
            this.ball.speedX *= this.ball.friction;
        }
        if (this.ball.x > this.ball.maxWidth) {
            this.ball.x = this.ball.maxWidth;
            this.ball.speedX *= -1;
            this.ball.speedX *= this.ball.friction;
        }
        if (this.ball.y + this.ball.speedY > this.ball.maxHeight) {
            this.ball.y = this.ball.maxHeight;
            this.ball.speedY *= -1;
            this.ball.speedY *= this.ball.friction;
            this.ball.speedX *= this.ball.friction;
        }
        else {
            this.ball.speedY += this.ball.gravity;
        }
        this.ball.x += this.ball.speedX;
        this.ball.y += this.ball.speedY;
    };
    return Bouncing;
}());
var Floating = (function () {
    function Floating(b) {
        console.log('floatingzzz');
        this.ball = b;
    }
    Floating.prototype.update = function () {
        this.ball.x += this.ball.speedX;
        this.ball.y += this.ball.speedY;
        if (this.ball.x < this.ball.minWidth || this.ball.x > this.ball.maxWidth) {
            this.ball.speedX *= -1;
        }
        if (this.ball.y < 0 || this.ball.y > this.ball.maxHeight) {
            this.ball.speedY *= -1;
        }
    };
    return Floating;
}());
//# sourceMappingURL=main.js.map