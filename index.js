function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let travelDistance = Math.abs(end - start);
    let diff = (blockRange - travelDistance);
    
    if (diff >= 0) {
      return `within range by ${diff}`;
    } else {
      return `${Math.abs(diff)} blocks out of range`;
    }
  };
}

function produceTipCalculator(percent) {
  return function(fare) {
    return (fare * percent);
  };
}

function createDriver() {
  let driverId = 0;
  
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
    
  }
}