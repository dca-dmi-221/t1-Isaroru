class Logic {
    constructor(app) {
        this.app = app;
        this.home = this.app.loadImage('sources/home.png');
        this.hsm1 = this.app.loadImage('sources/HSM1.png');
        this.hsm2 = this.app.loadImage('sources/HSM2.png');
        this.hsm3 = this.app.loadImage('sources/HSM3.png');
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
        }
    }

}