class Slider {
    constructor(type) {

        this.ball = {
            x: 64,
            y: 1010,
            r: 16
        }

        this.rectangleD = {
            x: 64,
            y: 1010,
            w: 1779,
            h: 6
        }

        this.rectangleV = {
            x: 1724,
            y: 947,
            w: 1779,
            h: 6
        }

        this.type = type;

    }

    drawSlider(time, duration){
        noStroke();
        fill(255);
        if (this.type === "head") {
            rectMode(CORNER);
            rect(this.rectangleD.x,this.rectangleD.y,this.rectangleD.w,this.rectangleD.h)
            ellipseMode(CENTER)
            ellipse(this.ball.x,this.ball.y,this.ball.r*2)
            
        }
    }

    dragSlider(){
        if(dist(mouseX,mouseY, this.ball.x,this.ball.y) < this.ball.r){
            const limites = {
              x1: this.rectangleD.x,
              x2: this.rectangleD.x + this.rectangleD.w,
            }
            const isInRange = mouseX > limites.x1 && mouseX < limites.x2;
            if(isInRange){
              this.ball.x = mouseX;
              
              if(this.type === 'volume') {
                const volume = map(mouseX, limites.x1,limites.x2, 0,100) / 100;
                song.setVolume(volume);
                this.ball.x = mouseX;
              } else if (type === "head") {
                const head = map(mouseX, limites.x1,limites.x2, 0,song.duration());
                song.currentTime(head);
              }
        
            }
          }
    }


}