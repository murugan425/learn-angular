export class LikeComponent {
    constructor (public likeCount: number, public isActive: boolean) {}

    onSimpleClick() {
        if(this.isActive) {
            this.likeCount--;
            this.isActive = false;
        }
        else {
            this.likeCount++;
            this.isActive = true;
        }
    }

    onEffectiveClickImpl() {
        this.likeCount += this.isActive? -1: 1;
        this.isActive = !this.isActive;
    }
}