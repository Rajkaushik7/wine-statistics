export default (array) => {
  let optimizedArray = array.reduce((prev, curr) => {
    if (prev[curr.Alcohol] !== undefined) {
      prev[curr.Alcohol].push(curr);
    } else {
      prev[curr.Alcohol] = [curr];
    }
    return prev;
  }, {});
  return optimizedArray;
};
