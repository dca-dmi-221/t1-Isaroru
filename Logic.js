class Logic {
  constructor() {
    this.home = loadImage('sources/home.png');
    this.hsm1 = loadImage('sources/HSM1.png');
    this.hsm2 = loadImage('sources/HSM2.png');
    this.hsm3 = loadImage('sources/HSM3.png');
    this.p4 = loadImage('sources/P4.png');
    this.screen = 0;

    this.cover1 = loadImage('sources/cover 1.png');
    this.cover2 = loadImage('sources/cover 2.png');
    this.cover3 = loadImage('sources/cover 3.png');

    this.songCovers = [];
    this.selectedSong = this.songCovers[0];
    this.selectedPl = false;
  }

  showScreen() {
    switch (this.screen) {
      case 0:
        image(this.home, 0, 0);
        break;
      case 1:
        image(this.hsm1, 0, 0);
        break;
      case 2:
        image(this.hsm2, 0, 0);
        break;
      case 3:
        image(this.hsm3, 0, 0);
        break;
      case 4:
        image(this.p4, 0, 0);
        break;
    }
  }

  drawSongs() {
    let xi = 840;
    let yi = -130;
    const stepX = 264;
    switch (this.screen) {
      case 1:
        for (let i = 0; i < 8; i++) {
          const mod = i % 4;
          if (mod === 0) {
            yi += 345;
          }
          const x = xi + (stepX * mod);
          const y = yi;
          image(this.cover1, x, y);
        }
        break;
      case 2:
        for (let i = 0; i < 8; i++) {
          const mod = i % 4;
          if (mod === 0) {
            yi += 345;
          }
          const x = xi + (stepX * mod);
          const y = yi;
          image(this.cover2, x, y);
        }
        break;
      case 3:
        for (let i = 0; i < 8; i++) {
          const mod = i % 4;
          if (mod === 0) {
            yi += 345;
          }
          const x = xi + (stepX * mod);
          const y = yi;
          image(this.cover3, x, y);
        }
        break;
      case 4:
        break;

    }
  }

  switchScreen(newPlaylist) {
    switch (this.screen) {
      case 0:
        if (mouseX > 197 && mouseY > 640 && mouseX < 554 && mouseY < 998) {
          this.screen = 1;
        }
        if (mouseX > 584 && mouseY > 640 && mouseX < 945 && mouseY < 998) {
          this.screen = 2;
        }
        if (mouseX > 976 && mouseY > 640 && mouseX < 1333 && mouseY < 998) {
          this.screen = 3;
        }
        if (newPlaylist === true) {
          if (mouseX > 1361 && mouseY > 640 && mouseX < 1722 && mouseY < 998) {
            this.screen = 4;
          }
        }

        break;
      case 1:
        if (mouseX > 347 && mouseY > 32 && mouseX < 486 && mouseY < 52) {
          this.screen = 0;
        }
        break;
      case 2:
        if (mouseX > 347 && mouseY > 32 && mouseX < 486 && mouseY < 52) {
          this.screen = 0;
        }
        break;
      case 3:
        if (mouseX > 347 && mouseY > 32 && mouseX < 486 && mouseY < 52) {
          this.screen = 0;
        }
        break;
      case 4:
        if (mouseX > 347 && mouseY > 32 && mouseX < 486 && mouseY < 52) {
          this.screen = 0;
        }
        break;
    }
  }

}