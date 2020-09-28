class ArrayRotator {
  rotateLeft(arr, n) {
    // shift first element and push to array
    while (n--) {
      arr.push(arr.shift());
    }
    return arr;
  }
}

module.exports = ArrayRotator;
