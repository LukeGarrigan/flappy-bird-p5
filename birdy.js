
function Birdy() {

  this.x = 15;
  this.y = height/2;
  this.image = loadImage("images/bird.png");
  this.gravity = 0.9;
  this.velocity = 0;
  this.hasFallen = false;
  this.upThrust = -14;
  this.rotation = 0;
  this.angle = 0.03;
  this.display = function() {
    push();
    translate(this.x, this.y);
    rotate(-this.rotation * PI);
    image(this.image, 0, 0, 75, 75);
    if (this.rotation >= this.angle) {
      this.rotation -= this.angle;
    }
    pop();
  }


  this.update = function() {
    if (!this.hasFallen) {
      this.velocity += this.gravity;
      this.y += this.velocity;
    }
  }

  this.hasHitEdge = function() {
    if (this.y > height) {
      this.velocity = 0;
      this.hasFallen = true;
      return true;
    } else if (this.y < 0) {
      return true;
    }

    return false;
  }

  this.fly = function() {
    this.velocity = this.upThrust;
    this.rotation = 0.3;
    // this.velocity = 0;
  }





}
