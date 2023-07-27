import React from "react";
import OptimizeData from "../util/OptimizeData";
import WineCatalog from "../data/wine";
import CalculateStats from "../util/CalculateStats";
import "../css/index.css";

const WineStatistics = () => {
  const OptimizedCatalog = OptimizeData(WineCatalog);

  // All the properties are listed here, we can add any new property here and write its calculation login in the switch case below
  const properties = ["Flavanoids", "Gamma"];

  const prepareChart = () => {
    const finalChart = [];

    properties.forEach((element) => {
      // In the switch case we can write a callback to do custom calculation for example "Gamma"
      switch (element) {
        case "Gamma":
          finalChart.push({
            property: element,
            data: CalculateStats(OptimizedCatalog, (array) => {
              return array.map((ele) => {
                return (
                  (parseFloat(ele["Ash"]) * parseFloat(ele["Hue"])) /
                  parseFloat(ele["Magnesium"])
                );
              });
            })
          });
          break;

        default:
          finalChart.push({
            property: element,
            data: CalculateStats(OptimizedCatalog, (array) => {
              return array.map((ele) => {
                return parseFloat(ele[element]);
              });
            })
          });
          break;
      }
    });
    return finalChart;
  };

  const finalChart = prepareChart();

  const allBenerages = Object.keys(OptimizedCatalog).map((ele) => {
    return "Alcohol " + ele;
  });

  return (
    <div className="container">
      {finalChart.map((stats) => {
        return (
          <table key={stats.property}>
            <thead>
              <tr>
                <th>Measure</th>
                {allBenerages.map((beverage, idx) => {
                  return <th key={beverage}>{beverage}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="hl">
                  {stats.property}
                  <br />
                  Mean
                </td>
                {stats.data["mean"].map((mean, idx) => {
                  return <td key={mean + "-" + Math.random(999)}>{mean}</td>;
                })}
              </tr>
              <tr>
                <td className="hl">
                  {stats.property}
                  <br />
                  Median
                </td>
                {stats.data["median"].map((median, idx) => {
                  return (
                    <td key={median + "-" + Math.random(999)}>{median}</td>
                  );
                })}
              </tr>
              <tr>
                <td className="hl">
                  {stats.property}
                  <br />
                  Mode
                </td>
                {stats.data["mode"].map((mode, idx) => {
                  return <td key={mode + "-" + Math.random(999)}>{mode}</td>;
                })}
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default React.memo(WineStatistics);
