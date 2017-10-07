import { LikeComponent } from './like.component'

let likeComp = new LikeComponent(10, true);
likeComp.onEffectiveClickImpl();
console.log('LIKESCOUNT: '+ likeComp.likeCount +' , SELECTED: '+ likeComp.isActive);