class Logic {
    constructor(app) {
        this.app = app;
        this.home = this.app.loadImage('sources/home.png');
        this.hsm1 = this.app.loadImage('sources/HSM1.png');
        this.s1 = this.app.loadSound('sources/Start_Of_Something_New.mp3');
        this.s2 = this.app.loadSound('sources/Getcha_Head_In_The_Game.mp3');
        this.s3 = this.app.loadSound('sources/What-I-ve-Been-Looking-For.mp3');
        this.s4 = this.app.loadSound('sources/Stick-to-the-Status-Quo.mp3');
        this.s5 = this.app.loadSound('sources/When-There-Was-Me-and-You.mp3');
        this.s6 = this.app.loadSound('sources/Bop-To-The-Top.mp3');
        this.s7 = this.app.loadSound('sources/Breaking-Free.mp3');
        this.s8 = this.app.loadSound('sources/We_re-All-In-This-Together.mp3');
        this.player = new MusicPlayer();
        this.screen = 0;
        this.songs = [this.s1,this.s2,this.s3,this.s4,this.s5,this.s6,this.s7,this.s8];
    }

    showScreen() {
        switch (this.screen) {
            case 0:
                this.app.image(this.home, 0, 0);
                break;
            case 1:
                this.app.image(this.hsm1, 0, 0);
                break;
        }
    }

    playSongBySong() {
        if (mouseX > 840 && mouseY > 218 && mouseX < 1053 && mouseY < 434) {
            if (this.s1.isPlaying()) {
                this.s1.stop();
            }else{
                this.s1.play();
            }
        }
        if (mouseX > 1104 && mouseY > 218 && mouseX < 1319 && mouseY < 434) {
            if (this.s2.isPlaying()) {
                this.s2.stop();
            }else{
                this.s2.play();
            }
        }
        if (mouseX > 1370 && mouseY > 218 && mouseX < 1583 && mouseY < 434) {
            if (this.s3.isPlaying()) {
                this.s3.stop();
            }else{
                this.s3.play();
            }
        }
        if (mouseX > 1633 && mouseY > 218 && mouseX < 1843 && mouseY < 434) {
            if (this.s4.isPlaying()) {
                this.s4.stop();
            }else{
                this.s4.play();
            }
        }
        if (mouseX > 840 && mouseY > 559 && mouseX < 1053 && mouseY < 773) {
            if (this.s5.isPlaying()) {
                this.s5.stop();
            }else{
                this.s5.play();
            }
        }
        if (mouseX > 1104 && mouseY > 559 && mouseX < 1319 && mouseY < 773) {
            if (this.s6.isPlaying()) {
                this.s6.stop();
            }else{
                this.s6.play();
            }
        }
        if (mouseX > 1370 && mouseY > 559 && mouseX < 1583 && mouseY < 773) {
            if (this.s7.isPlaying()) {
                this.s7.stop();
            }else{
                this.s7.play();
            }
        }
        if (mouseX > 1633 && mouseY > 559 && mouseX < 1843 && mouseY < 773) {
            if (this.s8.isPlaying()) {
                this.s8.stop();
            }else{
                this.s8.play();
            }
        }

    }

}