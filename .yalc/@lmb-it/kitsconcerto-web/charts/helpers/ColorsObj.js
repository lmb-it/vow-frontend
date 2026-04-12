let colorIndex = 0;
const getColorByIndex = (index) => {
  const colors = ["cyan", "yellow", "green", "blue", "orange", "pink", "indigo", "teal", "bluegray", "purple", "primary"];
  const colorIndex2 = index % colors.length;
  return colors[colorIndex2];
};
const colorObjs = () => {
  const alpha = 0.6;
  const colorSet = [
    [255, 0, 0, alpha],
    // Red
    [255, 165, 0, alpha],
    // Orange
    [255, 255, 0, alpha],
    // Yellow
    [0, 128, 0, alpha],
    // Green
    [0, 0, 255, alpha],
    // Blue
    [75, 0, 130, alpha],
    // Indigo
    [148, 0, 211, alpha],
    // Violet
    [128, 128, 128, alpha],
    // Gray
    [255, 192, 203, alpha],
    // Pink
    [0, 255, 255, alpha]
    // Cyan
  ];
  const colorSetDark = [
    [255, 77, 77, alpha],
    // Dark Red
    [255, 140, 0, alpha],
    // Dark Orange
    [255, 255, 85, alpha],
    // Dark Yellow
    [0, 128, 0, alpha],
    // Dark Green
    [0, 77, 255, alpha],
    // Dark Blue
    [72, 61, 139, alpha],
    // Dark Purple
    [178, 102, 255, alpha],
    // Lavender
    [192, 192, 192, alpha],
    // Light Gray
    [255, 192, 203, alpha],
    // Light Pink
    [0, 255, 255, alpha]
    // Light Cyan
  ];
  return { colorSet, colorSetDark };
};
const generateRandomColors = (levelsNumber, isDarkMode = false, chartType) => {
  const set = !isDarkMode ? colorObjs().colorSet : colorObjs().colorSetDark;
  const colorArray = [];
  if (chartType === "doughnut") {
    for (let i = 0; i <= levelsNumber; i++) {
      const index = (colorIndex + i) % set.length;
      const rgbaColor = `rgba(${set[index]?.join(", ")})`;
      colorArray.push(rgbaColor);
    }
  } else {
    for (let i = 0; i <= levelsNumber; i++) {
      const index = i % set.length;
      const rgbaColor = `rgba(${set[chartType === "pie" ? index : colorIndex]?.join(", ")})`;
      colorArray.push(rgbaColor);
    }
  }
  colorIndex = (colorIndex + 1) % set.length;
  return colorArray;
};
const pickLevels = (levelsNumber, isDarkMode = false, chartType) => {
  return generateRandomColors(levelsNumber, isDarkMode, chartType);
};
var Colors = { pickLevels };

export { Colors as default, getColorByIndex };
//# sourceMappingURL=ColorsObj.js.map
