
function Pipe(speed) {
  this.x = width;
  this.speed = speed;
  this.gap = 180;
  this.width = 60;
  this.topY = random(0, height-this.gap+10);
  this.bottomY = this.topY + this.gap;


  this.display = function() {
    fill(46, 139, 87);
    // draws the top pipe
    rect(this.x, 0, this.width, this.topY)

    // bottom pipe
    rect(this.x, this.bottomY,this.width, height-this.bottomY);
  }

  this.update = function() {
    console.log(this.speed);
    this.x -= this.speed;
  }

  this.isOffScreen = function() {
    if (this.x < -this.width) {
      return true;
    }
    return false;
  }

  this.increaseSpeed = function() {
    this.speed = this.speed + 1;
  }


  this.hasCollided = function(birdy) {

    if (birdy.y <= this.topY || birdy.y >= this.bottomY) {
      if(birdy.x >= this.x && birdy.x <= this.x + this.width) {
        return true;
      }
    }
    return false;

  }

}
