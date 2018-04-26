function produceDrivingRange(blockRange) {
  return function withinRange(distance) {
    if (distance <= blockRange) {
      buffer = (blockRange - distance);
      return `within range by ${buffer} blocks.`;
    else
      diff = (distance - blockRange);
      return `${diff} block out of range`;
      }
  }
}