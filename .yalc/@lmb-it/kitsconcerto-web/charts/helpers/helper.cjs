'use strict';

var Canvas = require('../../utils/Canvas.cjs');

const handleDownload = (uniqueId, chart, isDarkMode = false) => {
  chart.current.resize(1366, 768);
  const chartNode = document.getElementById(uniqueId);
  const destinationCanvas = document.createElement("canvas");
  destinationCanvas.width = chartNode.width;
  destinationCanvas.height = chartNode.height;
  const destCtx = destinationCanvas.getContext("2d");
  destCtx.fillStyle = !isDarkMode ? "#EDF2F7" : "#2D3748";
  destCtx.fillRect(0, 0, chartNode.width, chartNode.height);
  destCtx.drawImage(chartNode, 0, 0);
  sleep(0).then((_) => chart.current.resize());
  Canvas.downloadCanvas(destinationCanvas, "Trend.jpg", "image/jpeg");
};
const labelsWithValue = (data) => {
  return data.map((d, index) => `${d.label} ${d.data[index]}`);
};
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

exports.handleDownload = handleDownload;
exports.labelsWithValue = labelsWithValue;
exports.sleep = sleep;
//# sourceMappingURL=helper.cjs.map
