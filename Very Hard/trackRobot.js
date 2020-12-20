class Robot {
  constructor(x, y){
    [this.x, this.y] = [x, y];
  }

  move(direction, steps) {
    switch(direction) {
      case "North": this.y += steps;
      break;
      case "East" : this.x += steps;
      break;
      case "South": this.y -= steps;
      break;
      case "West" : this.x -= steps;
      break; 
    }
  }

  get position() {
    return `(${this.x}, ${this.y})`;
  }
}

function trackRobot(...steps){
  const directions = ["North", "East", "South", "West"];
  let dirId = 0;
  const robot = new Robot(0, 0);
  steps.forEach((step) => {
    robot.move(directions[dirId], step);
    dirId = dirId === 3 ? 0 : ++dirId;
  })
  return robot.position;
}

console.log(trackRobot(20, 30, 10, 40));


