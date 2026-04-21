'use strict';

const doughnut = (rowsLength = 1, centerDisplay = void 0) => {
  return {
    id: "centerText" + rowsLength,
    afterDatasetDraw(chart, args) {
      const {
        ctx,
        chartArea: { top, left, width, height }
      } = chart;
      ctx.save();
      let label = args.meta.label;
      label = label !== "undefined" ? label : "Total";
      const itemIndex = (
        // @ts-ignore
        args.meta.index
      );
      const total = args.meta.total;
      const totalStr = centerDisplay ? centerDisplay(total) : `${total.toFixed(2)}`;
      const fontSize = width / (rowsLength * 15);
      const fontSizeWithSpace = fontSize + 10;
      if (rowsLength > 1) {
        const calculateTop = () => {
          const halfRowsNumber = Number.isInteger(rowsLength) ? rowsLength / 2 : rowsLength > 1 ? (rowsLength - 1) / 2 : rowsLength;
          const halfHeight = height / 2;
          const topValue = halfRowsNumber * fontSizeWithSpace;
          const minimumTopValue = halfHeight - topValue;
          return minimumTopValue + fontSizeWithSpace * (itemIndex + 0.5);
        };
        ctx.font = `800 ${fontSize}px Poppins`;
        ctx.textAlign = "center";
        const labelX = width / 2 + left;
        const labelY = calculateTop();
        ctx.fillStyle = "#718096";
        ctx.fillText(`${label} 
\r ${totalStr}`, labelX, labelY);
        ctx.restore();
        ctx.save();
      } else {
        ctx.font = `800 ${width / 20}px Poppins`;
        ctx.textAlign = "center";
        const labelX = width / 2 + left;
        const labelY = height / 2 + top - height / 20;
        ctx.fillStyle = "#718096";
        ctx.fillText(label, labelX, labelY);
        ctx.restore();
        ctx.save();
        ctx.font = `800 ${width / (totalStr.length * 1.6)}px Poppins`;
        ctx.textAlign = "center";
        const x = width / 2 + left;
        const y = height / 1.9 + top + width / 15;
        ctx.fillStyle = "#718096";
        total && ctx.fillText(totalStr, x, y);
        ctx.restore();
      }
    }
  };
};

exports.doughnut = doughnut;
//# sourceMappingURL=plugins.cjs.map
