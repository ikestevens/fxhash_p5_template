let HEIGHT;

function setup() {
  HEIGHT = Math.min(windowWidth, windowHeight);
  createCanvas(HEIGHT, HEIGHT);
}

function draw() {
  background(255);

  50 === frameCount && fxpreview();
}

function keyPressed() {
  if (keyCode === 83) {
    save("reef.png");
  }
}

function randBetween(a, b) {
    return a + (b - a) * fxrand()
}

function randBetweenInt(a, b) {
    return Math.floor(a + (b + 1 - a) * fxrand())
}
