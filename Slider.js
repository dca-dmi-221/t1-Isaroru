class Slider {
  constructor(type) {

    this.ballD = {
      x: 64,
      y: 1013,
      r: 16
    }

    this.ballV = {
      x: 1760,
      y: 950,
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
      w: 116,
      h: 6
    }

    this.type = type;

  }

  drawSlider(time, duration) {
    noStroke();
    fill(255);
    if (this.type === "head") {
      rectMode(CORNER);
      rect(this.rectangleD.x, this.rectangleD.y, this.rectangleD.w, this.rectangleD.h)
      ellipse(this.ballD.x, this.ballD.y, this.ballD.r)
    } else if (this.type === "volume") {
      rectMode(CORNER);
      rect(this.rectangleV.x, this.rectangleV.y, this.rectangleV.w, this.rectangleV.h)
      ellipse(this.ballV.x, this.ballV.y, this.ballV.r)
    }
  }

  dragSlider(song) {
    if (dist(mouseX, mouseY, this.ballD.x, this.ballD.y) < this.ballD.r) {
      const limites = {
        x1: this.rectangleD.x,
        x2: this.rectangleD.x + this.rectangleD.w,
      }
      const isInRange = mouseX > limites.x1 && mouseX < limites.x2;
      if (isInRange) {
        this.ballD.x = mouseX;

        if (type === "head") {
          const head = map(mouseX, limites.x1, limites.x2, 0, song.duration());
          song.currentTime(head);
        }
      }
    }

    if (dist(mouseX, mouseY, this.ballV.x, this.ballV.y) < this.ballV.r) {
      const limites = {
        x1: this.rectangleV.x,
        x2: this.rectangleV.x + this.rectangleV.w,
      }
      const isInRange = mouseX > limites.x1 && mouseX < limites.x2;
      if (isInRange) {
        this.ballV.x = mouseX;

        if (this.type === 'volume') {
          const volume = map(mouseX, limites.x1, limites.x2, 0, 100) / 100;
          song.setVolume(volume);
          this.ball.x = mouseX;
        }
        
      }
    }    

  }
}