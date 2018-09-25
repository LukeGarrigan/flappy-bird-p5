
var birdy;
var pipes = [];
var score;
var hasGameStarted = false;
var speed;
function setup() {
  createCanvas(1024, 576);
  bg = loadImage("images/background.png");
  birdy = new Birdy();
  score = new Score();
  pipes = [];
  hasGameStarted = false
  speed = 5;
}

function draw() {
  background(bg);
  birdy.display();
  if (hasGameStarted) {
    birdy.update();
    updateSpeedOfPipes();
  }

  var reset = false;
  if (birdy.hasHitEdge()) {
    reset = true;
  }


  if(hasGameStarted && frameCount % 75 == 0) {
    pipes.push(new Pipe(speed));
  }



  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].display();
    pipes[i].update();
    if (pipes[i].hasCollided(birdy)) {
      reset = true;
    }
    if (pipes[i].isOffScreen()) {
      pipes.splice(i, 1);
      score.increment();
    }
  }
  score.display();

  if (reset) {
    setup();
  }
}


function keyPressed() {
  if (key == " ") {
    hasGameStarted = true;
    birdy.fly();
  }

}


function updateSpeedOfPipes() {
  if (frameCount % 500 == 0) {

    for (var i = 0; i < pipes.length; i++) {
      pipes[i].increaseSpeed();
    }
    speed = speed + 1;
  }

}
