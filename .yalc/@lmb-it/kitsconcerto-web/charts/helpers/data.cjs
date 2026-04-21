'use strict';

var helper = require('./helper.cjs');
var ColorsObj = require('./ColorsObj.cjs');

const generateLineData = (data, isDarkMode) => {
  const documentStyle = getComputedStyle(document.documentElement);
  const datasets = [];
  const originalLabels = data?.labels;
  const originalDatasets = data.datasets;
  !!originalDatasets && originalDatasets.forEach((originalDataset, index) => {
    let title = originalDataset.label;
    const datasetValues = originalDataset.data;
    const dataset = {};
    !!originalLabels && originalLabels?.forEach((label, labelIndex) => {
      title = originalDataset.label;
      if (label && typeof label == "string") {
        dataset[label] = datasetValues[labelIndex];
      }
    });
    datasets.push({
      type: "line",
      label: title,
      borderColor: documentStyle.getPropertyValue(`--${ColorsObj.getColorByIndex(index)}-500`),
      borderWidth: 2,
      fill: false,
      tension: 0.4,
      data: dataset
    });
  });
  return { labels: [], datasets };
};
const generateBarData = (data, isDarkMode) => {
  const datasets = [];
  const originalLabels = data.labels;
  const originalDatasets = data.datasets;
  const chartType = "bar";
  !!originalDatasets && originalDatasets.forEach((originalDataset) => {
    let title = originalDataset.label;
    const datasetValues = originalDataset.data;
    const dataset = {};
    !!originalLabels && originalLabels.forEach((label, labelIndex) => {
      title = originalDataset.label;
      if (typeof label == "string") {
        dataset[label] = datasetValues[labelIndex];
      }
    });
    const color = ColorsObj.default.pickLevels(originalDatasets.length, isDarkMode, chartType);
    datasets.push({
      label: title,
      borderColor: color.reverse(),
      backgroundColor: color,
      data: dataset
    });
  });
  return { labels: [], datasets };
};
const generatePieData = (data, isDarkMode) => {
  const datasets = [];
  const originalLabels = data.labels;
  const originalDatasets = data.datasets;
  const chartType = "pie";
  !!originalDatasets && originalDatasets.forEach((item, _itemIndex, itemsArray) => {
    const colors = ColorsObj.default.pickLevels(itemsArray.length, isDarkMode, chartType);
    datasets.push({
      label: item.label,
      data: item.data,
      backgroundColor: colors,
      borderColor: "white",
      hoverOffset: 7.5
    });
  });
  return {
    labels: originalLabels ? originalLabels : helper.labelsWithValue(originalDatasets),
    datasets
  };
};
const generateRadarData = (data, isDarkMode) => {
  const datasets = [];
  const originalLabels = data.labels;
  const originalDatasets = data.datasets;
  const chartType = "radar";
  !!originalDatasets && originalDatasets.forEach((item, _itemIndex, itemsArray) => {
    const colors = ColorsObj.default.pickLevels(itemsArray.length, isDarkMode, chartType);
    datasets.push({
      label: item.label,
      data: item.data,
      backgroundColor: colors,
      borderColor: "white"
    });
  });
  return {
    labels: originalLabels ? originalLabels : helper.labelsWithValue(originalDatasets),
    datasets
  };
};
const generatePolarAreaData = (data, isDarkMode) => {
  const datasets = [];
  const originalLabels = data.labels;
  const originalDatasets = data.datasets;
  const chartType = "polarArea";
  !!originalDatasets && originalDatasets.forEach((item, _itemIndex, itemsArray) => {
    const colors = ColorsObj.default.pickLevels(itemsArray.length, isDarkMode, chartType);
    datasets.push({
      label: item.label,
      data: item.data,
      backgroundColor: colors,
      borderColor: "white"
    });
  });
  return {
    labels: originalLabels ? originalLabels : helper.labelsWithValue(originalDatasets),
    datasets
  };
};
const generateDoughnutData = (data, isDarkMode) => {
  const documentStyle = getComputedStyle(document.documentElement);
  const datasets = [];
  const labels = data.labels;
  const datum = data.datasets;
  datum.forEach((item, _itemIndex, itemsArray) => {
    let totalLength = 0;
    for (const item2 of itemsArray) {
      totalLength += item2.data.length;
    }
    const arr = Array.from(Array(totalLength).keys());
    datasets.push({
      ...item,
      label: item.label,
      data: item.data,
      backgroundColor: arr.map((index) => documentStyle.getPropertyValue(`--${ColorsObj.getColorByIndex(index)}-500`)),
      hoverBackgroundColor: arr.map((index) => documentStyle.getPropertyValue(`--${ColorsObj.getColorByIndex(index)}-400`)),
      hoverOffset: 7.5,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      cutout: "80%"
    });
  });
  return {
    labels: labels ? labels : helper.labelsWithValue(datum),
    datasets
  };
};

exports.generateBarData = generateBarData;
exports.generateDoughnutData = generateDoughnutData;
exports.generateLineData = generateLineData;
exports.generatePieData = generatePieData;
exports.generatePolarAreaData = generatePolarAreaData;
exports.generateRadarData = generateRadarData;
//# sourceMappingURL=data.cjs.map
