function produceDrivingRange(max) {
  return function withinRange(distance) {
    return distance <= max;
  };
}