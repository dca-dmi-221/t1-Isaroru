class Song {
    constructor(name, year, duration, artist) {
        this.duration = duration;
        this.name = name;
        this.artist = artist;
        this.year = year;

    }
    showAllSongs() {
        return this.name + " (From High School Musical - " + this.year + ") - [feat." + this.artist + "] - " + this.duration + ' seconds';
    }
}