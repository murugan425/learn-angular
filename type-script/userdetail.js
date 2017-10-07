"use strict";
exports.__esModule = true;
var UserDetail = /** @class */ (function () {
    function UserDetail(x) {
        var _this = this;
        this.x = x;
        // Normal way of implementing  getters and setters
        this.getName = function () { return _this.username; };
        this.setName = function (nameparam) {
            if (nameparam.length < 0) {
                throw new Error('UserName cannot be blank.');
            }
            _this.username = nameparam;
        };
        this.username = x;
    }
    ;
    Object.defineProperty(UserDetail.prototype, "AGE", {
        // Using getters and setters directly in a different way is called Properties in Typescript
        get: function () {
            return this.age;
        },
        set: function (x) {
            if (this.age < 0) {
                throw new Error('Age cannot be negative value.');
            }
            this.age = x;
        },
        enumerable: true,
        configurable: true
    });
    ;
    UserDetail.prototype.printUserName = function () { console.log(this.getName()); };
    UserDetail.prototype.printUserAge = function () { console.log(this.getName() + ' age is ' + this.AGE); };
    return UserDetail;
}());
exports.UserDetail = UserDetail;
