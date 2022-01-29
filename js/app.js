import Storage from './storage.js';
import Display from './chart.js';
import View from './view.js';
import { getExpenseObject } from './helper.js';

export default class App {
  constructor(root) {
    this.root = root;
    this.data = Storage._getAllData()[0];

    const chartData = getExpenseObject(this.data.transactions);

    const view = new View(this.root, this.data, {
      changeChartType(chartType) {
        new Display(this.root, chartType, chartData);
      },
    });

    this._displayChart('doughnut', chartData);
  }

  _displayChart(chartType, chartData) {
    new Display(this.root, chartType, chartData);
  }
}
