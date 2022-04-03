let logic;
let player;
let font;
let fontB;

function setup() {
  createCanvas(1920, 1080);
  logic = new Logic(this);
  player = new MusicPlayer(this);
  font = loadFont('sources/framd.ttf');
  fontB = loadFont('sources/FranklinGothic.ttf');
}

function draw() {
  background(220);
  logic.showScreen();
  
  player.drawSongs(logic.screen);
  //player.drawNewPlaylist(logic.screen);

}

function mousePressed() {
  console.log('x:' + mouseX + 'y:' + mouseY);

  logic.switchScreen();
  player.playPlaylist(logic.screen);
  player.createPlaylist(logic.screen);
  player.drawNewPlaylist(logic.screen);
  player.playSongBySong(logic.screen);
  player.sliderDrag()
}