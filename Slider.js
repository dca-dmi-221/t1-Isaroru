class Slider {
  constructor(type) {
    this.ballV = {
      x: 1800,
      y: 950,
      r: 16
    }

    this.rectangleD = {
      x: 64,
      y: 1010,
      w: 1779,
      h: 10
    }

    this.rectangleV = {
      x: 1724,
      y: 947,
      w: 116,
      h: 6
    }

    this.type = type;
  }

  drawSliderD(currentTime,duration) {
    noStroke();
    fill(191,195,186);
    rect(this.rectangleD.x, this.rectangleD.y, this.rectangleD.w, this.rectangleD.h);
    const mapTime = map(currentTime,0,duration,0,this.rectangleD.w);
    fill(255,255,0);
    rect(64,1010,mapTime,15);
  }

  drawSliderV(){
    noStroke();
    rectMode(CORNER);
    fill(191,195,186);
    rect(this.rectangleV.x, this.rectangleV.y, this.rectangleV.w, this.rectangleV.h);
    fill(255,255,0);
    ellipse(this.ballV.x, this.ballV.y, this.ballV.r)
  }

  dragSlider(song) {
      const limites = {
        x1: this.rectangleD.x,
        x2: this.rectangleD.x + this.rectangleD.w,
        y1: this.rectangleD.y-2,
        y2: this.rectangleD.y + this.rectangleD.h+2
      }
      const isInRange = mouseX > limites.x1 && mouseX < limites.x2 && mouseY > limites.y1 && mouseY < limites.y2;
      if (isInRange) {
        if (this.type === "head") {
          const head = map(mouseX, limites.x1, limites.x2, 0, song.duration());
          //song.currentTime(head);
          song.jump(head);
          
        }
    }

    if (dist(mouseX, this.ballV.x, this.ballV.y) < this.ballV.r) {
      const limitesV = {
        x1: this.rectangleV.x,
        x2: this.rectangleV.x + this.rectangleV.w,
        y1: this.rectangleV.y,
        y2: this.rectangleV.y + this.rectangleV.h
      }
      const isInRange = mouseX > limitesV.x1 && mouseX < limitesV.x2 && mouseY > limitesV.y1 && mouseY < limitesV.y2;
      if (isInRange) {
        if (this.type === 'volume') {
          const volume = map(mouseX, limitesV.x1, limitesV.x2, 0, 100) / 100;
          song.audio.setVolume(volume);
          this.ballV.x = mouseX;
        }
      }
    }    
  }

}