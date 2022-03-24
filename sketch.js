let logic;
let player;
let font;
let fontB;
let prueba;

function setup() {
  createCanvas(1920, 1080);
  logic = new Logic(this);
  player = new MusicPlayer(this);
  font = loadFont('sources/framd.ttf');
  fontB = loadFont('sources/FranklinGothic.ttf');
  prueba = loadImage('sources/HSM1 T.png');
}

function draw() {
  background(220);
  logic.showScreen();
  /*image(prueba,0,0);
  textFont(fontB);
      fill(255);
      textSize(51);
      text('TITULO CANCIÓN',98,635);
      textSize(22);
      text('ARTISTA',98,754);
      text('TITULO CANCIÓN',140,943);
      textFont(font);
      text('DETALLES',98,790);
      //BARRA
      textSize(17);
      text('DETALLES',140,970);
      */

}

function mousePressed() {
  console.log('x:' + mouseX + 'y:' + mouseY);
  switch (logic.screen) {
    case 0:
      if (mouseX > 182 && mouseY > 400 && mouseX < 654 && mouseY < 872) {
        logic.screen = 1;
      }
      if (mouseX > 717 && mouseY > 400 && mouseX < 1197 && mouseY < 872) {
        logic.screen = 2;
      }
      if (mouseX > 1252 && mouseY > 400 && mouseX < 1736 && mouseY < 872) {
        logic.screen = 3;
      }
      break;
    case 1:
      if (mouseX > 347 && mouseY > 32 && mouseX < 486 && mouseY < 52) {
        logic.screen = 0;
      }
      player.playSongBySong();
      break;
    case 2:
      if (mouseX > 347 && mouseY > 32 && mouseX < 486 && mouseY < 52) {
        logic.screen = 0;
      }
      break;
    case 3:
      if (mouseX > 347 && mouseY > 32 && mouseX < 486 && mouseY < 52) {
        logic.screen = 0;
      }
      break;
  }
  player.playPlaylist(logic.screen);
}