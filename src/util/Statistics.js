export default class Statistics {
  constructor(array, callback) {
    this.array = callback(array);
  }

  static round(value, round = 2) {
    return Math.round(value * Math.pow(10, round)) / Math.pow(10, round);
  }

  mean() {
    return Number(
      this.array.reduce((sum, value) => sum + value, 0) / this.array.length
    ).toFixed(3);
  }

  median() {
    const arraySorted = this.array.sort((a, b) => {
      return a - b;
    });
    let result =
      arraySorted.length % 2 === 0
        ? (arraySorted[arraySorted.length / 2 - 1] +
            arraySorted[arraySorted.length / 2]) /
          2
        : arraySorted[Math.floor(arraySorted.length / 2)];
    return Number(result).toFixed(3);
  }

  mode(array) {
    var numMapping = {};
    for (var i = 0; i < this.array.length; i++) {
      if (numMapping[this.array[i]] === undefined) {
        numMapping[this.array[i]] = 0;
      }
      numMapping[this.array[i]] += 1;
    }

    var greatestFreq = 0;
    var mode;
    for (var prop in numMapping) {
      if (numMapping[prop] > greatestFreq) {
        greatestFreq = numMapping[prop];
        mode = prop;
      }
    }
    return Number(mode).toFixed(3);
  }
}
