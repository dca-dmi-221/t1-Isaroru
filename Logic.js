class Logic{
    constructor (app){
        this.app = app;
        this.s1 = this.app.loadSound('sources/Start_Of_Something_New.mp3');
        this.song1 = new Song('Start of something new',2006,197,'Vanessa Hudgens & Zac Efron');
        this.s2 = this.app.loadSound('sources/Getcha_Head_In_The_Game.mp3');
        this.song2 = new Song('Getcha Head In The Game',2006,148,'Drew Seeley');
        this.s3 = this.app.loadSound('sources/What-I-ve-Been-Looking-For.mp3');
        this.song3 = new Song('What Ive Been Looking For',2006,124,'Ashley Tisdale & Lucas Grabeel');
        this.s4 = this.app.loadSound('sources/Stick-to-the-Status-Quo.mp3');
        this.song4 = new Song('Stick To The Status Quo',2006,268,'Cast of HSM');
        this.s5 = this.app.loadSound('sources/When-There-Was-Me-and-You.mp3');
        this.song5 = new Song('When There Was Me and You',2006,180,'Vanessa Hudgens');
        this.s6 = this.app.loadSound('sources/Bop-To-The-Top.mp3');
        this.song6 = new Song('Bop-To-The-Top',2006,108,'Ashley Tisdale & Lucas Grabeel');
        this.s7 = this.app.loadSound('sources/Breaking-Free.mp3');
        this.song7 = new Song('Breaking Free',2006,207,'Vanessa Hudgens & Zac Efron');
        this.s8 = this.app.loadSound('sources/We_re-All-In-This-Together.mp3');
        this.song8 = new Song('We re All In This Together',2006,231,'Vanessa Hudgens, Zac Efron, Lucas Grabeel, Ashley Tisdale');
    }
}