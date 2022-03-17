class Playlist{
    constructor(name, files){
        this.name = name;
        this.files = files;
    }
    play(){
        console.log('Reproduciendo PlayList '+this.nombre)
        for (let i = 0; i < this.files.length; i++) {
            const file = this.files[i];
            file.play();
        }

    }

    addFile(file){
        this.files.push(file);
    }
}