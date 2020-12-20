function trackRobot(...steps){
  const directions = ["North", "East", "South", "West"];
  let dirId = 0;
  [x, y] = [0, 0];
  steps.forEach((step) => {
    switch(directions[dirId]) {
      case "North": y += step;
      break;
      case "East" : x += step;
      break;
      case "South": y -= step;
      break;
      case "West" : x -= step;
      break; 
    }
    dirId = dirId === 3 ? 0 : ++dirId;
  })
  return [x, y];
}


console.log(trackRobot(20, 30, 10, 40));
console.log(trackRobot());
console.log(trackRobot(-10, 20, 10));