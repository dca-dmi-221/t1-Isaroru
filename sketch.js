let logic;
let player;
let font;
let fontB;

function setup() {
  createCanvas(1920, 1080);
  logic = new Logic();
  player = new MusicPlayer();
  font = loadFont('sources/framd.ttf');
  fontB = loadFont('sources/FranklinGothic.ttf');
}

function draw() {
  background(220);
  logic.showScreen();
  logic.drawSongs();
  player.drawNewPlaylist(logic.screen);
  player.drawInfo(logic.screen);

}

function mousePressed() {
  console.log('x:' + mouseX + 'y:' + mouseY);
  logic.switchScreen(player.newPlaylist);
  player.pickPlaylist();
  player.playPlaylist(logic.screen);
  player.previous(logic.screen);
  player.nextSong(logic.screen);
  player.createPlaylist(logic.screen);
  player.playSongBySong(logic.screen);
  player.sliderDrag(logic.screen);
  player.deletePlaylist(logic.screen);
  
}