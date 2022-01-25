import Storage from './storage.js';
import Display from './chart.js';
import View from './view.js';
import { calculate } from './calculate.js';

export default class App {
  constructor(root) {
    this.root = root;
    this.data = Storage._getAllData()[0];

    calculate(this.data);

    const view = new View(this.root, this.data, {
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
