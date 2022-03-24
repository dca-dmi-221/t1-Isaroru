class MusicPlayer {
    constructor(app) {
        this.app = app;
        this.s1 = this.app.loadSound('sources/Start_Of_Something_New.mp3');
        this.s2 = this.app.loadSound('sources/Getcha_Head_In_The_Game.mp3');
        this.s3 = this.app.loadSound('sources/What-I-ve-Been-Looking-For.mp3');
        this.s4 = this.app.loadSound('sources/Stick-to-the-Status-Quo.mp3');
        this.s5 = this.app.loadSound('sources/When-There-Was-Me-and-You.mp3');
        this.s6 = this.app.loadSound('sources/Bop-To-The-Top.mp3');
        this.s7 = this.app.loadSound('sources/Breaking-Free.mp3');
        this.s8 = this.app.loadSound('sources/We_re-All-In-This-Together.mp3');

        this.s9 = this.app.loadSound('sources/What-Time-Is-It.mp3');
        this.s10 = this.app.loadSound('sources/Fabulous.mp3');
        this.s11 = this.app.loadSound('sources/Work-This-Out.mp3');
        this.s12 = this.app.loadSound('sources/You-Are-the-Music-in-Me.mp3');
        this.s13 = this.app.loadSound('sources/I-Don_t-Dance.mp3');
        this.s14 = this.app.loadSound('sources/Gotta-Go-My-Own-Way.mp3');
        this.s15 = this.app.loadSound('sources/Everyday.mp3');
        this.s16 = this.app.loadSound('sources/All-For-One.mp3');

        this.playlists = [];
        this.init();
    }
    init() {
        this.playlists.push(new Playlist('HSM1'));
        //playlist 1
        this.playlists[0].files.push(new Song({
            name: 'Start of something new',
            year: 2006,
            duration: 197,
            artist: 'Vanessa Hudgens & Zac Efron',
            audio: this.s1
        }));
        this.playlists[0].files.push(new Song({
            name: 'Getcha Head In The Game',
            year: 2006,
            duration: 148,
            artist: 'Drew Seeley',
            audio: this.s2
        }));
        this.playlists[0].files.push(new Song({
            name: 'What Ive Been Looking For',
            year: 2006,
            duration: 124,
            artist: 'Ashley Tisdale & Lucas Grabeel',
            audio: this.s3
        }));
        this.playlists[0].files.push(new Song({
            name: 'Stick To The Status Quo',
            year: 2006,
            duration: 268,
            artist: 'Cast of HSM',
            audio: this.s4
        }));
        this.playlists[0].files.push(new Song({
            name: 'When There Was Me and You',
            year: 2006,
            duration: 180,
            artist: 'Vanessa Hudgens',
            audio: this.s5
        }));
        this.playlists[0].files.push(new Song({
            name: 'Bop-To-The-Top',
            year: 2006,
            duration: 108,
            artist: 'Ashley Tisdale & Lucas Grabeel',
            audio: this.s6
        }));
        this.playlists[0].files.push(new Song({
            name: 'Breaking Free',
            year: 2006,
            duration: 207,
            artist: 'Vanessa Hudgens & Zac Efron',
            audio: this.s7
        }));
        this.playlists[0].files.push(new Song({
            name: 'We re All In This Together',
            year: 2006,
            duration: 231,
            artist: 'Vanessa Hudgens, Zac Efron, Lucas Grabeel, Ashley Tisdale',
            audio: this.s8
        }));

        //playlist 2
        this.playlists.push(new Playlist('HSM2'));
        this.playlists[1].files.push(new Song({
            name: 'What Time Is It',
            year: 2007,
            duration: 205,
            artist: 'Cast of HSM',
            audio: this.s9
        }));
        this.playlists[1].files.push(new Song({
            name: 'Fabulous',
            year: 2007,
            duration: 211,
            artist: 'Ashley Tisdale & Lucas Grabeel',
            audio: this.s10
        }));
        this.playlists[1].files.push(new Song({
            name: 'Work This Out',
            year: 2007,
            duration: 191,
            artist: 'Cast of HSM',
            audio: this.s11
        }));
        this.playlists[1].files.push(new Song({
            name: 'You Are The Music In Me',
            year: 2007,
            duration: 212,
            artist: 'Vanessa Hudgens & Zac Efron',
            audio: this.s12
        }));
        this.playlists[1].files.push(new Song({
            name: 'I Dont Dance',
            year: 2007,
            duration: 241,
            artist: 'Corbin Bleu & Lucas Grabeel',
            audio: this.s13
        }));
        this.playlists[1].files.push(new Song({
            name: 'Gotta Go My Own Way',
            year: 2007,
            duration: 224,
            artist: 'Vanessa Hudgens & Zac Efron',
            audio: this.s14
        }));
        this.playlists[1].files.push(new Song({
            name: 'Everyday',
            year: 2007,
            duration: 284,
            artist: 'Vanessa Hudgens & Zac Efron',
            audio: this.s15
        }));
        this.playlists[1].files.push(new Song({
            name: 'All For One',
            year: 2007,
            duration: 258,
            artist: 'Cast of HSM',
            audio: this.s16
        }));


    }

    playSongBySong() {
        if (mouseX > 840 && mouseY > 218 && mouseX < 1053 && mouseY < 434) {
            if (this.s1.isPlaying()) {
                this.s1.stop();
            } else {
                this.s1.play();
            }
        }
        if (mouseX > 1104 && mouseY > 218 && mouseX < 1319 && mouseY < 434) {
            if (this.s2.isPlaying()) {
                this.s2.stop();
            } else {
                this.s2.play();
            }
        }
        if (mouseX > 1370 && mouseY > 218 && mouseX < 1583 && mouseY < 434) {
            if (this.s3.isPlaying()) {
                this.s3.stop();
            } else {
                this.s3.play();
            }
        }
        if (mouseX > 1633 && mouseY > 218 && mouseX < 1843 && mouseY < 434) {
            if (this.s4.isPlaying()) {
                this.s4.stop();
            } else {
                this.s4.play();
            }
        }
        if (mouseX > 840 && mouseY > 559 && mouseX < 1053 && mouseY < 773) {
            if (this.s5.isPlaying()) {
                this.s5.stop();
            } else {
                this.s5.play();
            }
        }
        if (mouseX > 1104 && mouseY > 559 && mouseX < 1319 && mouseY < 773) {
            if (this.s6.isPlaying()) {
                this.s6.stop();
            } else {
                this.s6.play();
            }
        }
        if (mouseX > 1370 && mouseY > 559 && mouseX < 1583 && mouseY < 773) {
            if (this.s7.isPlaying()) {
                this.s7.stop();
            } else {
                this.s7.play();
            }
        }
        if (mouseX > 1633 && mouseY > 559 && mouseX < 1843 && mouseY < 773) {
            if (this.s8.isPlaying()) {
                this.s8.stop();
            } else {
                this.s8.play();
            }
        }

    }

    nowPlaying() {
        for (let i = 0; i < this.playlists.length; i++) {
            const list = this.playlists[i];
            for (let j = 0; j < list.length; j++) {
                const song = list.files[j];
                if (song.audio.isPlaying()) {
                    console.log(song.audio);
                }
            }
        }
    }

    pause() {
        for (let i = 0; i < this.playlists.length; i++) {
            const list = this.playlists[i];
            for (let j = 0; j < list.length; j++) {
                const song = list.files[j];
                if (song.audio.isPlaying()) {
                    song.audio.pause();
                }
            }
        }
    }

    stop() {
        for (let i = 0; i < this.playlists.length; i++) {
            const list = this.playlists[i];
            for (let j = 0; j < list.length; j++) {
                const song = list.files[j];
                song.audio.stop();
            }
        }
    }

    playPlaylist(screen) {
        switch (screen) {
            case 1:
                if (this.playlists[0].files[0].audio.isPlaying()) {
                    this.playlists[0].files[0].audio.stop();
                } else if (mouseX > 510 && mouseY > 731 && mouseX < 654 && mouseY < 784) {
                    this.playlists[0].files[0].audio.play();
                }
                break;
            case 2:
                if (this.playlists[1].files[0].audio.isPlaying()) {
                    this.playlists[1].files[0].audio.stop();
                } else if (mouseX > 510 && mouseY > 731 && mouseX < 654 && mouseY < 784) {
                    this.playlists[1].files[0].audio.play();
                }
                break;
            case 3:
                if (this.playlists[2].files[0].audio.isPlaying()) {
                    this.playlists[2].files[0].audio.stop();
                } else if (mouseX > 510 && mouseY > 731 && mouseX < 654 && mouseY < 784) {
                    this.playlists[2].files[0].audio.play();
                }
                break;

        }
    }
}