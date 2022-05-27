class MusicPlayer {
    constructor() {
        this.songs = [];
        this.songs[0] = loadSound('sources/Start_Of_Something_New.mp3');
        this.songs[1] = loadSound('sources/Getcha_Head_In_The_Game.mp3');
        this.songs[2] = loadSound('sources/What-I-ve-Been-Looking-For.mp3');
        this.songs[3] = loadSound('sources/Stick-to-the-Status-Quo.mp3');
        this.songs[4] = loadSound('sources/When-There-Was-Me-and-You.mp3');
        this.songs[5] = loadSound('sources/Bop-To-The-Top.mp3');
        this.songs[6] = loadSound('sources/Breaking-Free.mp3');
        this.songs[7] = loadSound('sources/We_re-All-In-This-Together.mp3');

        this.songs[8] = loadSound('sources/What-Time-Is-It.mp3');
        this.songs[9] = loadSound('sources/Fabulous.mp3');
        this.songs[10] = loadSound('sources/Work-This-Out.mp3');
        this.songs[11] = loadSound('sources/You-Are-the-Music-in-Me.mp3');
        this.songs[12] = loadSound('sources/I-Don_t-Dance.mp3');
        this.songs[13] = loadSound('sources/Gotta-Go-My-Own-Way.mp3');
        this.songs[14] = loadSound('sources/Everyday.mp3');
        this.songs[15] = loadSound('sources/All-For-One.mp3');

        this.songs[16] = loadSound('sources/Now-or-Never.mp3');
        this.songs[17] = loadSound('sources/Right-Here_-Right.mp3');
        this.songs[18] = loadSound('sources/I-Want-It-All.mp3');
        this.songs[19] = loadSound('sources/Can-I-Have-This-Dance.mp3');
        this.songs[20] = loadSound('sources/A-Night-to-Remember.mp3');
        this.songs[21] = loadSound('sources/Just-Wanna-Be-With-You.mp3');
        this.songs[22] = loadSound('sources/The-Boys-Are-Back.mp3');
        this.songs[23] = loadSound('sources/Scream.mp3');


        this.coverp4 = loadImage('sources/cover 4.png');

        this.playlists = [];
        this.init();
        this.volumeSlider = new Slider('volume');
        this.durationSlider = new Slider('head');
        this.newPlaylist = false;
        this.selectedPl = undefined;
        
    }

    init() {
        this.playlists.push(new Playlist('HSM1'));
        //playlist 1
        this.playlists[0].songs.push(new Song({
            name: 'Start of something new',
            year: 2006,
            duration: 197,
            artist: 'Vanessa Hudgens & Zac Efron',
            audio: this.songs[0],
        }));
        this.playlists[0].songs.push(new Song({
            name: 'Getcha Head In The Game',
            year: 2006,
            duration: 148,
            artist: 'Drew Seeley',
            audio: this.songs[1]
        }));
        this.playlists[0].songs.push(new Song({
            name: 'What Ive Been Looking For',
            year: 2006,
            duration: 124,
            artist: 'Ashley Tisdale & Lucas Grabeel',
            audio: this.songs[2]
        }));
        this.playlists[0].songs.push(new Song({
            name: 'Stick To The Status Quo',
            year: 2006,
            duration: 268,
            artist: 'Cast of HSM',
            audio: this.songs[3]
        }));
        this.playlists[0].songs.push(new Song({
            name: 'When There Was Me and You',
            year: 2006,
            duration: 180,
            artist: 'Vanessa Hudgens',
            audio: this.songs[4]
        }));
        this.playlists[0].songs.push(new Song({
            name: 'Bop To The Top',
            year: 2006,
            duration: 108,
            artist: 'Ashley Tisdale & Lucas Grabeel',
            audio: this.songs[5]
        }));
        this.playlists[0].songs.push(new Song({
            name: 'Breaking Free',
            year: 2006,
            duration: 207,
            artist: 'Vanessa Hudgens & Zac Efron',
            audio: this.songs[6]
        }));
        this.playlists[0].songs.push(new Song({
            name: 'We re All In This Together',
            year: 2006,
            duration: 231,
            artist: 'Vanessa Hudgens, Zac Efron, Lucas Grabeel, Ashley Tisdale',
            audio: this.songs[7]
        }));

        //playlist 2
        this.playlists.push(new Playlist('HSM2'));
        this.playlists[1].songs.push(new Song({
            name: 'What Time Is It',
            year: 2007,
            duration: 205,
            artist: 'Cast of HSM',
            audio: this.songs[8]
        }));
        this.playlists[1].songs.push(new Song({
            name: 'Fabulous',
            year: 2007,
            duration: 211,
            artist: 'Ashley Tisdale & Lucas Grabeel',
            audio: this.songs[9]
        }));
        this.playlists[1].songs.push(new Song({
            name: 'Work This Out',
            year: 2007,
            duration: 191,
            artist: 'Cast of HSM',
            audio: this.songs[10]
        }));
        this.playlists[1].songs.push(new Song({
            name: 'You Are The Music In Me',
            year: 2007,
            duration: 212,
            artist: 'Vanessa Hudgens & Zac Efron',
            audio: this.songs[11]
        }));
        this.playlists[1].songs.push(new Song({
            name: 'I Dont Dance',
            year: 2007,
            duration: 241,
            artist: 'Corbin Bleu & Lucas Grabeel',
            audio: this.songs[12]
        }));
        this.playlists[1].songs.push(new Song({
            name: 'Gotta Go My Own Way',
            year: 2007,
            duration: 224,
            artist: 'Vanessa Hudgens & Zac Efron',
            audio: this.songs[13]
        }));
        this.playlists[1].songs.push(new Song({
            name: 'Everyday',
            year: 2007,
            duration: 284,
            artist: 'Vanessa Hudgens & Zac Efron',
            audio: this.songs[14]
        }));
        this.playlists[1].songs.push(new Song({
            name: 'All For One',
            year: 2007,
            duration: 258,
            artist: 'Cast of HSM',
            audio: this.songs[15]
        }));

        //playlist 3
        this.playlists.push(new Playlist('HSM3'));
        this.playlists[2].songs.push(new Song({
            name: 'Now or Never',
            year: 2008,
            duration: 273,
            artist: 'Cast of HSM',
            audio: this.songs[16]
        }));
        this.playlists[2].songs.push(new Song({
            name: 'Right Here Right Now',
            year: 2008,
            duration: 238,
            artist: 'Ashley Tisdale & Lucas Grabeel',
            audio: this.songs[17]
        }));
        this.playlists[2].songs.push(new Song({
            name: 'I Want It All',
            year: 2008,
            duration: 279,
            artist: 'Ashley Tisdale & Lucas Grabeel',
            audio: this.songs[18]
        }));
        this.playlists[2].songs.push(new Song({
            name: 'Can I Have This Dance',
            year: 2008,
            duration: 144,
            artist: 'Vanessa Hudgens & Zac Efron',
            audio: this.songs[19]
        }));
        this.playlists[2].songs.push(new Song({
            name: 'A Night to Remember',
            year: 2008,
            duration: 239,
            artist: 'Cast of HSM',
            audio: this.songs[20]
        }));
        this.playlists[2].songs.push(new Song({
            name: 'Just Wanna Be With You',
            year: 2008,
            duration: 158,
            artist: 'Vanessa Hudgens & Zac Efron',
            audio: this.songs[21]
        }));
        this.playlists[2].songs.push(new Song({
            name: 'The Boys Are Back',
            year: 2008,
            duration: 227,
            artist: 'Corbin Bleu & Zac Efron',
            audio: this.songs[24]
        }));
        this.playlists[2].songs.push(new Song({
            name: 'Scream',
            year: 2008,
            duration: 237,
            artist: 'Cast of HSM',
            audio: this.songs[23]
        }));



    }
       
    playSongBySong(screen) {
        if (mouseX > 840 && mouseY > 218 && mouseX < 1053 && mouseY < 434) {
            
            switch (screen) {
                case 1:
                    if (this.playlists[0].songs[0].audio.isPlaying()) {
                        this.playlists[0].songs[0].audio.stop();
                    } else {
                        this.playlists[0].songs[0].audio.play();
                    }
                    break;
                case 2:
                    if (this.playlists[1].songs[0].audio.isPlaying()) {
                        this.playlists[1].songs[0].audio.stop();
                    } else {
                        this.playlists[1].songs[0].audio.play();
                    }
                    break;
                case 3:
                    if (this.playlists[2].songs[0].audio.isPlaying()) {
                        this.playlists[2].songs[0].audio.stop();
                    } else {
                        this.playlists[2].songs[0].audio.play();
                    }
                    break;
                case 4:
                    if (this.playlists[3].songs[0].audio.isPlaying()) {
                        this.playlists[3].songs[0].audio.stop();
                    } else {
                        this.playlists[3].songs[0].audio.play();
                    }
                    break;
            }
        }
        if (mouseX > 1104 && mouseY > 218 && mouseX < 1319 && mouseY < 434) {
            switch (screen) {
                case 1:
                    if (this.playlists[0].songs[1].audio.isPlaying()) {
                        this.playlists[0].songs[1].audio.stop();
                    } else {
                        this.playlists[0].songs[1].audio.play();
                    }
                    break;
                case 2:
                    if (this.playlists[1].songs[1].audio.isPlaying()) {
                        this.playlists[1].songs[1].audio.stop();
                    } else {
                        this.playlists[1].songs[1].audio.play();
                    }
                    break;
                case 3:
                    if (this.playlists[2].songs[1].audio.isPlaying()) {
                        this.playlists[2].songs[1].audio.stop();
                    } else {
                        this.playlists[2].songs[1].audio.play();
                    }
                    break;
                case 4:
                    if (this.playlists[3].songs[1].audio.isPlaying()) {
                        this.playlists[3].songs[1].audio.stop();
                    } else {
                        this.playlists[3].songs[1].audio.play();
                    }
                    break;
            }
        }
        if (mouseX > 1370 && mouseY > 218 && mouseX < 1583 && mouseY < 434) {
            switch (screen) {
                case 1:
                    if (this.playlists[0].songs[2].audio.isPlaying()) {
                        this.playlists[0].songs[2].audio.stop();
                    } else {
                        this.playlists[0].songs[2].audio.play();
                    }
                    break;
                case 2:
                    if (this.playlists[1].songs[2].audio.isPlaying()) {
                        this.playlists[1].songs[2].audio.stop();
                    } else {
                        this.playlists[1].songs[2].audio.play();
                    }
                    break;
                case 3:
                    if (this.playlists[2].songs[2].audio.isPlaying()) {
                        this.playlists[2].songs[2].audio.stop();
                    } else {
                        this.playlists[2].songs[2].audio.play();
                    }
                    break;
                case 4:
                    if (this.playlists[3].songs[2].audio.isPlaying()) {
                        this.playlists[3].songs[2].audio.stop();
                    } else {
                        this.playlists[3].songs[2].audio.play();
                    }
                    break;
            }
        }
        if (mouseX > 1633 && mouseY > 218 && mouseX < 1843 && mouseY < 434) {
            switch (screen) {
                case 1:
                    if (this.playlists[0].songs[3].audio.isPlaying()) {
                        this.playlists[0].songs[3].audio.stop();
                    } else {
                        this.playlists[0].songs[3].audio.play();
                    }
                    break;
                case 2:
                    if (this.playlists[1].songs[3].audio.isPlaying()) {
                        this.playlists[1].songs[3].audio.stop();
                    } else {
                        this.playlists[1].songs[3].audio.play();
                    }
                    break;
                case 3:
                    if (this.playlists[2].songs[3].audio.isPlaying()) {
                        this.playlists[2].songs[3].audio.stop();
                    } else {
                        this.playlists[2].songs[3].audio.play();
                    }
                    break;
                case 4:
                    if (this.playlists[3].songs[3].audio.isPlaying()) {
                        this.playlists[3].songs[3].audio.stop();
                    } else {
                        this.playlists[3].songs[3].audio.play();
                    }
                    break;
            }
        }
        if (mouseX > 840 && mouseY > 559 && mouseX < 1053 && mouseY < 773) {
            switch (screen) {
                case 1:
                    if (this.playlists[0].songs[4].audio.isPlaying()) {
                        this.playlists[0].songs[4].audio.stop();
                    } else {
                        this.playlists[0].songs[4].audio.play();
                    }
                    break;
                case 2:
                    if (this.playlists[1].songs[4].audio.isPlaying()) {
                        this.playlists[1].songs[4].audio.stop();
                    } else {
                        this.playlists[1].songs[4].audio.play();
                    }
                    break;
                case 3:
                    if (this.playlists[2].songs[4].audio.isPlaying()) {
                        this.playlists[2].songs[4].audio.stop();
                    } else {
                        this.playlists[2].songs[4].audio.play();
                    }
                    break;
                case 4:
                    if (this.playlists[3].songs[4].audio.isPlaying()) {
                        this.playlists[3].songs[4].audio.stop();
                    } else {
                        this.playlists[3].songs[4].audio.play();
                    }
                    break;
            }
        }
        if (mouseX > 1104 && mouseY > 559 && mouseX < 1319 && mouseY < 773) {
            switch (screen) {
                case 1:
                    if (this.playlists[0].songs[5].audio.isPlaying()) {
                        this.playlists[0].songs[5].audio.stop();
                    } else {
                        this.playlists[0].songs[5].audio.play();
                    }
                    break;
                case 2:
                    if (this.playlists[1].songs[5].audio.isPlaying()) {
                        this.playlists[1].songs[5].audio.stop();
                    } else {
                        this.playlists[1].songs[5].audio.play();
                    }
                    break;
                case 3:
                    if (this.playlists[2].songs[5].audio.isPlaying()) {
                        this.playlists[2].songs[5].audio.stop();
                    } else {
                        this.playlists[2].songs[5].audio.play();
                    }
                    break;
                case 4:
                    if (this.playlists[3].songs[5].audio.isPlaying()) {
                        this.playlists[3].songs[5].audio.stop();
                    } else {
                        this.playlists[3].songs[5].audio.play();
                    }
                    break;
            }
        }
        if (mouseX > 1370 && mouseY > 559 && mouseX < 1583 && mouseY < 773) {
            switch (screen) {
                case 1:
                    if (this.playlists[0].songs[6].audio.isPlaying()) {
                        this.playlists[0].songs[6].audio.stop();
                    } else {
                        this.playlists[0].songs[6].audio.play();
                    }
                    break;
                case 2:
                    if (this.playlists[1].songs[6].audio.isPlaying()) {
                        this.playlists[1].songs[6].audio.stop();
                    } else {
                        this.playlists[1].songs[6].audio.play();
                    }
                    break;
                case 3:
                    if (this.playlists[2].songs[6].audio.isPlaying()) {
                        this.playlists[2].songs[6].audio.stop();
                    } else {
                        this.playlists[2].songs[6].audio.play();
                    }
                    break;
                case 4:
                    if (this.playlists[3].songs[6].audio.isPlaying()) {
                        this.playlists[3].songs[6].audio.stop();
                    } else {
                        this.playlists[3].songs[6].audio.play();
                    }
                    break;
            }
        }
        if (mouseX > 1633 && mouseY > 559 && mouseX < 1843 && mouseY < 773) {
            switch (screen) {
                case 1:
                    if (this.playlists[0].songs[7].audio.isPlaying()) {
                        this.playlists[0].songs[7].audio.stop();
                    } else {
                        this.playlists[0].songs[7].audio.play();
                    }
                    break;
                case 2:
                    if (this.playlists[1].songs[7].audio.isPlaying()) {
                        this.playlists[1].songs[7].audio.stop();
                    } else {
                        this.playlists[1].songs[7].audio.play();
                    }
                    break;
                case 3:
                    if (this.playlists[2].songs[7].audio.isPlaying()) {
                        this.playlists[2].songs[7].audio.stop();
                    } else {
                        this.playlists[2].songs[7].audio.play();
                    }
                    break;
                case 4:
                    if (this.playlists[3].songs[7].audio.isPlaying()) {
                        this.playlists[3].songs[7].audio.stop();
                    } else {
                        this.playlists[3].songs[7].audio.play();
                    }
                    break;
            }
        }
    }


    drawInfo(screen) {
        if (screen !== 0 && this.selectedPl !== undefined) {
            this.selectedPl.songs.forEach(song => {
                song.showCurrentTime();
                song.showDuration();
                this.durationSlider.drawSliderD(song.audio.currentTime(), song.audio.duration());
                this.volumeSlider.drawSliderV();
                this.selectedPl.nowPlaying();
                console.log(this.selectedPl.nowPlaying())
            });
        }
    }

    pickPlaylist() {
        
        if (mouseX > 197 && mouseY > 640 && mouseX < 554 && mouseY < 998) {
            this.selectedPl = this.playlists[0];
        }
        if (mouseX > 584 && mouseY > 640 && mouseX < 945 && mouseY < 998) {
            this.selectedPl = this.playlists[1];
        }
        if (mouseX > 976 && mouseY > 640 && mouseX < 1333 && mouseY < 998) {
            this.selectedPl = this.playlists[2];
        }
        if (this.newPlaylist === true) {
            if (mouseX > 1361 && mouseY > 640 && mouseX < 1722 && mouseY < 998) {
                this.selectedPl = this.playlists[3];
            }
        }
    }

    playPlaylist(screen) {
        if (screen !== 0 && this.selectedPl !== undefined) {
            if (mouseX > 99 && mouseY > 790 && mouseX < 248 && mouseY < 837) {
                this.selectedPl.playP();
            }
        }
    }

    previous(screen){
        if (screen !== 0 && this.selectedPl !== undefined) {
            this.selectedPl.previous();
            
        }
    }

    nextSong(screen){
        if (screen !== 0 && this.selectedPl !== undefined) {
            if (mouseX > 1000 && mouseY > 941 && mouseX < 1023 && mouseY < 960) {
                this.selectedPl.next();
            }
        }
    }

    createPlaylist(screen) {
        if (screen === 0 && mouseX > 1474 && mouseY > 749 && mouseX < 1612 && mouseY < 883) {
            const pName = window.prompt('Playlist Name:');
            this.playlists.push(new Playlist({
                name: pName,
            }));
            this.newPlaylist = true;
        }
    }

    drawNewPlaylist(screen) {
        if (this.newPlaylist === true) {
            if (screen === 0) {
                image(this.coverp4, 1361, 640);
            }
            if (screen === 4) {
                textFont(fontB);
                fill(255);
                textSize(30);
                text(this.playlists[3].name.name, 1035, 170);
                text('DELETE PLAYLIST', 1570, 74);
            }
        }
    }

    deletePlaylist(screen) {
        if (screen === 4 && mouseX > 1571 && mouseY > 53 && mouseX < 1851 && mouseY < 72) {
            this.screen = 0;
            this.newPlaylist = false;
            delete this.playlists[3].name.name;
        }
    }

    sliderDrag(screen) {
        if (screen !== 0 && this.selectedPl !== undefined) {
            this.selectedPl.songs.forEach(song => {
                this.volumeSlider.dragSlider(song.audio);
                this.durationSlider.dragSlider(song.audio);
                }

            )};
        }
    
    }