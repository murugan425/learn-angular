"use strict";
exports.__esModule = true;
var like_component_1 = require("./like.component");
var likeComp = new like_component_1.LikeComponent(10, true);
likeComp.onEffectiveClickImpl();
console.log('LIKESCOUNT: ' + likeComp.likeCount + ' , SELECTED: ' + likeComp.isActive);
