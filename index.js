function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    Math.abs(parseint(endBlock) - parseInt(startBlock)) <= blockRange;
  };
}