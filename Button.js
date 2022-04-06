class Button {
    constructor({x,y}){
        this.x = x;
        this.y = y;
        this.playB= loadImage('sources/play.png');
        this.pauseB= loadImage('sources/pause.png');
        this.isPlaying= false;
    }

    drawButton(){
        if(!this.isPlaying){
            image(this.playB,this.x,this.y);
        } else {
            image(this.pauseB,this.x,this.y);
        }

    }

    setIsPlaying(newValue){
        this.isPlaying= newValue;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
}