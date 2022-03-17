class MusicPlayer{
    constructor(){
        this.playlists = [];
        this.init();
    }
    init(){
        this.playlists.push(new Playlist('HSM1',[
            new Song({
                name:'Start of something new',
                year:2006,
                duration: 197,
                artist:'Vanessa Hudgens & Zac Efron'
            }),
            new Song({
                name:'Getcha Head In The Game',
                year:2006,
                duration: 148,
                artist:'Drew Seeley'
            }),
            new Song({
                name:'What Ive Been Looking For',
                year:2006,
                duration: 124,
                artist:'Ashley Tisdale & Lucas Grabeel'
            }),
            new Song({
                name:'Stick To The Status Quo',
                year:2006,
                duration: 268,
                artist:'Cast of HSM'
            }),
            new Song({
                name:'When There Was Me and You',
                year:2006,
                duration: 180,
                artist:'Vanessa Hudgens'
            }),
            new Song({
                name:'Bop-To-The-Top',
                year:2006,
                duration: 108,
                artist:'Ashley Tisdale & Lucas Grabeel'
            }),
            new Song({
                name:'Breaking Free',
                year:2006,
                duration: 207,
                artist:'Vanessa Hudgens & Zac Efron'
            }),
            new Song({
                name:'We re All In This Together',
                year:2006,
                duration: 231,
                artist:'Vanessa Hudgens, Zac Efron, Lucas Grabeel, Ashley Tisdale'
            }),
        ]))

    }
    findPlayList(){
        
    }
    
    play(playListName){
        console.log('reproductor reproduciendo la playlist '+ playListName)
        const playList = this.findPlayList(playListName);
        playList.play();
    }

}