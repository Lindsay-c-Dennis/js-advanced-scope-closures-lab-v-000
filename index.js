function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    Math.abs(parsint(endBlock) - parsInt(startBlock)) <= blockRange;
  };
}