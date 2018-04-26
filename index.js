function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    Math.abs(endBlock - startBlock) <= blockRange;
  };
}