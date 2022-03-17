let logic;

function setup() {
  createCanvas(1920, 1080);
  logic = new Logic(this);
}

function draw() {
  background(220);
  logic.showScreen();

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
  }
  logic.playSongBySong();
}