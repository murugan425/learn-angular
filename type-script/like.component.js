"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likeCount, isActive) {
        this.likeCount = likeCount;
        this.isActive = isActive;
    }
    LikeComponent.prototype.onSimpleClick = function () {
        if (this.isActive) {
            this.likeCount--;
            this.isActive = false;
        }
        else {
            this.likeCount++;
            this.isActive = true;
        }
    };
    LikeComponent.prototype.onEffectiveClickImpl = function () {
        this.likeCount += this.isActive ? -1 : 1;
        this.isActive = !this.isActive;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
