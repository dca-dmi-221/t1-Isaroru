class Playlist{
    constructor(name){
        this.name = name;
        this.songs = [];
        this.currentS;
        this.currentI;

        this.button = new Button({
            x: 933,
            y: 923
        });
    }

    playP(){
        this.currentI = 0;
        this.currentS = this.songs[this.currentI];
        this.currentS.playS();
        this.currentS.audio.onended(() => this.autoplay(this.songs,this.currentI,this.currentS));
    }

    stopP(){
        this.songs.forEach(song => {
            song.stopS();
        });
    }

    autoplay(songs,i,nowp){
        nowp.stopS();
        i +=1;
        this.currentI = i;
        this.currentS = songs[i];
        this.currentS.playS();
    }

    next(){
        this.currentS.stopS();
        this.currentI +=1;
        this.currentS = this.songs[this.currentI];
        this.currentS.playS();
    }

    previous(){
        if (mouseX > 899 && mouseY > 941 && mouseX < 917 && mouseY < 960) {
            if (this.currentS.isPlaying()) {
                this.currentS.stopS();
                this.currentI -=1;
                this.currentS = this.songs[this.currentI]
                this.currentS.playS();
            }
        }
    }
    
    nowPlaying() {
        this.songs.forEach(song => {
            
            if (this.currentS.audio.isPlaying()) {
                textFont(fontB);
                fill(255);
                textSize(51);
                text(song.name,98,680);
                textSize(25);
                text(song.artist,98,722);
                text(song.name,140,943);
                textFont(font);
                text(song.duration + ' seconds - ' + song.year + ' From High School Musical',98,758);
                textSize(17);
                text(song.duration + ' seconds - ' + song.year + ' From High School Musical',140,970);
                this.button.setIsPlaying(true);
                this.button.drawButton();
            }else{
                this.button.setIsPlaying(false);
                this.button.drawButton();
            }    
        });
            
            
        }
    
}