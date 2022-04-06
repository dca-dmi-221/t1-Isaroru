class Song {
    constructor({name, year, duration, artist,audio}) {
        this.duration = duration;
        this.name = name;
        this.artist = artist;
        this.year = year;
        this.audio = audio; 
    }

    playS(){
        this.audio.play();
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

    stopS(){
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