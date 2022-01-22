import Storage from './storage.js';
import Display from './chart.js';
import View from './view.js';

export default class App {
  constructor(root) {
    this.root = root;

    const view = new View(this.root, {
      changeChartType(chartType) {
        new Display(this.root, chartType);
      },
    });

    this._displayChart('doughnut');
  }

  _displayChart(chartType) {
    new Display(this.root, chartType);
  }
}
