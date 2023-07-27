import Statistics from "./Statistics";

export default (iterable, callback) => {
  const results = {};
  for (let key in iterable) {
    const stats = new Statistics(iterable[key], callback);
    (results["mean"] ||= []).push(stats.mean());
    (results["median"] ||= []).push(stats.median());
    (results["mode"] ||= []).push(stats.mode());
  }
  return results;
};
