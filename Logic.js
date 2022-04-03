class Logic {
    constructor(app) {
        this.app = app;
        this.home = this.app.loadImage('sources/home.png');
        this.hsm1 = this.app.loadImage('sources/HSM1.png');
        this.hsm2 = this.app.loadImage('sources/HSM2.png');
        this.hsm3 = this.app.loadImage('sources/HSM3.png');
        this.p4 = this.app.loadImage('sources/P4.png');
        this.screen = 0;
        
    }

    showScreen() {
        switch (this.screen) {
            case 0:
                this.app.image(this.home, 0, 0);
                break;
            case 1:
                this.app.image(this.hsm1, 0, 0);
                break;
            case 2:
                this.app.image(this.hsm2, 0, 0);
                break;
            case 3:
                this.app.image(this.hsm3, 0, 0);
                break;
            case 4:
                this.app.image(this.p4, 0, 0);
                break;
        }
    }

    switchScreen(){
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
              if (mouseX > 1361 && mouseY > 640 && mouseX < 1722 && mouseY < 998) {
                this.screen = 4;
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