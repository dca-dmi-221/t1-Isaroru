class Song {
    constructor({name, year, duration, artist,audio},app) {
        this.duration = duration;
        this.name = name;
        this.artist = artist;
        this.year = year;
        this.audio = audio; 
        this.app = app;
        this.nowPlaying();
    }

    nowPlaying() {
        if (this.audio.isPlaying()) {
            textFont(fontB);
            fill(255);
            textSize(51);
            text(this.name,98,680);
            textSize(25);
            text(this.artist,98,722);
            text(this.name,140,943);
            textFont(font);
            text(this.duration + ' seconds - ' + this.year + ' From High School Musical',98,758);
            textSize(17);
            text(this.duration + ' seconds - ' + this.year + ' From High School Musical',140,970);
        }
    }

    play(){
        this.audio.play();
        console.log(this.audio)
    }

    resume(){
        if (this.audio.isPlaying()) {
            console.log(this.audio.isPlaying())
            this.audio.play();
            this.nowPlaying();
        }
    }

    pause(){
        if (this.audio.isPlaying()) {
            this.audio.pause();
        }
    }

    stop(){
        if (this.audio.isPlaying()) {
            this.audio.stop();
        }
    }

    showCurrentTime(){
        if (this.audio.isPlaying()) {
            let playingTime = Math.floor(this.audio.currentTime());
            fill(255);
            textFont(font);
            textSize(18);
            text(playingTime,1477,942);
        }
    }

    showDuration(){
        if (this.audio.isPlaying()) {
            let lenght = Math.floor(this.audio.duration());
            fill(255);
            textFont(font);
            textSize(18);
            text('/ '+lenght,1528,942);
        }
    }
}