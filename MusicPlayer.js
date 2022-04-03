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

        this.s17 = this.app.loadSound('sources/Now-or-Never.mp3');
        this.s18 = this.app.loadSound('sources/Right-Here_-Right.mp3');
        this.s19 = this.app.loadSound('sources/I-Want-It-All.mp3');
        this.s20 = this.app.loadSound('sources/Can-I-Have-This-Dance.mp3');
        this.s21 = this.app.loadSound('sources/A-Night-to-Remember.mp3');
        this.s22 = this.app.loadSound('sources/Just-Wanna-Be-With-You.mp3');
        this.s23 = this.app.loadSound('sources/The-Boys-Are-Back.mp3');
        this.s24 = this.app.loadSound('sources/Scream.mp3');

        this.cover1 = this.app.loadImage('sources/cover 1.png');
        this.cover2 = this.app.loadImage('sources/cover 2.png');
        this.cover3 = this.app.loadImage('sources/cover 3.png');
        this.coverp4 = this.app.loadImage('sources/cover 4.png');

        this.playlists = [];
        this.init();
        this.nowPlaying ;
        this.volumeSlider = new Slider('volume');
        this.durationSlider = new Slider('head');
    }

    init() {
        this.playlists.push(new Playlist('HSM1'));
        //playlist 1
        this.playlists[0].files.push(new Song({
            name: 'Start of something new',
            year: 2006,
            duration: 197,
            artist: 'Vanessa Hudgens & Zac Efron',
            audio: this.s1,
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
            name: 'Bop To The Top',
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

        //playlist 3
        this.playlists.push(new Playlist('HSM3'));
        this.playlists[2].files.push(new Song({
            name: 'Now or Never',
            year: 2008,
            duration: 273,
            artist: 'Cast of HSM',
            audio: this.s17
        }));
        this.playlists[2].files.push(new Song({
            name: 'Right Here Right Now',
            year: 2008,
            duration: 238,
            artist: 'Ashley Tisdale & Lucas Grabeel',
            audio: this.s18
        }));
        this.playlists[2].files.push(new Song({
            name: 'I Want It All',
            year: 2008,
            duration: 279,
            artist: 'Ashley Tisdale & Lucas Grabeel',
            audio: this.s19
        }));
        this.playlists[2].files.push(new Song({
            name: 'Can I Have This Dance',
            year: 2008,
            duration: 144,
            artist: 'Vanessa Hudgens & Zac Efron',
            audio: this.s20
        }));
        this.playlists[2].files.push(new Song({
            name: 'A Night to Remember',
            year: 2008,
            duration: 239,
            artist: 'Cast of HSM',
            audio: this.s21
        }));
        this.playlists[2].files.push(new Song({
            name: 'Just Wanna Be With You',
            year: 2008,
            duration: 158,
            artist: 'Vanessa Hudgens & Zac Efron',
            audio: this.s22
        }));
        this.playlists[2].files.push(new Song({
            name: 'The Boys Are Back',
            year: 2008,
            duration: 227,
            artist: 'Corbin Bleu & Zac Efron',
            audio: this.s23
        }));
        this.playlists[2].files.push(new Song({
            name: 'Scream',
            year: 2008,
            duration: 237,
            artist: 'Cast of HSM',
            audio: this.s24
        }));

        

    }

    drawSongs(screen){
        let xi = 840;
        let yi = -130;
        const stepX = 264;
        for (let i = 0; i < this.playlists.length; i++) {
            const playlist = this.playlists[i];
            for (let j = 0; j < playlist.files.length; j++) {
                const song = playlist.files[j];
                this.nowPlaying = song.nowPlaying();
                song.showCurrentTime();
                song.showDuration();
            }
        }
        switch (screen) {
            case 1:
                for (let i = 0; i < 8; i++) {
                    const mod = i % 4;
                    if (mod === 0) {
                        yi += 345;
                    }
                    const x = xi + (stepX * mod);
                    const y = yi ;
                    this.app.image(this.cover1, x, y);
                }
                this.durationSlider.drawSlider();
                this.volumeSlider.drawSlider();
                break;
            case 2:
                for (let i = 0; i < 8; i++) {
                    const mod = i % 4;
                    if (mod === 0) {
                        yi += 345;
                    }
                    const x = xi + (stepX * mod);
                    const y = yi ;
                    this.app.image(this.cover2, x, y);
                }                
                this.durationSlider.drawSlider();
                this.volumeSlider.drawSlider();
                break;
            case 3:
                for (let i = 0; i < 8; i++) {
                    const mod = i % 4;
                    if (mod === 0) {
                        yi += 345;
                    }
                    const x = xi + (stepX * mod);
                    const y = yi ;
                    this.app.image(this.cover3, x, y);
                }             
                this.durationSlider.drawSlider();   
                this.volumeSlider.drawSlider();
                break;
            case 4:
                this.durationSlider.drawSlider();
                this.volumeSlider.drawSlider();
                break;
                
        }
    }

    playSongBySong(screen) {
        if (mouseX > 840 && mouseY > 218 && mouseX < 1053 && mouseY < 434) {
            switch (screen) {
                case 1:
                    if (this.playlists[0].files[0].audio.isPlaying()) {
                        this.playlists[0].files[0].audio.stop();
                    } else {
                        this.playlists[0].files[0].audio.play();
                    }
                    break;
                case 2:
                    if (this.playlists[1].files[0].audio.isPlaying()) {
                        this.playlists[1].files[0].audio.stop();
                    } else {
                        this.playlists[1].files[0].audio.play();
                    }
                    break;
                case 3:
                    if (this.playlists[2].files[0].audio.isPlaying()) {
                        this.playlists[2].files[0].audio.stop();
                    } else {
                        this.playlists[2].files[0].audio.play();
                    }
                    break;
                case 3:
                    if (this.playlists[3].files[0].audio.isPlaying()) {
                        this.playlists[3].files[0].audio.stop();
                    } else {
                        this.playlists[3].files[0].audio.play();
                    }
                    break;
            }
        }
        if (mouseX > 1104 && mouseY > 218 && mouseX < 1319 && mouseY < 434) {
            switch (screen) {
                case 1:
                    if (this.playlists[0].files[1].audio.isPlaying()) {
                        this.playlists[0].files[1].audio.stop();
                    } else {
                        this.playlists[0].files[1].audio.play();
                    }
                    break;
                case 2:
                    if (this.playlists[1].files[1].audio.isPlaying()) {
                        this.playlists[1].files[1].audio.stop();
                    } else {
                        this.playlists[1].files[1].audio.play();
                    }
                    break;
                case 3:
                    if (this.playlists[2].files[1].audio.isPlaying()) {
                        this.playlists[2].files[1].audio.stop();
                    } else {
                        this.playlists[2].files[1].audio.play();
                    }
                    break;
                case 4:
                    if (this.playlists[3].files[1].audio.isPlaying()) {
                        this.playlists[3].files[1].audio.stop();
                    } else {
                        this.playlists[3].files[1].audio.play();
                    }
                    break;
            }
        }
        if (mouseX > 1370 && mouseY > 218 && mouseX < 1583 && mouseY < 434) {
            switch (screen) {
                case 1:
                    if (this.playlists[0].files[2].audio.isPlaying()) {
                        this.playlists[0].files[2].audio.stop();
                    } else {
                        this.playlists[0].files[2].audio.play();
                    }
                    break;
                case 2:
                    if (this.playlists[1].files[2].audio.isPlaying()) {
                        this.playlists[1].files[2].audio.stop();
                    } else {
                        this.playlists[1].files[2].audio.play();
                    }
                    break;
                case 3:
                    if (this.playlists[2].files[2].audio.isPlaying()) {
                        this.playlists[2].files[2].audio.stop();
                    } else {
                        this.playlists[2].files[2].audio.play();
                    }
                    break;
                case 4:
                    if (this.playlists[3].files[2].audio.isPlaying()) {
                        this.playlists[3].files[2].audio.stop();
                    } else {
                        this.playlists[3].files[2].audio.play();
                    }
                    break;
            }
        }
        if (mouseX > 1633 && mouseY > 218 && mouseX < 1843 && mouseY < 434) {
            switch (screen) {
                case 1:
                    if (this.playlists[0].files[3].audio.isPlaying()) {
                        this.playlists[0].files[3].audio.stop();
                    } else {
                        this.playlists[0].files[3].audio.play();
                    }
                    break;
                case 2:
                    if (this.playlists[1].files[3].audio.isPlaying()) {
                        this.playlists[1].files[3].audio.stop();
                    } else {
                        this.playlists[1].files[3].audio.play();
                    }
                    break;
                case 3:
                    if (this.playlists[2].files[3].audio.isPlaying()) {
                        this.playlists[2].files[3].audio.stop();
                    } else {
                        this.playlists[2].files[3].audio.play();
                    }
                    break;
                case 4:
                    if (this.playlists[3].files[3].audio.isPlaying()) {
                        this.playlists[3].files[3].audio.stop();
                    } else {
                        this.playlists[3].files[3].audio.play();
                    }
                    break;
            }
        }
        if (mouseX > 840 && mouseY > 559 && mouseX < 1053 && mouseY < 773) {
            switch (screen) {
                case 1:
                    if (this.playlists[0].files[4].audio.isPlaying()) {
                        this.playlists[0].files[4].audio.stop();
                    } else {
                        this.playlists[0].files[4].audio.play();
                    }
                    break;
                case 2:
                    if (this.playlists[1].files[4].audio.isPlaying()) {
                        this.playlists[1].files[4].audio.stop();
                    } else {
                        this.playlists[1].files[4].audio.play();
                    }
                    break;
                case 3:
                    if (this.playlists[2].files[4].audio.isPlaying()) {
                        this.playlists[2].files[4].audio.stop();
                    } else {
                        this.playlists[2].files[4].audio.play();
                    }
                    break;
                case 4:
                    if (this.playlists[3].files[4].audio.isPlaying()) {
                        this.playlists[3].files[4].audio.stop();
                    } else {
                        this.playlists[3].files[4].audio.play();
                    }
                    break;
            }
        }
        if (mouseX > 1104 && mouseY > 559 && mouseX < 1319 && mouseY < 773) {
            switch (screen) {
                case 1:
                    if (this.playlists[0].files[5].audio.isPlaying()) {
                        this.playlists[0].files[5].audio.stop();
                    } else {
                        this.playlists[0].files[5].audio.play();
                    }
                    break;
                case 2:
                    if (this.playlists[1].files[5].audio.isPlaying()) {
                        this.playlists[1].files[5].audio.stop();
                    } else {
                        this.playlists[1].files[5].audio.play();
                    }
                    break;
                case 3:
                    if (this.playlists[2].files[5].audio.isPlaying()) {
                        this.playlists[2].files[5].audio.stop();
                    } else {
                        this.playlists[2].files[5].audio.play();
                    }
                    break;
                case 4:
                    if (this.playlists[3].files[5].audio.isPlaying()) {
                        this.playlists[3].files[5].audio.stop();
                    } else {
                        this.playlists[3].files[5].audio.play();
                    }
                    break;
            }
        }
        if (mouseX > 1370 && mouseY > 559 && mouseX < 1583 && mouseY < 773) {
            switch (screen) {
                case 1:
                    if (this.playlists[0].files[6].audio.isPlaying()) {
                        this.playlists[0].files[6].audio.stop();
                    } else {
                        this.playlists[0].files[6].audio.play();
                    }
                    break;
                case 2:
                    if (this.playlists[1].files[6].audio.isPlaying()) {
                        this.playlists[1].files[6].audio.stop();
                    } else {
                        this.playlists[1].files[6].audio.play();
                    }
                    break;
                case 3:
                    if (this.playlists[2].files[6].audio.isPlaying()) {
                        this.playlists[2].files[6].audio.stop();
                    } else {
                        this.playlists[2].files[6].audio.play();
                    }
                    break;
                case 4:
                    if (this.playlists[3].files[6].audio.isPlaying()) {
                        this.playlists[3].files[6].audio.stop();
                    } else {
                        this.playlists[3].files[6].audio.play();
                    }
                    break;
            }
        }
        if (mouseX > 1633 && mouseY > 559 && mouseX < 1843 && mouseY < 773) {
            switch (screen) {
                case 1:
                    if (this.playlists[0].files[7].audio.isPlaying()) {
                        this.playlists[0].files[7].audio.stop();
                    } else {
                        this.playlists[0].files[7].audio.play();
                    }
                    break;
                case 2:
                    if (this.playlists[1].files[7].audio.isPlaying()) {
                        this.playlists[1].files[7].audio.stop();
                    } else {
                        this.playlists[1].files[7].audio.play();
                    }
                    break;
                case 3:
                    if (this.playlists[2].files[7].audio.isPlaying()) {
                        this.playlists[2].files[7].audio.stop();
                    } else {
                        this.playlists[2].files[7].audio.play();
                    }
                    break;
                case 4:
                    if (this.playlists[3].files[7].audio.isPlaying()) {
                        this.playlists[3].files[7].audio.stop();
                    } else {
                        this.playlists[3].files[7].audio.play();
                    }
                    break;
                default:
                    this.playlists.files.audio.stop()
                    break;
            }
        }
    }

    playPlaylist(screen) {
        switch (screen) {
            case 1:
                if (this.playlists[0].files[0].audio.isPlaying()) {
                    this.playlists[0].files[0].audio.stop();
                } else if (mouseX > 100 && mouseY > 788 && mouseX < 247 && mouseY < 839) {
                    this.playlists[0].files[0].audio.play();
                }
                break;
            case 2:
                if (this.playlists[1].files[0].audio.isPlaying()) {
                    this.playlists[1].files[0].audio.stop();
                } else if (mouseX > 100 && mouseY > 788 && mouseX < 247 && mouseY < 839) {
                    this.playlists[1].files[0].audio.play();
                }
                break;
            case 3:
                if (this.playlists[2].files[0].audio.isPlaying()) {
                    this.playlists[2].files[0].audio.stop();
                } else if (mouseX > 100 && mouseY > 788 && mouseX < 247 && mouseY < 839) {
                    this.playlists[2].files[0].audio.play();
                }
                break;

        }
    }

    drawNewPlaylist(screen){
        if (screen === 0) {
            this.app.image(this.coverp4, 1361, 640);
        }
        if (screen === 4) {
            textFont(fontB);
            fill(255);
            textSize(31);
            text(this.playlists[3].name,1035,147);
        }
    }

    createPlaylist(screen){
        if (screen === 0 && mouseX > 1361 && mouseY > 640 && mouseX < 1722 && mouseY < 998) {
            const pName = window.prompt('Playlist Name:');
            this.playlists.push(new Playlist({
                name: pName,
            }));
            this.drawNewPlaylist(screen);
        }
    }

    sliderDrag(){
        this.volumeSlider.dragSlider(this.nowPlaying);
        this.durationSlider.dragSlider(this.nowPlaying);
    }
}