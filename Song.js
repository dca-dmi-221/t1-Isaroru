class Song {
    constructor(nombre, año, duracion, artista, genero) {
        this.duracion = duracion;
        this.nombre = nombre;
        this.artista = artista;
        this.año = año;

    }
    showAllSongs() {
        return this.nombre + " (" + this.año + ") - [feat." + this.artista + "] - " + this.duracion + ' segundos';
    }
}