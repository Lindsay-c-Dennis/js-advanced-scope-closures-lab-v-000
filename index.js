function produceDrivingRange(blockRange) {
  return function withinRange(distance) {
    return distance <= blockRange;
  };
}