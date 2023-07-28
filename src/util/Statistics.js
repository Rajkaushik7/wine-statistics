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

  mode() {
    let mode = [this.array[0]];
    let mxFq = 1;
    let curFq = 1;

    for(let i=1 ; i < this.array.length ; i++) {
        if(this.array[i-1] === this.array[i]) {
            curFq++;
        } else {
            curFq = 1;
        }

        if (curFq === mxFq) {
            mode.push(this.array[i]);
        } else if (curFq > mxFq) {
            mxFq = curFq;
            mode = [this.array[i]];
        }
    }
    return mode.length === this.array.length ? [-1] : mode.join(', ');
}
}
