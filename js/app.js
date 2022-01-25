import Storage from './storage.js';
import Display from './chart.js';
import View from './view.js';

export default class App {
  constructor(root) {
    this.root = root;

    this.data = new Storage('Rohan soni', 1)._getAllData();
    const view = new View(this.root, this.data[0], {
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
